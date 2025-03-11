import { EmployeeEntity } from '@/domain/entities/employe.entity'
import { ScheduleType } from '@/domain/types/workshifts'
import { getWorkSchedule } from './getWorkSchedule.helper'
import { convertHourToSeconds } from './convertHourToSeconds.helper'
import { DAYS_OF_WEEK_NAMES } from '@/constant'
import { isHoliday } from './holiday.helper'
import { AccessControls } from '@/domain/types/accessControl'

const calcularHED = (scheduleType: ScheduleType, accessControls: AccessControls): number => {
  let horasExtrasSegundos = 0

  if (scheduleType === 'flexible') {
    // horasExtrasSegundos = calcularHEDHorarioFlexible(employe)
    return horasExtrasSegundos
  }
  //OBTENER TIPO DE HORARIO

  const horariosDeTrabajo = getWorkSchedule(scheduleType)

  const hora_minima_jornada_diurna = convertHourToSeconds('06:00')
  const hora_maxima_jornada_diurna = convertHourToSeconds('21:00')

  const rangoHorasTrabajoDiurnoPorDia = new Map<
    number,
    {
      start_at: number
      finished_at: number
      breakTime: {
        start_at: number
        finished_at: number
      } | null
    }
  >()

  horariosDeTrabajo?.schedules.forEach((horario) => {
    horario.days.forEach((dia) => {
      rangoHorasTrabajoDiurnoPorDia.set(dia, {
        start_at: convertHourToSeconds(horario.workHours.start),
        finished_at: convertHourToSeconds(horario.workHours.end),
        breakTime: horario.breakTime
          ? {
              start_at: convertHourToSeconds(horario.breakTime.start),
              finished_at: convertHourToSeconds(horario.breakTime.end)
            }
          : null
      })
    })
  })

  const { check_in, check_out } = accessControls.attributes

  const day = check_in.getDay()
  if (day === DAYS_OF_WEEK_NAMES.SUNDAY || isHoliday(check_in)) {
    return 0
  }

  const hora_ingreso = convertHourToSeconds(
    `${check_in.getHours()}:${check_in.getMinutes()}:${check_in.getSeconds()}`
  )
  const hora_salida = convertHourToSeconds(
    `${check_out.getHours()}:${check_out.getMinutes()}:${check_out.getSeconds()}`
  )

  const horario_del_dia = rangoHorasTrabajoDiurnoPorDia.get(check_in.getDay()) //PUDE SER NULL SI EL DIA NO ESTA EN EL MAP COMO UN DOMINGO

  const hora_ingreso_acotada =
    hora_ingreso < hora_minima_jornada_diurna ? hora_minima_jornada_diurna : hora_ingreso
  const hora_salida_acotada =
    hora_salida < hora_maxima_jornada_diurna ? hora_salida : hora_maxima_jornada_diurna

  /*
      ✅ Trabajo antes del inicio de la jornada
      ✅ Trabajo después del final de la jornada
      ✅ Trabajo en el tiempo de descanso
      ✅ Trabajo en un día fuera de la jornada ordinaria (ej. sábado)
    */

  // CASO DONDE TRABAJAS UN DIA QUE ESTA FUERA DE TU HORARIO Y NO SEA DOMINGO O FESTIVO
  if (!horario_del_dia) {
    // NO SE SABE HORA DE DESCANSO POR LO CUAL SE TOMA TODO EL TIEMPO LABORADO COMO HORA EXTRA
    horasExtrasSegundos += hora_salida_acotada - hora_ingreso_acotada
    return horasExtrasSegundos
  }

  // CALCULAR SI LA HORA DE INGRESO ESTA EN EL RANGO DE 6:00 AM Y SU HORA DE INGRESO EN EL HORARIO ES DECIR ENTRO MAS TEMPRANO AL TRABAJO
  if (hora_ingreso_acotada < horario_del_dia.start_at) {
    horasExtrasSegundos += horario_del_dia.start_at - hora_ingreso_acotada // HORAS EXTRAS DIURNAS TRABAJADADAS ANTES DE INGRESAR SEGUN SU HORARIO MI HORARIO
  }

  // CONDICIONES SI HAY DESCANSO
  if (horario_del_dia.breakTime) {
    // TRABAJADOR USO TIEMPO DE DESCANSO PARA TRABAJAR Y SALIO
    if (
      hora_salida_acotada < horario_del_dia.finished_at &&
      hora_salida_acotada > horario_del_dia.breakTime.start_at
    ) {
      horasExtrasSegundos += hora_salida_acotada - horario_del_dia.breakTime.start_at
      return horasExtrasSegundos
    }

    // TRABAJADOR SALIO ANTES DE SU DESCANSO NO HAY HORAS EXTRAS
    if (hora_salida_acotada <= horario_del_dia.breakTime.start_at) {
      return horasExtrasSegundos
    }
  }

  if (hora_salida_acotada > horario_del_dia.finished_at)
    horasExtrasSegundos += hora_salida_acotada - horario_del_dia.finished_at
  //

  return horasExtrasSegundos
}

