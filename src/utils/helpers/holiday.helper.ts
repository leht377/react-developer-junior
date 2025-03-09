import dateHolidays from 'date-holidays'
const hd = new dateHolidays('CO')

export const isHoliday = (date: string | Date): boolean => {
  // console.log(hd.getHolidays())
  return hd.isHoliday(date) ? true : false
}
