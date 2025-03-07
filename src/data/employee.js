export const employeesList = {
  "status": 200,
  "data": [
    {
      "type": "employee",
      "id": 1,
      "attributes": {
        "first_name": "Kieran",
        "last_name": "Bartell",
        "email": "kgrant@example.org",
        "phone": "1-973-759-3481",
        "charge": "Music Composer",
        "salary": 4800798.9,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 1,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 21:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 2,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 3,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 23:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 4,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 13:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 5,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 6,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 7,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 16:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 8,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 9,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 10,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-07 00:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 2,
      "attributes": {
        "first_name": "Berenice",
        "last_name": "Goyette",
        "email": "auer.luella@example.com",
        "phone": "(984) 685-5699",
        "charge": "Record Clerk",
        "salary": 1779238.17,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 11,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 12,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 14:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 13,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 14,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 15,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 14:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 16,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 17,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 18,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:03:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 19,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 20,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 3,
      "attributes": {
        "first_name": "Rowland",
        "last_name": "Abernathy",
        "email": "mavis57@example.net",
        "phone": "607-793-2951",
        "charge": "Veterinary Technician",
        "salary": 4396225.44,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 21,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 22,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 23,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 24,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 25,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 26,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 27,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 28,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 29,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 30,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 09:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 4,
      "attributes": {
        "first_name": "Jose",
        "last_name": "Anderson",
        "email": "xhammes@example.net",
        "phone": "+1.662.955.7039",
        "charge": "Sawing Machine Setter",
        "salary": 4548703.01,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 31,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 10:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 32,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 11:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 33,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 34,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 35,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 36,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 11:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 37,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 38,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 39,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 40,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 09:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 5,
      "attributes": {
        "first_name": "Lois",
        "last_name": "Considine",
        "email": "morissette.carmine@example.net",
        "phone": "+17473805818",
        "charge": "Welder and Cutter",
        "salary": 2195879.47,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 41,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 42,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 43,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 44,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 45,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 46,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 47,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 48,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 49,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 50,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 6,
      "attributes": {
        "first_name": "Eda",
        "last_name": "Purdy",
        "email": "conn.colton@example.net",
        "phone": "+1-480-694-1929",
        "charge": "Marine Engineer",
        "salary": 3279680.99,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 51,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 52,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:56:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 53,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 54,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 13:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 55,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 56,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 57,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 58,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 59,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 60,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 7,
      "attributes": {
        "first_name": "Branson",
        "last_name": "Torp",
        "email": "hermiston.alisa@example.net",
        "phone": "(380) 923-5176",
        "charge": "Production Manager",
        "salary": 3291721.52,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 61,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 62,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:26:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 63,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 64,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 65,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 66,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 67,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 68,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 69,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 70,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 8,
      "attributes": {
        "first_name": "Darrion",
        "last_name": "Nader",
        "email": "rachael.schinner@example.com",
        "phone": "(912) 307-3269",
        "charge": "Automotive Master Mechanic",
        "salary": 4554963.28,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 71,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:32:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 72,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 73,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 74,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 14:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 75,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 76,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 77,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 78,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 79,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 80,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 9,
      "attributes": {
        "first_name": "Triston",
        "last_name": "Kemmer",
        "email": "ysawayn@example.net",
        "phone": "+1-629-587-6331",
        "charge": "Answering Service",
        "salary": 4522040.56,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 81,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 82,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 83,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 84,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 85,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 86,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 87,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 88,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 89,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 90,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 10,
      "attributes": {
        "first_name": "Albert",
        "last_name": "Hand",
        "email": "paxton69@example.net",
        "phone": "423-852-7405",
        "charge": "Bindery Machine Operator",
        "salary": 1615233.02,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 91,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 92,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 93,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 94,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 95,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 05:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 96,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 19:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 97,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 98,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 99,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 100,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 11,
      "attributes": {
        "first_name": "Caleb",
        "last_name": "Becker",
        "email": "lesch.casimir@example.org",
        "phone": "+1 (309) 415-0046",
        "charge": "Upholsterer",
        "salary": 2512001.77,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 101,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 14:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 102,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 103,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 104,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:26:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 105,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 106,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 107,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 14:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 108,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 14:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 109,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 110,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 12,
      "attributes": {
        "first_name": "Tommie",
        "last_name": "Thiel",
        "email": "ankunding.dashawn@example.net",
        "phone": "+1.785.640.2476",
        "charge": "Milling Machine Operator",
        "salary": 2452430.98,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 111,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 112,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 113,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 114,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 11:25:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 115,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 116,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 117,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 118,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 119,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 120,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 13,
      "attributes": {
        "first_name": "Alexa",
        "last_name": "O'Reilly",
        "email": "hillard19@example.org",
        "phone": "458-236-6955",
        "charge": "Industrial Production Manager",
        "salary": 2853508.49,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 121,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 122,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 21:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 123,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 13:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 124,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 125,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 08:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 126,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 127,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 14:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 128,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 13:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 129,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 15:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 130,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 14,
      "attributes": {
        "first_name": "Alysson",
        "last_name": "Abbott",
        "email": "llewellyn64@example.com",
        "phone": "743-686-1076",
        "charge": "Urban Planner",
        "salary": 4106792.89,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 131,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 132,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 133,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 134,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 11:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 135,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 136,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 137,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 138,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 139,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 14:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 140,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 15,
      "attributes": {
        "first_name": "Lorena",
        "last_name": "Price",
        "email": "kaylie97@example.org",
        "phone": "+1-445-841-8068",
        "charge": "Logging Supervisor",
        "salary": 4188131.1,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 141,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 142,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 143,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 13:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 144,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 05:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 145,
            "attributes": {
              "check_in": "2025-03-01 14:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 146,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 147,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-04 00:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 148,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 21:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 149,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 150,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 16,
      "attributes": {
        "first_name": "Hilton",
        "last_name": "Hettinger",
        "email": "catherine88@example.com",
        "phone": "540.363.9356",
        "charge": "Psychiatric Aide",
        "salary": 2290714.74,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 151,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 15:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 152,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 153,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 154,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 155,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 156,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 157,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 158,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 13:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 159,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 160,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 17,
      "attributes": {
        "first_name": "Gregg",
        "last_name": "West",
        "email": "lizzie.becker@example.net",
        "phone": "(424) 363-9464",
        "charge": "Multiple Machine Tool Setter",
        "salary": 3515163.28,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 161,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 162,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 163,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 164,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 165,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 05:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 166,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 20:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 167,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 168,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 22:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 169,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 21:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 170,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 23:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 18,
      "attributes": {
        "first_name": "Earlene",
        "last_name": "Grant",
        "email": "mayer.francesco@example.com",
        "phone": "1-512-859-8792",
        "charge": "Paving Equipment Operator",
        "salary": 3778040,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 171,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 07:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 172,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 11:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 173,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 16:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 174,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 175,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 176,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 15:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 177,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 178,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 179,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 180,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 19,
      "attributes": {
        "first_name": "Edd",
        "last_name": "Pollich",
        "email": "erwin.gottlieb@example.net",
        "phone": "+18485525142",
        "charge": "Telephone Operator",
        "salary": 3600437.79,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 181,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 19:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 182,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 19:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 183,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 184,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 185,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 13:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 186,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 187,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 13:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 188,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 189,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 16:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 190,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 15:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 20,
      "attributes": {
        "first_name": "Tyrel",
        "last_name": "Reichel",
        "email": "mohr.sigmund@example.org",
        "phone": "(480) 685-8281",
        "charge": "Commercial Pilot",
        "salary": 4773602.54,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 191,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 192,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 193,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 194,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 195,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 196,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 14:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 197,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 198,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 199,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 200,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 14:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 21,
      "attributes": {
        "first_name": "Malvina",
        "last_name": "Beer",
        "email": "bartoletti.boris@example.org",
        "phone": "+1-920-865-3787",
        "charge": "Power Plant Operator",
        "salary": 4511490.59,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 201,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 22:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 202,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 16:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 203,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 14:56:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 204,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 21:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 205,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 07:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 206,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 207,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 208,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 209,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 210,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 22,
      "attributes": {
        "first_name": "Rossie",
        "last_name": "Ziemann",
        "email": "jacobson.theresa@example.com",
        "phone": "+1-810-784-1030",
        "charge": "Forestry Conservation Science Teacher",
        "salary": 4338323.95,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 211,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 10:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 212,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 213,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 214,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 215,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 216,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 217,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 218,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 219,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 220,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 13:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 23,
      "attributes": {
        "first_name": "Orin",
        "last_name": "Flatley",
        "email": "florian09@example.net",
        "phone": "(276) 292-4215",
        "charge": "Materials Inspector",
        "salary": 3761786.56,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 221,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 06:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 222,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 223,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 224,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 08:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 225,
            "attributes": {
              "check_in": "2025-03-01 14:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 226,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 23:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 227,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 03:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 228,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 229,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 230,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 24,
      "attributes": {
        "first_name": "Christine",
        "last_name": "Kreiger",
        "email": "dillon51@example.org",
        "phone": "754.742.3955",
        "charge": "Project Manager",
        "salary": 1858647.31,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 231,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 232,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 233,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 234,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 235,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 05:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 236,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 237,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 03:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 238,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 239,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 03:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 240,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 19:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 25,
      "attributes": {
        "first_name": "Iva",
        "last_name": "Rath",
        "email": "norwood01@example.com",
        "phone": "929-247-7415",
        "charge": "Maintenance and Repair Worker",
        "salary": 3497869.86,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 241,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 242,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 243,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 244,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 245,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 246,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 11:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 247,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 248,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 249,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 250,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 26,
      "attributes": {
        "first_name": "Aditya",
        "last_name": "Hamill",
        "email": "yglover@example.org",
        "phone": "325-562-2309",
        "charge": "GED Teacher",
        "salary": 3189507.98,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 251,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 252,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 253,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 254,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 255,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 256,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 257,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 258,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 259,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 09:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 260,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 27,
      "attributes": {
        "first_name": "Curtis",
        "last_name": "Ward",
        "email": "wisoky.larry@example.net",
        "phone": "228-524-3669",
        "charge": "Horticultural Worker",
        "salary": 1794979.55,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 261,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 262,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 263,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 264,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 13:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 265,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 266,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 267,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 268,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 269,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 270,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 13:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 28,
      "attributes": {
        "first_name": "Harry",
        "last_name": "Luettgen",
        "email": "aabbott@example.org",
        "phone": "812-643-1619",
        "charge": "Civil Engineer",
        "salary": 4526565.84,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 271,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 20:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 272,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 273,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 274,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 05:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 275,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 276,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 277,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 13:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 278,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 04:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 279,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 280,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 29,
      "attributes": {
        "first_name": "Wellington",
        "last_name": "Schaden",
        "email": "tillman.doyle@example.net",
        "phone": "+1-929-258-0209",
        "charge": "Manager",
        "salary": 3658891.92,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 281,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 282,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 283,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 284,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 285,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 09:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 286,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 287,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 288,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 289,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 11:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 290,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 30,
      "attributes": {
        "first_name": "Raina",
        "last_name": "Stroman",
        "email": "audrey.boehm@example.com",
        "phone": "+1-630-449-1759",
        "charge": "Machinist",
        "salary": 3167817.62,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 291,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 292,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 293,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 294,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 295,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 296,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 297,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:46:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 298,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 299,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 14:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 300,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 09:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 31,
      "attributes": {
        "first_name": "Jesus",
        "last_name": "Nienow",
        "email": "chanel41@example.org",
        "phone": "+1-341-637-7492",
        "charge": "Entertainer and Performer",
        "salary": 3617700.32,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 301,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:25:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 302,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 14:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 303,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 304,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 305,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 306,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 307,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 14:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 308,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 309,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 11:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 310,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 32,
      "attributes": {
        "first_name": "Neha",
        "last_name": "Schmidt",
        "email": "elton.bogisich@example.net",
        "phone": "+1 (757) 784-8272",
        "charge": "Photographic Developer",
        "salary": 2202643.8,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 311,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 16:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 312,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 05:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 313,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-28 00:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 314,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 23:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 315,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 316,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 14:34:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 317,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 07:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 318,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 13:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 319,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 320,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 33,
      "attributes": {
        "first_name": "Serena",
        "last_name": "Steuber",
        "email": "lemke.courtney@example.org",
        "phone": "1-850-578-5473",
        "charge": "Computer Repairer",
        "salary": 4879131.22,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 321,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 10:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 322,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 323,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 324,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 325,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 10:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 326,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 327,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 328,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 329,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 330,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 34,
      "attributes": {
        "first_name": "Bartholome",
        "last_name": "Quigley",
        "email": "murazik.joshua@example.com",
        "phone": "+1.279.906.7918",
        "charge": "Human Resources Specialist",
        "salary": 2291142.74,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 331,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 13:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 332,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 333,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 22:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 334,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 335,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 336,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 15:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 337,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 338,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 05:25:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 339,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 23:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 340,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 35,
      "attributes": {
        "first_name": "Harley",
        "last_name": "Bins",
        "email": "bradtke.miles@example.com",
        "phone": "1-934-363-7939",
        "charge": "Dancer",
        "salary": 4062315.18,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 341,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 342,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 343,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 14:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 344,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 345,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 346,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 12:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 347,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 03:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 348,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 22:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 349,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 350,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 19:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 36,
      "attributes": {
        "first_name": "Kiel",
        "last_name": "Muller",
        "email": "qturcotte@example.org",
        "phone": "+14694163082",
        "charge": "Mathematical Technician",
        "salary": 3064513.77,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 351,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 352,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 353,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 354,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 11:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 355,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 356,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 357,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 358,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 359,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 360,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 37,
      "attributes": {
        "first_name": "Bethel",
        "last_name": "Hintz",
        "email": "walter.humberto@example.org",
        "phone": "1-832-278-1648",
        "charge": "Insurance Policy Processing Clerk",
        "salary": 4398710.21,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 361,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 362,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 363,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 364,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:35:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 365,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 366,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 367,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 368,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:26:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 369,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 370,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 38,
      "attributes": {
        "first_name": "Lee",
        "last_name": "Klein",
        "email": "herbert71@example.com",
        "phone": "+1-480-989-9460",
        "charge": "Etcher",
        "salary": 2250992.66,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 371,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 372,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 373,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 374,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 375,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 376,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 377,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 378,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 379,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 380,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 39,
      "attributes": {
        "first_name": "Gregory",
        "last_name": "Bruen",
        "email": "abbott.darryl@example.org",
        "phone": "+1-585-838-1862",
        "charge": "Musician",
        "salary": 2647175.64,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 381,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 07:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 382,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 383,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 384,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 385,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 16:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 386,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 387,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 388,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 08:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 389,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 04:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 390,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 13:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 40,
      "attributes": {
        "first_name": "Cordie",
        "last_name": "Kertzmann",
        "email": "bprosacco@example.net",
        "phone": "+1-917-670-0916",
        "charge": "Caption Writer",
        "salary": 3913061.97,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 391,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 392,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 11:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 393,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 394,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 08:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 395,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 08:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 396,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 19:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 397,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 398,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 399,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 15:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 400,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 41,
      "attributes": {
        "first_name": "Guy",
        "last_name": "Heaney",
        "email": "gmcglynn@example.net",
        "phone": "518.938.1398",
        "charge": "Power Generating Plant Operator",
        "salary": 2922976.31,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 401,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 402,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 403,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 404,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 405,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 14:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 406,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 407,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 408,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 409,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 410,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 42,
      "attributes": {
        "first_name": "Elfrieda",
        "last_name": "Kuhlman",
        "email": "nrath@example.net",
        "phone": "415-216-2486",
        "charge": "Podiatrist",
        "salary": 4028628.85,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 411,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 412,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 413,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 414,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 415,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 416,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 417,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 418,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:03:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 419,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 09:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 420,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 43,
      "attributes": {
        "first_name": "Lilla",
        "last_name": "Treutel",
        "email": "melisa.schaden@example.com",
        "phone": "1-302-429-1224",
        "charge": "Interior Designer",
        "salary": 4111040.63,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 421,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 422,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 423,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 09:46:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 424,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 425,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 426,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 427,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 428,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 429,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 430,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 13:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 44,
      "attributes": {
        "first_name": "Alexzander",
        "last_name": "Kub",
        "email": "glen28@example.org",
        "phone": "+13218230201",
        "charge": "Transportation Attendant",
        "salary": 1937395.71,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 431,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 432,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 433,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 434,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 435,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 436,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:32:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 437,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 438,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:32:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 439,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 440,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 45,
      "attributes": {
        "first_name": "Nickolas",
        "last_name": "Hayes",
        "email": "qfranecki@example.org",
        "phone": "743.430.8829",
        "charge": "Makeup Artists",
        "salary": 4895168.57,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 441,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 442,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 443,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 13:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 444,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 445,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 14:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 446,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 447,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 448,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 449,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 450,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 46,
      "attributes": {
        "first_name": "Jabari",
        "last_name": "Klein",
        "email": "christine38@example.net",
        "phone": "1-352-518-5633",
        "charge": "Automotive Master Mechanic",
        "salary": 2814984.21,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 451,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 452,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 453,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 454,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 455,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 456,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 11:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 457,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 09:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 458,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 459,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 460,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 47,
      "attributes": {
        "first_name": "Providenci",
        "last_name": "Tremblay",
        "email": "raoul.cummings@example.org",
        "phone": "+1-828-929-0140",
        "charge": "Stock Broker",
        "salary": 4173554.05,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 461,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 462,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 463,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 464,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 465,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 466,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 467,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 468,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 469,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 470,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 48,
      "attributes": {
        "first_name": "Zander",
        "last_name": "Hirthe",
        "email": "aditya53@example.org",
        "phone": "+1 (732) 718-3215",
        "charge": "Middle School Teacher",
        "salary": 2522509.69,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 471,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:24:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 472,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 11:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 473,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 474,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 475,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 476,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 10:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 477,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 478,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 479,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 480,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 49,
      "attributes": {
        "first_name": "Romaine",
        "last_name": "Rippin",
        "email": "harris.joannie@example.net",
        "phone": "828.878.6439",
        "charge": "Wind Instrument Repairer",
        "salary": 2974147.26,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 481,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 482,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 483,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 484,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 485,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 486,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 487,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 488,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 489,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:30:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 490,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 14:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 50,
      "attributes": {
        "first_name": "Delilah",
        "last_name": "Nienow",
        "email": "tillman.pasquale@example.com",
        "phone": "954-352-3405",
        "charge": "Gaming Supervisor",
        "salary": 1962754.13,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 491,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 492,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 493,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 494,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 495,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 496,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 497,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 498,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 499,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 500,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 51,
      "attributes": {
        "first_name": "Bridgette",
        "last_name": "Hegmann",
        "email": "autumn.zulauf@example.org",
        "phone": "520-890-4405",
        "charge": "General Manager",
        "salary": 2294381.49,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 501,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 502,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 503,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 504,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 13:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 505,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 15:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 506,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 06:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 507,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 508,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 509,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 08:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 510,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 52,
      "attributes": {
        "first_name": "Daren",
        "last_name": "Rodriguez",
        "email": "kutch.olin@example.org",
        "phone": "(781) 468-5920",
        "charge": "Securities Sales Agent",
        "salary": 2086759.75,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 511,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 512,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 513,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 514,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 515,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 516,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 517,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 518,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:31:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 519,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:35:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 520,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 14:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 53,
      "attributes": {
        "first_name": "Alvah",
        "last_name": "Altenwerth",
        "email": "walsh.mack@example.com",
        "phone": "(479) 883-4331",
        "charge": "Environmental Science Technician",
        "salary": 3331796.41,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 521,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 522,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 523,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 524,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 14:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 525,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 526,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 11:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 527,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 528,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 529,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:03:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 530,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 54,
      "attributes": {
        "first_name": "Everardo",
        "last_name": "Lynch",
        "email": "laurence66@example.net",
        "phone": "253.570.3943",
        "charge": "Government",
        "salary": 3311838.46,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 531,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 23:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 532,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 533,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 23:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 534,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 07:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 535,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 07:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 536,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 537,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 23:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 538,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 539,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 540,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 55,
      "attributes": {
        "first_name": "Jessica",
        "last_name": "Kerluke",
        "email": "petra.legros@example.org",
        "phone": "+1.667.686.3494",
        "charge": "Electrolytic Plating Machine Operator",
        "salary": 4760232.01,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 541,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:56:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 542,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 543,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 13:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 544,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 13:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 545,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 11:25:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 546,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 547,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 548,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 549,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 550,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 56,
      "attributes": {
        "first_name": "Robin",
        "last_name": "Fisher",
        "email": "donnelly.ibrahim@example.com",
        "phone": "1-657-666-8008",
        "charge": "Shear Machine Set-Up Operator",
        "salary": 3010912.38,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 551,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 14:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 552,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 553,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:30:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 554,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 555,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 14:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 556,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 557,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 558,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 559,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:26:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 560,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 14:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 57,
      "attributes": {
        "first_name": "Jay",
        "last_name": "Stanton",
        "email": "rwilderman@example.net",
        "phone": "+1-862-281-7090",
        "charge": "Cartographer",
        "salary": 2116269.18,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 561,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 10:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 562,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 563,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:46:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 564,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 565,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 11:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 566,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 567,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 568,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 569,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 570,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 58,
      "attributes": {
        "first_name": "Rick",
        "last_name": "Jast",
        "email": "bernhard36@example.com",
        "phone": "1-701-326-1297",
        "charge": "Control Valve Installer",
        "salary": 2705028.77,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 571,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 21:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 572,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 573,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 06:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 574,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 575,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 576,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 05:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 577,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 23:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 578,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 04:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 579,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 19:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 580,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 59,
      "attributes": {
        "first_name": "Myrtis",
        "last_name": "Goyette",
        "email": "carleton47@example.com",
        "phone": "+1 (347) 735-0095",
        "charge": "Graphic Designer",
        "salary": 4983813.7,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 581,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 582,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 583,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 584,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 585,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 586,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 587,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 588,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 589,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 590,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 60,
      "attributes": {
        "first_name": "Deangelo",
        "last_name": "Watsica",
        "email": "ggibson@example.org",
        "phone": "(856) 354-3584",
        "charge": "Metal Fabricator",
        "salary": 3832113.24,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 591,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 592,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 593,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 594,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 595,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 596,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 597,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:34:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 598,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 599,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 600,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 13:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 61,
      "attributes": {
        "first_name": "Robb",
        "last_name": "Wiegand",
        "email": "sonny23@example.net",
        "phone": "+1.831.883.7890",
        "charge": "Freight Inspector",
        "salary": 2707998.5,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 601,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 602,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 603,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 604,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 605,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 606,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 607,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 608,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 609,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 610,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 13:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 62,
      "attributes": {
        "first_name": "Mandy",
        "last_name": "Becker",
        "email": "ywill@example.org",
        "phone": "+1 (743) 304-2142",
        "charge": "Statistical Assistant",
        "salary": 3462497.89,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 611,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 612,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 22:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 613,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 614,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 615,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 15:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 616,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 04:24:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 617,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 19:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 618,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 619,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 06:30:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 620,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 15:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 63,
      "attributes": {
        "first_name": "Kenyatta",
        "last_name": "Hodkiewicz",
        "email": "hbashirian@example.org",
        "phone": "458-843-7066",
        "charge": "Slot Key Person",
        "salary": 3854164,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 621,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 07:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 622,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 623,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 624,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 625,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 626,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 627,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 23:03:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 628,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 23:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 629,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 630,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 64,
      "attributes": {
        "first_name": "Floyd",
        "last_name": "Boehm",
        "email": "mallory.bayer@example.net",
        "phone": "(279) 921-7098",
        "charge": "General Farmworker",
        "salary": 1793160.14,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 631,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 632,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 633,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 21:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 634,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 635,
            "attributes": {
              "check_in": "2025-03-01 14:00:00",
              "check_out": "2025-03-02 00:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 636,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 637,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 06:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 638,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 639,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 04:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 640,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 07:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 65,
      "attributes": {
        "first_name": "Orville",
        "last_name": "Tillman",
        "email": "eino82@example.com",
        "phone": "+1 (954) 450-0415",
        "charge": "Court Reporter",
        "salary": 2139758.32,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 641,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 642,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 643,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 644,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 13:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 645,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 646,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 647,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 648,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 649,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 650,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 66,
      "attributes": {
        "first_name": "Summer",
        "last_name": "Okuneva",
        "email": "amurray@example.net",
        "phone": "(661) 739-3444",
        "charge": "Ambulance Driver",
        "salary": 2695186.91,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 651,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 652,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 653,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 14:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 654,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 655,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 656,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 657,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 658,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 659,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 660,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 67,
      "attributes": {
        "first_name": "Iva",
        "last_name": "Waters",
        "email": "braulio07@example.com",
        "phone": "678.751.2862",
        "charge": "Plumber OR Pipefitter OR Steamfitter",
        "salary": 3198577.8,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 661,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 662,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 663,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 05:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 664,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 22:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 665,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 666,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 667,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 668,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 669,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 670,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 04:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 68,
      "attributes": {
        "first_name": "Howard",
        "last_name": "Kuphal",
        "email": "natasha34@example.net",
        "phone": "1-440-346-1079",
        "charge": "Farm and Home Management Advisor",
        "salary": 2813013.57,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 671,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 672,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 673,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 674,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 675,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 676,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 677,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 678,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 679,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 680,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 69,
      "attributes": {
        "first_name": "Gisselle",
        "last_name": "Russel",
        "email": "lilyan.welch@example.net",
        "phone": "(508) 253-6425",
        "charge": "Pipelayer",
        "salary": 3335515.13,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 681,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 682,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 683,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 684,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 13:34:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 685,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 11:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 686,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 687,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 688,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 689,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 690,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 70,
      "attributes": {
        "first_name": "Madie",
        "last_name": "Runte",
        "email": "vadams@example.org",
        "phone": "+18326912975",
        "charge": "Environmental Science Teacher",
        "salary": 4085700.67,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 691,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 692,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 693,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 694,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 695,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 10:30:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 696,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 697,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 698,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 699,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 700,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 71,
      "attributes": {
        "first_name": "Macey",
        "last_name": "Greenholt",
        "email": "toy.sabryna@example.net",
        "phone": "+1 (239) 753-6734",
        "charge": "Geologist",
        "salary": 2227515.5,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 701,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 702,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:11:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 703,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 704,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 705,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 706,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 11:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 707,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 708,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:29:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 709,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 710,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 72,
      "attributes": {
        "first_name": "Madisen",
        "last_name": "Kutch",
        "email": "shanelle67@example.net",
        "phone": "445.690.8684",
        "charge": "Pest Control Worker",
        "salary": 3481201.28,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 711,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 712,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 713,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 714,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 715,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 716,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 717,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 718,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:35:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 719,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 720,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 73,
      "attributes": {
        "first_name": "Creola",
        "last_name": "Lakin",
        "email": "valentin.smith@example.org",
        "phone": "917.631.8747",
        "charge": "Timing Device Assemblers",
        "salary": 2080752.68,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 721,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:30:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 722,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:42:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 723,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 724,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 14:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 725,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 726,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 727,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 728,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 729,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 730,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 10:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 74,
      "attributes": {
        "first_name": "Kraig",
        "last_name": "Hansen",
        "email": "wschamberger@example.com",
        "phone": "(463) 680-4132",
        "charge": "Paperhanger",
        "salary": 2836917.59,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 731,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 732,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 733,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:57:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 734,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 735,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 10:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 736,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 737,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:34:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 738,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:20:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 739,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 11:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 740,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 75,
      "attributes": {
        "first_name": "Ollie",
        "last_name": "Krajcik",
        "email": "hwatsica@example.net",
        "phone": "+14138286524",
        "charge": "Lodging Manager",
        "salary": 4957462.31,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 741,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 09:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 742,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:25:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 743,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 13:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 744,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 745,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 746,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 10:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 747,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 748,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 749,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 750,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 76,
      "attributes": {
        "first_name": "Demarco",
        "last_name": "Wisozk",
        "email": "jayde.king@example.net",
        "phone": "+1 (571) 509-3640",
        "charge": "Transformer Repairer",
        "salary": 2954048.69,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 751,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 752,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 753,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 754,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 755,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 09:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 756,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 757,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 758,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 759,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 11:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 760,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 77,
      "attributes": {
        "first_name": "Jewel",
        "last_name": "Bernier",
        "email": "dibbert.samantha@example.org",
        "phone": "+1 (727) 793-7466",
        "charge": "Psychology Teacher",
        "salary": 4464872.42,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 761,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 10:34:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 762,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 763,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 764,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 765,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 766,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 767,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 768,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 11:24:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 769,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 770,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 78,
      "attributes": {
        "first_name": "Katelin",
        "last_name": "Feil",
        "email": "koch.luther@example.com",
        "phone": "725-610-3166",
        "charge": "Railroad Yard Worker",
        "salary": 4872115.79,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 771,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 772,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 773,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 774,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 775,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 776,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 10:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 777,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 778,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 779,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 780,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 79,
      "attributes": {
        "first_name": "Madisen",
        "last_name": "Jaskolski",
        "email": "jocelyn28@example.net",
        "phone": "(864) 571-2418",
        "charge": "Commercial and Industrial Designer",
        "salary": 2291822.24,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 781,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 782,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 783,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 784,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 09:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 785,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 09:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 786,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 13:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 787,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 13:32:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 788,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:31:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 789,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 790,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 80,
      "attributes": {
        "first_name": "Rhett",
        "last_name": "Nolan",
        "email": "jamarcus59@example.com",
        "phone": "(641) 259-6275",
        "charge": "Millwright",
        "salary": 3621460.63,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 791,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 23:31:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 792,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 793,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 794,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 03:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 795,
            "attributes": {
              "check_in": "2025-03-01 14:00:00",
              "check_out": "2025-03-01 20:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 796,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 14:56:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 797,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 19:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 798,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 799,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 800,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 81,
      "attributes": {
        "first_name": "Patricia",
        "last_name": "Swift",
        "email": "hansen.ervin@example.com",
        "phone": "720-377-7758",
        "charge": "Database Administrator",
        "salary": 1670165.89,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 801,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 802,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 803,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 804,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 11:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 805,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 806,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 807,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 808,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 809,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 10:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 810,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 82,
      "attributes": {
        "first_name": "Rodrigo",
        "last_name": "Moore",
        "email": "andrew.gleason@example.net",
        "phone": "+1-901-601-5820",
        "charge": "Cost Estimator",
        "salary": 3400900.89,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 811,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 812,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 813,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 814,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 815,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 816,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 817,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 14:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 818,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 14:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 819,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 820,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 83,
      "attributes": {
        "first_name": "Donny",
        "last_name": "Simonis",
        "email": "pietro.yost@example.org",
        "phone": "(380) 591-6042",
        "charge": "Personal Service Worker",
        "salary": 3116555.48,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 821,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 822,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 823,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 824,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 825,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 03:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 826,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 827,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 11:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 828,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 05:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 829,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 23:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 830,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-07 00:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 84,
      "attributes": {
        "first_name": "Malinda",
        "last_name": "Prosacco",
        "email": "kkunze@example.com",
        "phone": "+1-256-397-7721",
        "charge": "Anthropology Teacher",
        "salary": 4100619.61,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 831,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 832,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 11:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 833,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 834,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 835,
            "attributes": {
              "check_in": "2025-03-01 14:00:00",
              "check_out": "2025-03-01 21:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 836,
            "attributes": {
              "check_in": "2025-03-02 14:00:00",
              "check_out": "2025-03-02 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 837,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 838,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 07:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 839,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 840,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 19:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 85,
      "attributes": {
        "first_name": "Kaden",
        "last_name": "Reichert",
        "email": "murray14@example.org",
        "phone": "(364) 790-0030",
        "charge": "Farmworker",
        "salary": 3769571.44,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 841,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 842,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 843,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:55:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 844,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 10:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 845,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 846,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 847,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 848,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 10:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 849,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 850,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 86,
      "attributes": {
        "first_name": "Jaclyn",
        "last_name": "Pfannerstill",
        "email": "isabell.koepp@example.org",
        "phone": "+13608914756",
        "charge": "Elementary and Secondary School Administrators",
        "salary": 2919010.68,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 851,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 11:12:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 852,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:46:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 853,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 854,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 855,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 11:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 856,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 857,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 858,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 13:26:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 859,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 860,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 87,
      "attributes": {
        "first_name": "Lela",
        "last_name": "Kovacek",
        "email": "melissa.schuster@example.net",
        "phone": "+1.682.401.5885",
        "charge": "Medical Equipment Preparer",
        "salary": 4758642.64,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 861,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 862,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 14:15:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 863,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 864,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 865,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 13:27:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 866,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 867,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 868,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 869,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 09:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 870,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 09:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 88,
      "attributes": {
        "first_name": "Fredy",
        "last_name": "Spinka",
        "email": "megane.hane@example.com",
        "phone": "930-446-0938",
        "charge": "Woodworking Machine Operator",
        "salary": 4998774.07,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 871,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 872,
            "attributes": {
              "check_in": "2025-02-26 14:00:00",
              "check_out": "2025-02-26 23:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 873,
            "attributes": {
              "check_in": "2025-02-27 06:00:00",
              "check_out": "2025-02-27 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 874,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-02-28 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 875,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 15:38:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 876,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 877,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 19:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 878,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 879,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 03:48:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 880,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 89,
      "attributes": {
        "first_name": "Colby",
        "last_name": "Jacobi",
        "email": "easter.reilly@example.com",
        "phone": "+1-929-756-8800",
        "charge": "Athletic Trainer",
        "salary": 1961408.66,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 881,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 882,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 883,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 884,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:28:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 885,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 09:50:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 886,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 887,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:23:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 888,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 889,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 890,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 90,
      "attributes": {
        "first_name": "Hellen",
        "last_name": "Hahn",
        "email": "luis.abshire@example.net",
        "phone": "(765) 543-8065",
        "charge": "Rough Carpenter",
        "salary": 4159070.92,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 891,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 892,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:03:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 893,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 894,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 11:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 895,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 896,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 10:43:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 897,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 13:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 898,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 899,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 900,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 91,
      "attributes": {
        "first_name": "King",
        "last_name": "Altenwerth",
        "email": "archibald.sporer@example.org",
        "phone": "+1-903-546-4401",
        "charge": "Embalmer",
        "salary": 2196601.52,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 901,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 902,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 10:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 903,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 11:53:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 904,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 905,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 906,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 907,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 10:06:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 908,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 14:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 909,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 910,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:18:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 92,
      "attributes": {
        "first_name": "Orie",
        "last_name": "Jakubowski",
        "email": "rjohnson@example.org",
        "phone": "832.284.1074",
        "charge": "Occupational Health Safety Specialist",
        "salary": 2619653.29,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 911,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 912,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:01:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 913,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 914,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 915,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 11:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 916,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 09:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 917,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 13:31:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 918,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 919,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 13:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 920,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 11:37:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 93,
      "attributes": {
        "first_name": "Stuart",
        "last_name": "Fadel",
        "email": "smarquardt@example.net",
        "phone": "(678) 331-0140",
        "charge": "Substance Abuse Social Worker",
        "salary": 2003513.67,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 921,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 13:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 922,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 11:35:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 923,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 10:49:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 924,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 925,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 14:09:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 926,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 927,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 11:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 928,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 929,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 14:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 930,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 94,
      "attributes": {
        "first_name": "Colin",
        "last_name": "Kshlerin",
        "email": "kyra.brakus@example.com",
        "phone": "1-443-415-0572",
        "charge": "Communications Teacher",
        "salary": 3575189.41,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 931,
            "attributes": {
              "check_in": "2025-02-25 06:00:00",
              "check_out": "2025-02-25 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 932,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 05:46:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 933,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 07:54:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 934,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 935,
            "attributes": {
              "check_in": "2025-03-01 22:00:00",
              "check_out": "2025-03-02 04:21:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 936,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 937,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 938,
            "attributes": {
              "check_in": "2025-03-04 22:00:00",
              "check_out": "2025-03-05 05:08:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 939,
            "attributes": {
              "check_in": "2025-03-05 06:00:00",
              "check_out": "2025-03-05 13:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 940,
            "attributes": {
              "check_in": "2025-03-06 06:00:00",
              "check_out": "2025-03-06 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 95,
      "attributes": {
        "first_name": "Edgar",
        "last_name": "Pagac",
        "email": "reilly.roxane@example.org",
        "phone": "+1-405-453-0324",
        "charge": "Architectural Drafter",
        "salary": 3383404.54,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 941,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 942,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 09:36:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 943,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 944,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 945,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 09:07:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 946,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:13:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 947,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 948,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 09:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 949,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 11:22:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 950,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 96,
      "attributes": {
        "first_name": "Carole",
        "last_name": "Swift",
        "email": "charlene71@example.org",
        "phone": "+16468337750",
        "charge": "Maid",
        "salary": 2890460.73,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 1,
            "attributes": {
              "name": "Horario administrativo",
              "schedule_type": "fixed",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 1,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 2,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 3,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 4,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 5,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "18:00:00",
                    "break_time_start_at": "12:00:00",
                    "break_time_finished_at": "14:00:00",
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 6,
                  "attributes": {
                    "day": "6",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 951,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 952,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 13:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 953,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 954,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:04:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 955,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 956,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 957,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 958,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 959,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 960,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:19:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 97,
      "attributes": {
        "first_name": "Judson",
        "last_name": "Ziemann",
        "email": "assunta.marks@example.net",
        "phone": "+1-734-392-8872",
        "charge": "Mixing and Blending Machine Operator",
        "salary": 3457492.42,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 2,
            "attributes": {
              "name": "Horario medio tiempo",
              "schedule_type": "fixed_halftime",
              "maximun_weekly_hours": 23,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": {
              "workshiftDays": [
                {
                  "type": "workshift_day",
                  "id": 7,
                  "attributes": {
                    "day": "1",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 8,
                  "attributes": {
                    "day": "2",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 9,
                  "attributes": {
                    "day": "3",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 10,
                  "attributes": {
                    "day": "4",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                },
                {
                  "type": "workshift_day",
                  "id": 11,
                  "attributes": {
                    "day": "5",
                    "start_at": "08:00:00",
                    "finished_at": "12:00:00",
                    "break_time_start_at": null,
                    "break_time_finished_at": null,
                    "created_at": "2025-03-06T15:49:39.000000Z",
                    "updated_at": "2025-03-06T15:49:39.000000Z"
                  }
                }
              ]
            }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 961,
            "attributes": {
              "check_in": "2025-02-25 08:00:00",
              "check_out": "2025-02-25 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 962,
            "attributes": {
              "check_in": "2025-02-26 08:00:00",
              "check_out": "2025-02-26 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 963,
            "attributes": {
              "check_in": "2025-02-27 08:00:00",
              "check_out": "2025-02-27 14:58:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 964,
            "attributes": {
              "check_in": "2025-02-28 08:00:00",
              "check_out": "2025-02-28 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 965,
            "attributes": {
              "check_in": "2025-03-01 08:00:00",
              "check_out": "2025-03-01 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 966,
            "attributes": {
              "check_in": "2025-03-02 08:00:00",
              "check_out": "2025-03-02 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 967,
            "attributes": {
              "check_in": "2025-03-03 08:00:00",
              "check_out": "2025-03-03 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 968,
            "attributes": {
              "check_in": "2025-03-04 08:00:00",
              "check_out": "2025-03-04 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 969,
            "attributes": {
              "check_in": "2025-03-05 08:00:00",
              "check_out": "2025-03-05 12:02:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 970,
            "attributes": {
              "check_in": "2025-03-06 08:00:00",
              "check_out": "2025-03-06 12:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 98,
      "attributes": {
        "first_name": "Walker",
        "last_name": "Kiehn",
        "email": "ortiz.stacy@example.org",
        "phone": "+1 (585) 977-2554",
        "charge": "Forming Machine Operator",
        "salary": 4841186.59,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 971,
            "attributes": {
              "check_in": "2025-02-25 22:00:00",
              "check_out": "2025-02-26 05:52:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 972,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 06:17:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 973,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-28 00:33:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 974,
            "attributes": {
              "check_in": "2025-02-28 22:00:00",
              "check_out": "2025-03-01 04:05:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 975,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 976,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 15:24:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 977,
            "attributes": {
              "check_in": "2025-03-03 22:00:00",
              "check_out": "2025-03-04 03:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 978,
            "attributes": {
              "check_in": "2025-03-04 06:00:00",
              "check_out": "2025-03-04 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 979,
            "attributes": {
              "check_in": "2025-03-05 22:00:00",
              "check_out": "2025-03-06 05:41:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 980,
            "attributes": {
              "check_in": "2025-03-06 22:00:00",
              "check_out": "2025-03-07 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 99,
      "attributes": {
        "first_name": "Lucie",
        "last_name": "Nienow",
        "email": "iprosacco@example.net",
        "phone": "435.815.5299",
        "charge": "Short Order Cook",
        "salary": 2086548.51,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 981,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 20:51:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 982,
            "attributes": {
              "check_in": "2025-02-26 22:00:00",
              "check_out": "2025-02-27 07:47:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 983,
            "attributes": {
              "check_in": "2025-02-27 14:00:00",
              "check_out": "2025-02-27 21:45:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 984,
            "attributes": {
              "check_in": "2025-02-28 14:00:00",
              "check_out": "2025-03-01 00:39:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 985,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 986,
            "attributes": {
              "check_in": "2025-03-02 22:00:00",
              "check_out": "2025-03-03 04:10:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 987,
            "attributes": {
              "check_in": "2025-03-03 06:00:00",
              "check_out": "2025-03-03 16:59:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 988,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 19:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 989,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 990,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    },
    {
      "type": "employee",
      "id": 100,
      "attributes": {
        "first_name": "Richard",
        "last_name": "Bayer",
        "email": "vlind@example.net",
        "phone": "(484) 607-6799",
        "charge": "Armored Assault Vehicle Crew Member",
        "salary": 1829117.17,
        "created_at": "2025-03-06T15:49:39.000000Z",
        "updated_at": "2025-03-06T15:49:39.000000Z"
      },
      "relationships": {
        "workshifts": [
          {
            "type": "workshift",
            "id": 3,
            "attributes": {
              "name": "Horario rotativo",
              "schedule_type": "flexible",
              "maximun_weekly_hours": 46,
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            },
            "relationships": { "workshiftDays": [] }
          }
        ],
        "accessControls": [
          {
            "type": "access_control",
            "id": 991,
            "attributes": {
              "check_in": "2025-02-25 14:00:00",
              "check_out": "2025-02-25 21:44:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 992,
            "attributes": {
              "check_in": "2025-02-26 06:00:00",
              "check_out": "2025-02-26 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 993,
            "attributes": {
              "check_in": "2025-02-27 22:00:00",
              "check_out": "2025-02-28 02:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 994,
            "attributes": {
              "check_in": "2025-02-28 06:00:00",
              "check_out": "2025-02-28 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 995,
            "attributes": {
              "check_in": "2025-03-01 06:00:00",
              "check_out": "2025-03-01 10:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 996,
            "attributes": {
              "check_in": "2025-03-02 06:00:00",
              "check_out": "2025-03-02 16:14:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 997,
            "attributes": {
              "check_in": "2025-03-03 14:00:00",
              "check_out": "2025-03-03 23:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 998,
            "attributes": {
              "check_in": "2025-03-04 14:00:00",
              "check_out": "2025-03-04 18:00:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 999,
            "attributes": {
              "check_in": "2025-03-05 14:00:00",
              "check_out": "2025-03-05 23:16:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          },
          {
            "type": "access_control",
            "id": 1000,
            "attributes": {
              "check_in": "2025-03-06 14:00:00",
              "check_out": "2025-03-06 19:40:00",
              "created_at": "2025-03-06T15:49:39.000000Z",
              "updated_at": "2025-03-06T15:49:39.000000Z"
            }
          }
        ]
      }
    }
  ]
}