const calcularHEDHorarioFlexible = (employe: EmployeeEntity): number => {
  const numero_maximo_de_horas_semanales = 2
  employe.relationships.workshifts[0].attributes.maximun_weekly_hours
  const accessControls = employe.relationships.accessControls

  return 0

  //SEMANA 7 DIAS SEGUIDOS
}

const calcularHEN = (scheduleType: ScheduleType, accessControls: AccessControls): number => {
  let horasExtrasSegundos = 0

  if (scheduleType === 'flexible') {
    //TODO
    return horasExtrasSegundos
  }
  //OBTENER TIPO DE HORARIO

  const horariosDeTrabajo = getWorkSchedule(scheduleType)

  const hora_inicio_jornada_noturno = convertHourToSeconds('21:00')
  const hora_fin_jornada_noturno = convertHourToSeconds('06:00')

  const rangoHorasTrabajoPorDia = new Map<
    number,
    {
      start_at: number
      finished_at: number
      breakTime: {
        start_at: number
        finished_at: number
      } | null
    }
  >()

  horariosDeTrabajo?.schedules.forEach((horario) => {
    horario.days.forEach((dia) => {
      rangoHorasTrabajoPorDia.set(dia, {
        start_at: convertHourToSeconds(horario.workHours.start),
        finished_at: convertHourToSeconds(horario.workHours.end),
        breakTime: horario.breakTime
          ? {
              start_at: convertHourToSeconds(horario.breakTime.start),
              finished_at: convertHourToSeconds(horario.breakTime.end)
            }
          : null
      })
    })
  })

  const { check_in, check_out } = accessControls.attributes

  const day = check_in.getDay()
  if (day === DAYS_OF_WEEK_NAMES.SUNDAY || isHoliday(check_in)) return 0

  /*
      ✅ Trabajo noturno antes del inicio de la jornada
      ✅ Trabajo noturno despues de fin de la jornada
      ✅ Trabajo en un día fuera de la jornada ordinaria (ej. sábado)
      */

  const hora_ingreso = convertHourToSeconds(
    `${check_in.getHours()}:${check_in.getMinutes()}:${check_in.getSeconds()}`
  )
  const hora_salida = convertHourToSeconds(
    `${check_out.getHours()}:${check_out.getMinutes()}:${check_out.getSeconds()}`
  )

  const horario_del_dia = rangoHorasTrabajoPorDia.get(check_in.getDay()) //PUDE SER NULL SI EL DIA NO ESTA EN EL MAP COMO UN DOMINGO

  if (!horario_del_dia) {
    if (hora_ingreso < hora_fin_jornada_noturno) {
      horasExtrasSegundos += hora_fin_jornada_noturno - hora_ingreso
    }

    if (hora_salida > hora_inicio_jornada_noturno)
      horasExtrasSegundos += hora_salida - hora_inicio_jornada_noturno

    return horasExtrasSegundos
  }

  // ENTRO ANTES DE LAS 06:00
  if (
    horario_del_dia.start_at > hora_fin_jornada_noturno &&
    hora_ingreso < hora_fin_jornada_noturno
  ) {
    horasExtrasSegundos += hora_fin_jornada_noturno - hora_ingreso
  }

  // HORARIO DE INGRESO SUPERIO A INICIO DE LA JORNADA NOCTURNA
  if (
    horario_del_dia.start_at > hora_inicio_jornada_noturno &&
    hora_ingreso < horario_del_dia.start_at &&
    hora_ingreso > hora_inicio_jornada_noturno
  )
    horasExtrasSegundos += horario_del_dia.start_at - hora_ingreso

  // TRABAJO REALIZADO DESPUES DE LAS 21:00
  if (
    horario_del_dia.finished_at < hora_inicio_jornada_noturno &&
    hora_salida > hora_inicio_jornada_noturno
  )
    horasExtrasSegundos += hora_salida - hora_inicio_jornada_noturno

  // TRABAJO NOCTURNO REALIZADO DESPUES DE SU HORA DE SALIDA, SIEMPRE Y CUANDO LA HORA DE SALIDA SEA MAYOR AL INICIO DEL HORARIO NOCTURNO (21:00)
  if (
    horario_del_dia.finished_at > hora_inicio_jornada_noturno &&
    hora_salida > horario_del_dia.finished_at
  )
    horasExtrasSegundos += hora_salida - horario_del_dia.finished_at

  return horasExtrasSegundos
}

const calcularHEDDominical = (
  scheduleType: ScheduleType,
  accessControls: AccessControls
): number => {
  let horasExtrasSegundos = 0

  if (scheduleType === 'flexible') {
    // horasExtrasSegundos = calcularHEDHorarioFlexible(employe)
    return horasExtrasSegundos
  }
  //OBTENER TIPO DE HORARIO

  const horariosDeTrabajo = getWorkSchedule(scheduleType)

  const hora_minima_jornada_diurna = convertHourToSeconds('06:00')
  const hora_maxima_jornada_diurna = convertHourToSeconds('21:00')

  const rangoHorasTrabajoDiurnoPorDia = new Map<
    number,
    {
      start_at: number
      finished_at: number
      breakTime: {
        start_at: number
        finished_at: number
      } | null
    }
  >()

  horariosDeTrabajo?.schedules.forEach((horario) => {
    horario.days.forEach((dia) => {
      rangoHorasTrabajoDiurnoPorDia.set(dia, {
        start_at: convertHourToSeconds(horario.workHours.start),
        finished_at: convertHourToSeconds(horario.workHours.end),
        breakTime: horario.breakTime
          ? {
              start_at: convertHourToSeconds(horario.breakTime.start),
              finished_at: convertHourToSeconds(horario.breakTime.end)
            }
          : null
      })
    })
  })

  const { check_in, check_out } = accessControls.attributes

  const day = check_in.getDay()
  if (day === DAYS_OF_WEEK_NAMES.SUNDAY || isHoliday(check_in)) {
    const hora_ingreso = convertHourToSeconds(
      `${check_in.getHours()}:${check_in.getMinutes()}:${check_in.getSeconds()}`
    )
    const hora_salida = convertHourToSeconds(
      `${check_out.getHours()}:${check_out.getMinutes()}:${check_out.getSeconds()}`
    )

    const horario_del_dia = rangoHorasTrabajoDiurnoPorDia.get(check_in.getDay()) //PUDE SER NULL SI EL DIA NO ESTA EN EL MAP COMO UN DOMINGO

    const hora_ingreso_acotada =
      hora_ingreso < hora_minima_jornada_diurna ? hora_minima_jornada_diurna : hora_ingreso
    const hora_salida_acotada =
      hora_salida < hora_maxima_jornada_diurna ? hora_salida : hora_maxima_jornada_diurna

    /*
        ✅ Trabajo antes del inicio de la jornada
        ✅ Trabajo después del final de la jornada
        ✅ Trabajo en el tiempo de descanso
        ✅ Trabajo en un día fuera de la jornada ordinaria (ej. sábado)
      */

    // CASO DONDE TRABAJAS UN DIA QUE ESTA FUERA DE TU HORARIO SEA DOMINGO O FESTIVO
    if (!horario_del_dia) {
      // NO SE SABE HORA DE DESCANSO POR LO CUAL SE TOMA TODO EL TIEMPO LABORADO COMO HORA EXTRA
      horasExtrasSegundos += hora_salida_acotada - hora_ingreso_acotada
      return horasExtrasSegundos
    }

    // CALCULAR SI LA HORA DE INGRESO ESTA EN EL RANGO DE 6:00 AM Y SU HORA DE INGRESO EN EL HORARIO ES DECIR ENTRO MAS TEMPRANO AL TRABAJO
    if (hora_ingreso_acotada < horario_del_dia.start_at) {
      horasExtrasSegundos += horario_del_dia.start_at - hora_ingreso_acotada // HORAS EXTRAS DIURNAS TRABAJADADAS ANTES DE INGRESAR SEGUN SU HORARIO MI HORARIO
    }

    // CONDICIONES SI HAY DESCANSO
    if (horario_del_dia.breakTime) {
      // TRABAJADOR USO TIEMPO DE DESCANSO PARA TRABAJAR Y SALIO
      if (
        hora_salida_acotada < horario_del_dia.finished_at &&
        hora_salida_acotada > horario_del_dia.breakTime.start_at
      ) {
        horasExtrasSegundos += hora_salida_acotada - horario_del_dia.breakTime.start_at
        return horasExtrasSegundos
      }

      // TRABAJADOR SALIO ANTES DE SU DESCANSO NO HAY HORAS EXTRAS
      if (hora_salida_acotada <= horario_del_dia.breakTime.start_at) {
        return 0
      }
    }

    if (hora_salida_acotada > horario_del_dia.finished_at)
      horasExtrasSegundos += hora_salida_acotada - horario_del_dia.finished_at
    //
  }

  return horasExtrasSegundos
}

const calcularHENDominical = (
  scheduleType: ScheduleType,
  accessControls: AccessControls
): number => {
  let horasExtrasSegundos = 0

  if (scheduleType === 'flexible') {
    //TODO
    return horasExtrasSegundos
  }
  //OBTENER TIPO DE HORARIO

  const horariosDeTrabajo = getWorkSchedule(scheduleType)

  const hora_inicio_jornada_noturno = convertHourToSeconds('21:00')
  const hora_fin_jornada_noturno = convertHourToSeconds('06:00')

  const rangoHorasTrabajoPorDia = new Map<
    number,
    {
      start_at: number
      finished_at: number
      breakTime: {
        start_at: number
        finished_at: number
      } | null
    }
  >()

  horariosDeTrabajo?.schedules.forEach((horario) => {
    horario.days.forEach((dia) => {
      rangoHorasTrabajoPorDia.set(dia, {
        start_at: convertHourToSeconds(horario.workHours.start),
        finished_at: convertHourToSeconds(horario.workHours.end),
        breakTime: horario.breakTime
          ? {
              start_at: convertHourToSeconds(horario.breakTime.start),
              finished_at: convertHourToSeconds(horario.breakTime.end)
            }
          : null
      })
    })
  })

  const { check_in, check_out } = accessControls.attributes

  const day = check_in.getDay()
  if (day === DAYS_OF_WEEK_NAMES.SUNDAY || isHoliday(check_in)) {
    const hora_ingreso = convertHourToSeconds(
      `${check_in.getHours()}:${check_in.getMinutes()}:${check_in.getSeconds()}`
    )
    const hora_salida = convertHourToSeconds(
      `${check_out.getHours()}:${check_out.getMinutes()}:${check_out.getSeconds()}`
    )

    const horario_del_dia = rangoHorasTrabajoPorDia.get(check_in.getDay()) //PUDE SER NULL SI EL DIA NO ESTA EN EL MAP COMO UN DOMINGO

    if (!horario_del_dia) {
      if (hora_ingreso < hora_fin_jornada_noturno) {
        horasExtrasSegundos += hora_fin_jornada_noturno - hora_ingreso
      }

      if (hora_salida > hora_inicio_jornada_noturno)
        horasExtrasSegundos += hora_salida - hora_inicio_jornada_noturno

      return horasExtrasSegundos
    }

    // ENTRO ANTES DE LAS 06:00
    if (
      horario_del_dia.start_at > hora_fin_jornada_noturno &&
      hora_ingreso < hora_fin_jornada_noturno
    ) {
      horasExtrasSegundos += hora_fin_jornada_noturno - hora_ingreso
    }

    // HORARIO DE INGRESO SUPERIO A INICIO DE LA JORNADA NOCTURNA
    if (
      horario_del_dia.start_at > hora_inicio_jornada_noturno &&
      hora_ingreso < horario_del_dia.start_at &&
      hora_ingreso > hora_inicio_jornada_noturno
    )
      horasExtrasSegundos += horario_del_dia.start_at - hora_ingreso

    // TRABAJO REALIZADO DESPUES DE LAS 21:00
    if (
      horario_del_dia.finished_at < hora_inicio_jornada_noturno &&
      hora_salida > hora_inicio_jornada_noturno
    )
      horasExtrasSegundos += hora_salida - hora_inicio_jornada_noturno

    // TRABAJO NOCTURNO REALIZADO DESPUES DE SU HORA DE SALIDA, SIEMPRE Y CUANDO LA HORA DE SALIDA SEA MAYOR AL INICIO DEL HORARIO NOCTURNO (21:00)
    if (
      horario_del_dia.finished_at > hora_inicio_jornada_noturno &&
      hora_salida > horario_del_dia.finished_at
    )
      horasExtrasSegundos += hora_salida - horario_del_dia.finished_at

    /*
      ✅ Trabajo noturno antes del inicio de la jornada
      ✅ Trabajo noturno despues de fin de la jornada
      ✅ Trabajo en un día fuera de la jornada ordinaria (ej. sábado)
      */
  }
  return horasExtrasSegundos
}

const calcularRCN = (scheduleType: ScheduleType, employe: EmployeeEntity): number => {
  // let horas = 0
  // const hora_inicio_jornada_noturno = convertHourToSeconds('21:00')
  // const hora_fin_jornada_noturno = convertHourToSeconds('06:00')

  // if (scheduleType === 'fixed_halftime' || scheduleType === 'fixed') return horas
  // if (scheduleType === 'flexible') {

  // }
  // return horas
  return 0
}

export const overtimerCalculator = {
  calcularHED,
  calcularHEN,
  calcularHEDDominical,
  calcularHENDominical,
  calcularRCN
}

// 3. Calculo de horas extras y salario a devengar
// Determinar las horas extras con base en las horas trabajadas y el horario establecido
// ✅ HED: Horas extras diurnas
// ✅ HEN: Horas extras nocturnas
// ✅ HEDD: Hora extras diurna dominical o festiva
// ✅ HEDN: Hora extra dominical nocturna
// RC: Recargo nocturno
// RD: Recargo dominical
// RND: Recargo nocturno dominical
