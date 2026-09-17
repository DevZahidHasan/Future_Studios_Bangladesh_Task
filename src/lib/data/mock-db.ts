import { Order, ActivityEvent, AnalyticsSummary } from '@/types';

// AUTO-GENERATED MOCK DATABASE
export const mockOrders: Order[] = [
  {
    "id": "ord_0117",
    "customer": {
      "id": "cust_042",
      "name": "David Garcia",
      "email": "david.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_042"
    },
    "items": [
      {
        "id": "item_3169",
        "name": "Product Alpha 29",
        "quantity": 1,
        "unitPrice": 367.84,
        "totalPrice": 367.84
      },
      {
        "id": "item_7175",
        "name": "Product Delta 7",
        "quantity": 1,
        "unitPrice": 257.38,
        "totalPrice": 257.38
      },
      {
        "id": "item_9694",
        "name": "Product Beta 50",
        "quantity": 1,
        "unitPrice": 71.5,
        "totalPrice": 71.5
      }
    ],
    "totalAmount": 696.72,
    "status": "completed",
    "createdAt": "2026-09-13T00:48:24.876Z"
  },
  {
    "id": "ord_0078",
    "customer": {
      "id": "cust_038",
      "name": "Barbara Williams",
      "email": "barbara.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_038"
    },
    "items": [
      {
        "id": "item_1366",
        "name": "Product Sigma 4",
        "quantity": 3,
        "unitPrice": 250.16,
        "totalPrice": 750.48
      }
    ],
    "totalAmount": 750.48,
    "status": "processing",
    "createdAt": "2026-09-11T14:50:48.647Z"
  },
  {
    "id": "ord_0021",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_1136",
        "name": "Product Gamma 13",
        "quantity": 1,
        "unitPrice": 10.29,
        "totalPrice": 10.29
      }
    ],
    "totalAmount": 10.29,
    "status": "processing",
    "createdAt": "2026-09-09T10:50:27.256Z"
  },
  {
    "id": "ord_0131",
    "customer": {
      "id": "cust_006",
      "name": "Karen Martinez",
      "email": "karen.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_006"
    },
    "items": [
      {
        "id": "item_4062",
        "name": "Product Gamma 26",
        "quantity": 1,
        "unitPrice": 460.2,
        "totalPrice": 460.2
      },
      {
        "id": "item_2510",
        "name": "Product Alpha 72",
        "quantity": 1,
        "unitPrice": 365.53,
        "totalPrice": 365.53
      }
    ],
    "totalAmount": 825.73,
    "status": "completed",
    "createdAt": "2026-09-05T07:14:53.491Z"
  },
  {
    "id": "ord_0067",
    "customer": {
      "id": "cust_003",
      "name": "Robert Martinez",
      "email": "robert.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_003"
    },
    "items": [
      {
        "id": "item_7972",
        "name": "Product Delta 91",
        "quantity": 1,
        "unitPrice": 199.35,
        "totalPrice": 199.35
      },
      {
        "id": "item_3790",
        "name": "Product Delta 87",
        "quantity": 3,
        "unitPrice": 344.81,
        "totalPrice": 1034.43
      },
      {
        "id": "item_1157",
        "name": "Product Alpha 37",
        "quantity": 2,
        "unitPrice": 284.98,
        "totalPrice": 569.96
      }
    ],
    "totalAmount": 1803.74,
    "status": "pending",
    "createdAt": "2026-09-03T19:52:26.417Z"
  },
  {
    "id": "ord_0080",
    "customer": {
      "id": "cust_027",
      "name": "Patricia Brown",
      "email": "patricia.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_027"
    },
    "items": [
      {
        "id": "item_4554",
        "name": "Product Beta 12",
        "quantity": 1,
        "unitPrice": 169.96,
        "totalPrice": 169.96
      }
    ],
    "totalAmount": 169.96,
    "status": "completed",
    "createdAt": "2026-09-02T05:36:58.204Z"
  },
  {
    "id": "ord_0101",
    "customer": {
      "id": "cust_013",
      "name": "Joseph Davis",
      "email": "joseph.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_013"
    },
    "items": [
      {
        "id": "item_5394",
        "name": "Product Alpha 2",
        "quantity": 2,
        "unitPrice": 435.7,
        "totalPrice": 871.4
      },
      {
        "id": "item_5574",
        "name": "Product Sigma 32",
        "quantity": 2,
        "unitPrice": 481.91,
        "totalPrice": 963.82
      },
      {
        "id": "item_2732",
        "name": "Product Beta 37",
        "quantity": 3,
        "unitPrice": 452.72,
        "totalPrice": 1358.16
      },
      {
        "id": "item_8246",
        "name": "Product Alpha 97",
        "quantity": 2,
        "unitPrice": 79.1,
        "totalPrice": 158.2
      }
    ],
    "totalAmount": 3351.58,
    "status": "processing",
    "createdAt": "2026-08-27T10:36:40.011Z"
  },
  {
    "id": "ord_0134",
    "customer": {
      "id": "cust_030",
      "name": "Robert Davis",
      "email": "robert.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_030"
    },
    "items": [
      {
        "id": "item_9824",
        "name": "Product Alpha 22",
        "quantity": 1,
        "unitPrice": 458.06,
        "totalPrice": 458.06
      },
      {
        "id": "item_5648",
        "name": "Product Alpha 74",
        "quantity": 3,
        "unitPrice": 303.42,
        "totalPrice": 910.26
      },
      {
        "id": "item_6977",
        "name": "Product Alpha 36",
        "quantity": 3,
        "unitPrice": 272.5,
        "totalPrice": 817.5
      }
    ],
    "totalAmount": 2185.82,
    "status": "failed",
    "createdAt": "2026-08-25T09:01:43.697Z"
  },
  {
    "id": "ord_0056",
    "customer": {
      "id": "cust_011",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_011"
    },
    "items": [
      {
        "id": "item_3686",
        "name": "Product Beta 3",
        "quantity": 2,
        "unitPrice": 334.27,
        "totalPrice": 668.54
      },
      {
        "id": "item_5803",
        "name": "Product Alpha 70",
        "quantity": 1,
        "unitPrice": 248.36,
        "totalPrice": 248.36
      },
      {
        "id": "item_5800",
        "name": "Product Beta 15",
        "quantity": 2,
        "unitPrice": 101.15,
        "totalPrice": 202.3
      }
    ],
    "totalAmount": 1119.2,
    "status": "processing",
    "createdAt": "2026-08-24T23:11:14.868Z"
  },
  {
    "id": "ord_0147",
    "customer": {
      "id": "cust_046",
      "name": "Jennifer Jones",
      "email": "jennifer.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_046"
    },
    "items": [
      {
        "id": "item_8833",
        "name": "Product Beta 28",
        "quantity": 3,
        "unitPrice": 66.02,
        "totalPrice": 198.06
      }
    ],
    "totalAmount": 198.06,
    "status": "completed",
    "createdAt": "2026-08-22T22:33:21.537Z"
  },
  {
    "id": "ord_0035",
    "customer": {
      "id": "cust_018",
      "name": "Charles Williams",
      "email": "charles.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_018"
    },
    "items": [
      {
        "id": "item_9641",
        "name": "Product Alpha 55",
        "quantity": 2,
        "unitPrice": 235.33,
        "totalPrice": 470.66
      }
    ],
    "totalAmount": 470.66,
    "status": "failed",
    "createdAt": "2026-08-21T04:56:11.259Z"
  },
  {
    "id": "ord_0110",
    "customer": {
      "id": "cust_049",
      "name": "Karen Johnson",
      "email": "karen.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_049"
    },
    "items": [
      {
        "id": "item_7597",
        "name": "Product Delta 10",
        "quantity": 2,
        "unitPrice": 26.96,
        "totalPrice": 53.92
      }
    ],
    "totalAmount": 53.92,
    "status": "completed",
    "createdAt": "2026-08-15T03:41:32.179Z"
  },
  {
    "id": "ord_0083",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_4499",
        "name": "Product Alpha 41",
        "quantity": 2,
        "unitPrice": 479.15,
        "totalPrice": 958.3
      },
      {
        "id": "item_1574",
        "name": "Product Sigma 60",
        "quantity": 2,
        "unitPrice": 155.9,
        "totalPrice": 311.8
      }
    ],
    "totalAmount": 1270.1,
    "status": "pending",
    "createdAt": "2026-08-14T08:20:49.426Z"
  },
  {
    "id": "ord_0085",
    "customer": {
      "id": "cust_011",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_011"
    },
    "items": [
      {
        "id": "item_5454",
        "name": "Product Sigma 89",
        "quantity": 3,
        "unitPrice": 123.88,
        "totalPrice": 371.64
      },
      {
        "id": "item_4456",
        "name": "Product Beta 60",
        "quantity": 3,
        "unitPrice": 90.12,
        "totalPrice": 270.36
      },
      {
        "id": "item_2505",
        "name": "Product Gamma 99",
        "quantity": 3,
        "unitPrice": 231.2,
        "totalPrice": 693.6
      }
    ],
    "totalAmount": 1335.6,
    "status": "completed",
    "createdAt": "2026-08-12T17:18:28.380Z"
  },
  {
    "id": "ord_0027",
    "customer": {
      "id": "cust_003",
      "name": "Robert Martinez",
      "email": "robert.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_003"
    },
    "items": [
      {
        "id": "item_2140",
        "name": "Product Delta 20",
        "quantity": 1,
        "unitPrice": 113.2,
        "totalPrice": 113.2
      },
      {
        "id": "item_1849",
        "name": "Product Beta 49",
        "quantity": 3,
        "unitPrice": 498,
        "totalPrice": 1494
      }
    ],
    "totalAmount": 1607.2,
    "status": "processing",
    "createdAt": "2026-08-12T10:44:21.515Z"
  },
  {
    "id": "ord_0061",
    "customer": {
      "id": "cust_023",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_023"
    },
    "items": [
      {
        "id": "item_1016",
        "name": "Product Gamma 37",
        "quantity": 1,
        "unitPrice": 324.13,
        "totalPrice": 324.13
      },
      {
        "id": "item_3881",
        "name": "Product Gamma 31",
        "quantity": 1,
        "unitPrice": 335.57,
        "totalPrice": 335.57
      },
      {
        "id": "item_3455",
        "name": "Product Beta 56",
        "quantity": 2,
        "unitPrice": 176.48,
        "totalPrice": 352.96
      },
      {
        "id": "item_6389",
        "name": "Product Beta 91",
        "quantity": 1,
        "unitPrice": 32.58,
        "totalPrice": 32.58
      }
    ],
    "totalAmount": 1045.24,
    "status": "completed",
    "createdAt": "2026-08-11T17:38:29.298Z"
  },
  {
    "id": "ord_0087",
    "customer": {
      "id": "cust_001",
      "name": "Jessica Johnson",
      "email": "jessica.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_001"
    },
    "items": [
      {
        "id": "item_1165",
        "name": "Product Sigma 100",
        "quantity": 3,
        "unitPrice": 276.03,
        "totalPrice": 828.09
      },
      {
        "id": "item_9841",
        "name": "Product Alpha 24",
        "quantity": 3,
        "unitPrice": 290.39,
        "totalPrice": 871.17
      },
      {
        "id": "item_9684",
        "name": "Product Sigma 92",
        "quantity": 3,
        "unitPrice": 210.61,
        "totalPrice": 631.83
      },
      {
        "id": "item_6271",
        "name": "Product Alpha 74",
        "quantity": 3,
        "unitPrice": 135.15,
        "totalPrice": 405.45
      }
    ],
    "totalAmount": 2736.54,
    "status": "completed",
    "createdAt": "2026-08-11T01:10:56.431Z"
  },
  {
    "id": "ord_0112",
    "customer": {
      "id": "cust_036",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_036"
    },
    "items": [
      {
        "id": "item_2154",
        "name": "Product Sigma 64",
        "quantity": 2,
        "unitPrice": 64.23,
        "totalPrice": 128.46
      },
      {
        "id": "item_5287",
        "name": "Product Gamma 57",
        "quantity": 1,
        "unitPrice": 376.77,
        "totalPrice": 376.77
      }
    ],
    "totalAmount": 505.23,
    "status": "completed",
    "createdAt": "2026-08-09T22:40:02.141Z"
  },
  {
    "id": "ord_0107",
    "customer": {
      "id": "cust_026",
      "name": "Michael Martinez",
      "email": "michael.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_026"
    },
    "items": [
      {
        "id": "item_3825",
        "name": "Product Alpha 26",
        "quantity": 1,
        "unitPrice": 160.07,
        "totalPrice": 160.07
      },
      {
        "id": "item_4990",
        "name": "Product Alpha 32",
        "quantity": 1,
        "unitPrice": 46.4,
        "totalPrice": 46.4
      }
    ],
    "totalAmount": 206.47,
    "status": "completed",
    "createdAt": "2026-08-07T04:19:42.569Z"
  },
  {
    "id": "ord_0121",
    "customer": {
      "id": "cust_028",
      "name": "Patricia Brown",
      "email": "patricia.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_028"
    },
    "items": [
      {
        "id": "item_3922",
        "name": "Product Alpha 74",
        "quantity": 1,
        "unitPrice": 365.25,
        "totalPrice": 365.25
      },
      {
        "id": "item_2999",
        "name": "Product Delta 76",
        "quantity": 1,
        "unitPrice": 388.94,
        "totalPrice": 388.94
      }
    ],
    "totalAmount": 754.19,
    "status": "processing",
    "createdAt": "2026-08-03T03:57:12.557Z"
  },
  {
    "id": "ord_0034",
    "customer": {
      "id": "cust_001",
      "name": "Jessica Johnson",
      "email": "jessica.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_001"
    },
    "items": [
      {
        "id": "item_5578",
        "name": "Product Beta 78",
        "quantity": 2,
        "unitPrice": 280.84,
        "totalPrice": 561.68
      },
      {
        "id": "item_3224",
        "name": "Product Alpha 9",
        "quantity": 3,
        "unitPrice": 429.73,
        "totalPrice": 1289.19
      },
      {
        "id": "item_4083",
        "name": "Product Gamma 78",
        "quantity": 2,
        "unitPrice": 478.73,
        "totalPrice": 957.46
      }
    ],
    "totalAmount": 2808.33,
    "status": "completed",
    "createdAt": "2026-08-01T23:38:55.915Z"
  },
  {
    "id": "ord_0030",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_7350",
        "name": "Product Alpha 72",
        "quantity": 2,
        "unitPrice": 225.92,
        "totalPrice": 451.84
      }
    ],
    "totalAmount": 451.84,
    "status": "completed",
    "createdAt": "2026-07-29T16:59:56.533Z"
  },
  {
    "id": "ord_0086",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_4758",
        "name": "Product Beta 71",
        "quantity": 3,
        "unitPrice": 398.75,
        "totalPrice": 1196.25
      }
    ],
    "totalAmount": 1196.25,
    "status": "processing",
    "createdAt": "2026-07-29T06:46:28.658Z"
  },
  {
    "id": "ord_0005",
    "customer": {
      "id": "cust_005",
      "name": "Jennifer Miller",
      "email": "jennifer.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_005"
    },
    "items": [
      {
        "id": "item_4104",
        "name": "Product Sigma 35",
        "quantity": 1,
        "unitPrice": 270.35,
        "totalPrice": 270.35
      }
    ],
    "totalAmount": 270.35,
    "status": "completed",
    "createdAt": "2026-07-28T13:22:22.561Z"
  },
  {
    "id": "ord_0120",
    "customer": {
      "id": "cust_017",
      "name": "Robert Brown",
      "email": "robert.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_017"
    },
    "items": [
      {
        "id": "item_5825",
        "name": "Product Delta 82",
        "quantity": 3,
        "unitPrice": 43.85,
        "totalPrice": 131.55
      },
      {
        "id": "item_3238",
        "name": "Product Sigma 54",
        "quantity": 3,
        "unitPrice": 448.95,
        "totalPrice": 1346.85
      },
      {
        "id": "item_4457",
        "name": "Product Beta 38",
        "quantity": 3,
        "unitPrice": 339.93,
        "totalPrice": 1019.79
      },
      {
        "id": "item_5908",
        "name": "Product Beta 15",
        "quantity": 2,
        "unitPrice": 295.68,
        "totalPrice": 591.36
      }
    ],
    "totalAmount": 3089.55,
    "status": "completed",
    "createdAt": "2026-07-27T08:25:09.362Z"
  },
  {
    "id": "ord_0098",
    "customer": {
      "id": "cust_044",
      "name": "John Garcia",
      "email": "john.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_044"
    },
    "items": [
      {
        "id": "item_6453",
        "name": "Product Delta 69",
        "quantity": 2,
        "unitPrice": 351.3,
        "totalPrice": 702.6
      },
      {
        "id": "item_4838",
        "name": "Product Alpha 61",
        "quantity": 3,
        "unitPrice": 97.43,
        "totalPrice": 292.29
      }
    ],
    "totalAmount": 994.89,
    "status": "completed",
    "createdAt": "2026-07-27T03:51:24.764Z"
  },
  {
    "id": "ord_0028",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_1080",
        "name": "Product Beta 23",
        "quantity": 3,
        "unitPrice": 47.28,
        "totalPrice": 141.84
      },
      {
        "id": "item_1386",
        "name": "Product Delta 15",
        "quantity": 1,
        "unitPrice": 40.94,
        "totalPrice": 40.94
      },
      {
        "id": "item_4435",
        "name": "Product Sigma 81",
        "quantity": 3,
        "unitPrice": 98.16,
        "totalPrice": 294.48
      },
      {
        "id": "item_9647",
        "name": "Product Alpha 98",
        "quantity": 1,
        "unitPrice": 113.01,
        "totalPrice": 113.01
      }
    ],
    "totalAmount": 590.27,
    "status": "pending",
    "createdAt": "2026-07-25T23:18:31.645Z"
  },
  {
    "id": "ord_0104",
    "customer": {
      "id": "cust_013",
      "name": "Joseph Davis",
      "email": "joseph.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_013"
    },
    "items": [
      {
        "id": "item_9203",
        "name": "Product Gamma 54",
        "quantity": 1,
        "unitPrice": 219.19,
        "totalPrice": 219.19
      },
      {
        "id": "item_7337",
        "name": "Product Gamma 93",
        "quantity": 2,
        "unitPrice": 308.24,
        "totalPrice": 616.48
      },
      {
        "id": "item_7483",
        "name": "Product Alpha 87",
        "quantity": 1,
        "unitPrice": 108.72,
        "totalPrice": 108.72
      }
    ],
    "totalAmount": 944.39,
    "status": "completed",
    "createdAt": "2026-07-21T04:03:26.781Z"
  },
  {
    "id": "ord_0063",
    "customer": {
      "id": "cust_024",
      "name": "Thomas Garcia",
      "email": "thomas.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_024"
    },
    "items": [
      {
        "id": "item_3398",
        "name": "Product Delta 72",
        "quantity": 2,
        "unitPrice": 432.88,
        "totalPrice": 865.76
      }
    ],
    "totalAmount": 865.76,
    "status": "failed",
    "createdAt": "2026-07-12T14:37:28.121Z"
  },
  {
    "id": "ord_0125",
    "customer": {
      "id": "cust_001",
      "name": "Jessica Johnson",
      "email": "jessica.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_001"
    },
    "items": [
      {
        "id": "item_8486",
        "name": "Product Delta 43",
        "quantity": 2,
        "unitPrice": 182.67,
        "totalPrice": 365.34
      },
      {
        "id": "item_7520",
        "name": "Product Delta 19",
        "quantity": 2,
        "unitPrice": 475.56,
        "totalPrice": 951.12
      },
      {
        "id": "item_8396",
        "name": "Product Beta 22",
        "quantity": 1,
        "unitPrice": 204,
        "totalPrice": 204
      }
    ],
    "totalAmount": 1520.46,
    "status": "completed",
    "createdAt": "2026-07-11T20:08:17.415Z"
  },
  {
    "id": "ord_0133",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_6290",
        "name": "Product Gamma 96",
        "quantity": 1,
        "unitPrice": 56.95,
        "totalPrice": 56.95
      },
      {
        "id": "item_4681",
        "name": "Product Delta 90",
        "quantity": 3,
        "unitPrice": 340.07,
        "totalPrice": 1020.21
      },
      {
        "id": "item_2942",
        "name": "Product Sigma 53",
        "quantity": 3,
        "unitPrice": 231.86,
        "totalPrice": 695.58
      }
    ],
    "totalAmount": 1772.74,
    "status": "pending",
    "createdAt": "2026-07-11T00:27:43.294Z"
  },
  {
    "id": "ord_0011",
    "customer": {
      "id": "cust_012",
      "name": "Sarah Brown",
      "email": "sarah.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_012"
    },
    "items": [
      {
        "id": "item_8747",
        "name": "Product Delta 98",
        "quantity": 2,
        "unitPrice": 15.32,
        "totalPrice": 30.64
      },
      {
        "id": "item_1997",
        "name": "Product Sigma 89",
        "quantity": 3,
        "unitPrice": 473.42,
        "totalPrice": 1420.26
      }
    ],
    "totalAmount": 1450.9,
    "status": "completed",
    "createdAt": "2026-07-07T17:13:58.567Z"
  },
  {
    "id": "ord_0055",
    "customer": {
      "id": "cust_029",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_029"
    },
    "items": [
      {
        "id": "item_4147",
        "name": "Product Delta 63",
        "quantity": 3,
        "unitPrice": 353.67,
        "totalPrice": 1061.01
      },
      {
        "id": "item_2455",
        "name": "Product Sigma 51",
        "quantity": 1,
        "unitPrice": 53.49,
        "totalPrice": 53.49
      },
      {
        "id": "item_8393",
        "name": "Product Gamma 76",
        "quantity": 2,
        "unitPrice": 390.31,
        "totalPrice": 780.62
      },
      {
        "id": "item_7780",
        "name": "Product Beta 64",
        "quantity": 1,
        "unitPrice": 313.11,
        "totalPrice": 313.11
      }
    ],
    "totalAmount": 2208.23,
    "status": "completed",
    "createdAt": "2026-06-30T13:58:16.221Z"
  },
  {
    "id": "ord_0040",
    "customer": {
      "id": "cust_003",
      "name": "Robert Martinez",
      "email": "robert.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_003"
    },
    "items": [
      {
        "id": "item_3287",
        "name": "Product Sigma 44",
        "quantity": 2,
        "unitPrice": 288.32,
        "totalPrice": 576.64
      },
      {
        "id": "item_6954",
        "name": "Product Sigma 21",
        "quantity": 2,
        "unitPrice": 172.56,
        "totalPrice": 345.12
      },
      {
        "id": "item_2554",
        "name": "Product Beta 71",
        "quantity": 2,
        "unitPrice": 480.44,
        "totalPrice": 960.88
      },
      {
        "id": "item_6482",
        "name": "Product Alpha 97",
        "quantity": 1,
        "unitPrice": 41.53,
        "totalPrice": 41.53
      }
    ],
    "totalAmount": 1924.17,
    "status": "completed",
    "createdAt": "2026-06-29T23:35:23.067Z"
  },
  {
    "id": "ord_0044",
    "customer": {
      "id": "cust_013",
      "name": "Joseph Davis",
      "email": "joseph.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_013"
    },
    "items": [
      {
        "id": "item_6501",
        "name": "Product Beta 75",
        "quantity": 3,
        "unitPrice": 66.49,
        "totalPrice": 199.47
      },
      {
        "id": "item_4768",
        "name": "Product Delta 82",
        "quantity": 1,
        "unitPrice": 282.6,
        "totalPrice": 282.6
      },
      {
        "id": "item_6576",
        "name": "Product Beta 87",
        "quantity": 3,
        "unitPrice": 334.03,
        "totalPrice": 1002.09
      },
      {
        "id": "item_2020",
        "name": "Product Alpha 75",
        "quantity": 1,
        "unitPrice": 106.48,
        "totalPrice": 106.48
      }
    ],
    "totalAmount": 1590.64,
    "status": "processing",
    "createdAt": "2026-06-29T10:11:34.084Z"
  },
  {
    "id": "ord_0036",
    "customer": {
      "id": "cust_008",
      "name": "Mary Davis",
      "email": "mary.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_008"
    },
    "items": [
      {
        "id": "item_8645",
        "name": "Product Beta 95",
        "quantity": 2,
        "unitPrice": 402.46,
        "totalPrice": 804.92
      },
      {
        "id": "item_1565",
        "name": "Product Gamma 75",
        "quantity": 2,
        "unitPrice": 258.38,
        "totalPrice": 516.76
      },
      {
        "id": "item_8514",
        "name": "Product Beta 89",
        "quantity": 2,
        "unitPrice": 67,
        "totalPrice": 134
      }
    ],
    "totalAmount": 1455.68,
    "status": "failed",
    "createdAt": "2026-06-27T13:20:34.272Z"
  },
  {
    "id": "ord_0057",
    "customer": {
      "id": "cust_016",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_016"
    },
    "items": [
      {
        "id": "item_2551",
        "name": "Product Delta 19",
        "quantity": 2,
        "unitPrice": 192.86,
        "totalPrice": 385.72
      }
    ],
    "totalAmount": 385.72,
    "status": "completed",
    "createdAt": "2026-06-25T21:06:35.505Z"
  },
  {
    "id": "ord_0074",
    "customer": {
      "id": "cust_039",
      "name": "Michael Jones",
      "email": "michael.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_039"
    },
    "items": [
      {
        "id": "item_4928",
        "name": "Product Beta 2",
        "quantity": 1,
        "unitPrice": 133.98,
        "totalPrice": 133.98
      },
      {
        "id": "item_8337",
        "name": "Product Delta 19",
        "quantity": 1,
        "unitPrice": 193.97,
        "totalPrice": 193.97
      },
      {
        "id": "item_8684",
        "name": "Product Delta 29",
        "quantity": 3,
        "unitPrice": 59.51,
        "totalPrice": 178.53
      }
    ],
    "totalAmount": 506.48,
    "status": "completed",
    "createdAt": "2026-06-24T22:39:36.642Z"
  },
  {
    "id": "ord_0100",
    "customer": {
      "id": "cust_008",
      "name": "Mary Davis",
      "email": "mary.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_008"
    },
    "items": [
      {
        "id": "item_2215",
        "name": "Product Gamma 65",
        "quantity": 1,
        "unitPrice": 436.24,
        "totalPrice": 436.24
      },
      {
        "id": "item_1241",
        "name": "Product Alpha 91",
        "quantity": 2,
        "unitPrice": 337.75,
        "totalPrice": 675.5
      }
    ],
    "totalAmount": 1111.74,
    "status": "processing",
    "createdAt": "2026-06-24T21:16:58.370Z"
  },
  {
    "id": "ord_0013",
    "customer": {
      "id": "cust_020",
      "name": "David Jones",
      "email": "david.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_020"
    },
    "items": [
      {
        "id": "item_6623",
        "name": "Product Delta 47",
        "quantity": 1,
        "unitPrice": 403.37,
        "totalPrice": 403.37
      },
      {
        "id": "item_9831",
        "name": "Product Alpha 76",
        "quantity": 2,
        "unitPrice": 171.49,
        "totalPrice": 342.98
      },
      {
        "id": "item_6941",
        "name": "Product Alpha 37",
        "quantity": 3,
        "unitPrice": 123.02,
        "totalPrice": 369.06
      }
    ],
    "totalAmount": 1115.41,
    "status": "completed",
    "createdAt": "2026-06-20T15:36:02.248Z"
  },
  {
    "id": "ord_0124",
    "customer": {
      "id": "cust_027",
      "name": "Patricia Brown",
      "email": "patricia.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_027"
    },
    "items": [
      {
        "id": "item_1005",
        "name": "Product Gamma 82",
        "quantity": 3,
        "unitPrice": 238.52,
        "totalPrice": 715.56
      },
      {
        "id": "item_7299",
        "name": "Product Sigma 26",
        "quantity": 2,
        "unitPrice": 121.6,
        "totalPrice": 243.2
      },
      {
        "id": "item_8682",
        "name": "Product Gamma 14",
        "quantity": 2,
        "unitPrice": 326.89,
        "totalPrice": 653.78
      }
    ],
    "totalAmount": 1612.54,
    "status": "completed",
    "createdAt": "2026-06-15T19:18:09.775Z"
  },
  {
    "id": "ord_0048",
    "customer": {
      "id": "cust_024",
      "name": "Thomas Garcia",
      "email": "thomas.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_024"
    },
    "items": [
      {
        "id": "item_9688",
        "name": "Product Beta 71",
        "quantity": 2,
        "unitPrice": 143.57,
        "totalPrice": 287.14
      },
      {
        "id": "item_1808",
        "name": "Product Delta 76",
        "quantity": 1,
        "unitPrice": 185.45,
        "totalPrice": 185.45
      },
      {
        "id": "item_3953",
        "name": "Product Gamma 73",
        "quantity": 2,
        "unitPrice": 417.52,
        "totalPrice": 835.04
      },
      {
        "id": "item_5136",
        "name": "Product Sigma 61",
        "quantity": 3,
        "unitPrice": 195.33,
        "totalPrice": 585.99
      }
    ],
    "totalAmount": 1893.62,
    "status": "completed",
    "createdAt": "2026-06-15T04:47:04.600Z"
  },
  {
    "id": "ord_0115",
    "customer": {
      "id": "cust_004",
      "name": "Elizabeth Miller",
      "email": "elizabeth.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_004"
    },
    "items": [
      {
        "id": "item_5108",
        "name": "Product Alpha 73",
        "quantity": 2,
        "unitPrice": 328.94,
        "totalPrice": 657.88
      }
    ],
    "totalAmount": 657.88,
    "status": "completed",
    "createdAt": "2026-06-10T12:16:35.667Z"
  },
  {
    "id": "ord_0077",
    "customer": {
      "id": "cust_038",
      "name": "Barbara Williams",
      "email": "barbara.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_038"
    },
    "items": [
      {
        "id": "item_4616",
        "name": "Product Delta 89",
        "quantity": 3,
        "unitPrice": 17.78,
        "totalPrice": 53.34
      },
      {
        "id": "item_7947",
        "name": "Product Gamma 46",
        "quantity": 2,
        "unitPrice": 244.69,
        "totalPrice": 489.38
      },
      {
        "id": "item_7074",
        "name": "Product Gamma 2",
        "quantity": 1,
        "unitPrice": 199.33,
        "totalPrice": 199.33
      }
    ],
    "totalAmount": 742.05,
    "status": "pending",
    "createdAt": "2026-06-10T02:38:13.693Z"
  },
  {
    "id": "ord_0017",
    "customer": {
      "id": "cust_009",
      "name": "Elizabeth Johnson",
      "email": "elizabeth.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_009"
    },
    "items": [
      {
        "id": "item_9923",
        "name": "Product Delta 31",
        "quantity": 2,
        "unitPrice": 46.6,
        "totalPrice": 93.2
      },
      {
        "id": "item_6796",
        "name": "Product Gamma 74",
        "quantity": 1,
        "unitPrice": 366.7,
        "totalPrice": 366.7
      },
      {
        "id": "item_6650",
        "name": "Product Alpha 94",
        "quantity": 2,
        "unitPrice": 15.76,
        "totalPrice": 31.52
      },
      {
        "id": "item_7858",
        "name": "Product Gamma 87",
        "quantity": 3,
        "unitPrice": 357.4,
        "totalPrice": 1072.2
      }
    ],
    "totalAmount": 1563.62,
    "status": "failed",
    "createdAt": "2026-06-02T07:06:18.102Z"
  },
  {
    "id": "ord_0148",
    "customer": {
      "id": "cust_007",
      "name": "Susan Johnson",
      "email": "susan.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_007"
    },
    "items": [
      {
        "id": "item_1274",
        "name": "Product Beta 71",
        "quantity": 2,
        "unitPrice": 312.1,
        "totalPrice": 624.2
      }
    ],
    "totalAmount": 624.2,
    "status": "completed",
    "createdAt": "2026-05-28T00:04:27.369Z"
  },
  {
    "id": "ord_0079",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_2726",
        "name": "Product Delta 90",
        "quantity": 3,
        "unitPrice": 71.63,
        "totalPrice": 214.89
      }
    ],
    "totalAmount": 214.89,
    "status": "completed",
    "createdAt": "2026-05-26T07:20:37.882Z"
  },
  {
    "id": "ord_0123",
    "customer": {
      "id": "cust_032",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_032"
    },
    "items": [
      {
        "id": "item_9450",
        "name": "Product Gamma 8",
        "quantity": 2,
        "unitPrice": 202.42,
        "totalPrice": 404.84
      },
      {
        "id": "item_5007",
        "name": "Product Delta 87",
        "quantity": 1,
        "unitPrice": 192.45,
        "totalPrice": 192.45
      },
      {
        "id": "item_7361",
        "name": "Product Beta 56",
        "quantity": 1,
        "unitPrice": 373.42,
        "totalPrice": 373.42
      }
    ],
    "totalAmount": 970.71,
    "status": "completed",
    "createdAt": "2026-05-26T04:28:13.494Z"
  },
  {
    "id": "ord_0071",
    "customer": {
      "id": "cust_011",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_011"
    },
    "items": [
      {
        "id": "item_4674",
        "name": "Product Gamma 98",
        "quantity": 1,
        "unitPrice": 58.86,
        "totalPrice": 58.86
      }
    ],
    "totalAmount": 58.86,
    "status": "completed",
    "createdAt": "2026-05-25T03:15:23.926Z"
  },
  {
    "id": "ord_0037",
    "customer": {
      "id": "cust_001",
      "name": "Jessica Johnson",
      "email": "jessica.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_001"
    },
    "items": [
      {
        "id": "item_5908",
        "name": "Product Beta 81",
        "quantity": 2,
        "unitPrice": 269.39,
        "totalPrice": 538.78
      },
      {
        "id": "item_7261",
        "name": "Product Alpha 73",
        "quantity": 2,
        "unitPrice": 184.79,
        "totalPrice": 369.58
      },
      {
        "id": "item_3453",
        "name": "Product Beta 20",
        "quantity": 2,
        "unitPrice": 251.77,
        "totalPrice": 503.54
      },
      {
        "id": "item_3585",
        "name": "Product Delta 88",
        "quantity": 3,
        "unitPrice": 346.67,
        "totalPrice": 1040.01
      }
    ],
    "totalAmount": 2451.91,
    "status": "completed",
    "createdAt": "2026-05-20T22:38:23.074Z"
  },
  {
    "id": "ord_0025",
    "customer": {
      "id": "cust_011",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_011"
    },
    "items": [
      {
        "id": "item_1028",
        "name": "Product Alpha 85",
        "quantity": 3,
        "unitPrice": 252.52,
        "totalPrice": 757.56
      },
      {
        "id": "item_4584",
        "name": "Product Alpha 10",
        "quantity": 3,
        "unitPrice": 182.57,
        "totalPrice": 547.71
      }
    ],
    "totalAmount": 1305.27,
    "status": "completed",
    "createdAt": "2026-05-14T16:01:53.703Z"
  },
  {
    "id": "ord_0051",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_1416",
        "name": "Product Beta 88",
        "quantity": 3,
        "unitPrice": 273.11,
        "totalPrice": 819.33
      }
    ],
    "totalAmount": 819.33,
    "status": "completed",
    "createdAt": "2026-05-13T20:54:23.899Z"
  },
  {
    "id": "ord_0093",
    "customer": {
      "id": "cust_037",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_037"
    },
    "items": [
      {
        "id": "item_7321",
        "name": "Product Sigma 66",
        "quantity": 3,
        "unitPrice": 348.25,
        "totalPrice": 1044.75
      },
      {
        "id": "item_3098",
        "name": "Product Delta 82",
        "quantity": 1,
        "unitPrice": 29.95,
        "totalPrice": 29.95
      },
      {
        "id": "item_7449",
        "name": "Product Sigma 44",
        "quantity": 1,
        "unitPrice": 490.64,
        "totalPrice": 490.64
      },
      {
        "id": "item_3158",
        "name": "Product Beta 44",
        "quantity": 1,
        "unitPrice": 182.37,
        "totalPrice": 182.37
      }
    ],
    "totalAmount": 1747.71,
    "status": "processing",
    "createdAt": "2026-05-09T15:52:19.113Z"
  },
  {
    "id": "ord_0014",
    "customer": {
      "id": "cust_004",
      "name": "Elizabeth Miller",
      "email": "elizabeth.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_004"
    },
    "items": [
      {
        "id": "item_3642",
        "name": "Product Alpha 9",
        "quantity": 3,
        "unitPrice": 341.21,
        "totalPrice": 1023.63
      },
      {
        "id": "item_4964",
        "name": "Product Delta 15",
        "quantity": 2,
        "unitPrice": 213.03,
        "totalPrice": 426.06
      },
      {
        "id": "item_1429",
        "name": "Product Gamma 12",
        "quantity": 1,
        "unitPrice": 349.72,
        "totalPrice": 349.72
      }
    ],
    "totalAmount": 1799.41,
    "status": "failed",
    "createdAt": "2026-05-08T06:59:51.397Z"
  },
  {
    "id": "ord_0059",
    "customer": {
      "id": "cust_002",
      "name": "Richard Davis",
      "email": "richard.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_002"
    },
    "items": [
      {
        "id": "item_6650",
        "name": "Product Delta 64",
        "quantity": 2,
        "unitPrice": 43.26,
        "totalPrice": 86.52
      }
    ],
    "totalAmount": 86.52,
    "status": "completed",
    "createdAt": "2026-05-07T17:04:29.495Z"
  },
  {
    "id": "ord_0049",
    "customer": {
      "id": "cust_042",
      "name": "David Garcia",
      "email": "david.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_042"
    },
    "items": [
      {
        "id": "item_6400",
        "name": "Product Sigma 95",
        "quantity": 2,
        "unitPrice": 142.51,
        "totalPrice": 285.02
      }
    ],
    "totalAmount": 285.02,
    "status": "processing",
    "createdAt": "2026-04-29T02:21:05.030Z"
  },
  {
    "id": "ord_0045",
    "customer": {
      "id": "cust_024",
      "name": "Thomas Garcia",
      "email": "thomas.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_024"
    },
    "items": [
      {
        "id": "item_8059",
        "name": "Product Alpha 43",
        "quantity": 2,
        "unitPrice": 363.38,
        "totalPrice": 726.76
      },
      {
        "id": "item_4721",
        "name": "Product Delta 86",
        "quantity": 2,
        "unitPrice": 41.86,
        "totalPrice": 83.72
      }
    ],
    "totalAmount": 810.48,
    "status": "completed",
    "createdAt": "2026-04-27T22:37:55.329Z"
  },
  {
    "id": "ord_0142",
    "customer": {
      "id": "cust_009",
      "name": "Elizabeth Johnson",
      "email": "elizabeth.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_009"
    },
    "items": [
      {
        "id": "item_9407",
        "name": "Product Gamma 23",
        "quantity": 1,
        "unitPrice": 499.2,
        "totalPrice": 499.2
      },
      {
        "id": "item_4409",
        "name": "Product Alpha 36",
        "quantity": 3,
        "unitPrice": 350.78,
        "totalPrice": 1052.34
      },
      {
        "id": "item_5388",
        "name": "Product Gamma 4",
        "quantity": 1,
        "unitPrice": 325.73,
        "totalPrice": 325.73
      }
    ],
    "totalAmount": 1877.27,
    "status": "pending",
    "createdAt": "2026-04-22T13:55:10.432Z"
  },
  {
    "id": "ord_0084",
    "customer": {
      "id": "cust_039",
      "name": "Michael Jones",
      "email": "michael.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_039"
    },
    "items": [
      {
        "id": "item_4594",
        "name": "Product Gamma 74",
        "quantity": 3,
        "unitPrice": 367,
        "totalPrice": 1101
      },
      {
        "id": "item_4339",
        "name": "Product Beta 40",
        "quantity": 2,
        "unitPrice": 91.49,
        "totalPrice": 182.98
      }
    ],
    "totalAmount": 1283.98,
    "status": "completed",
    "createdAt": "2026-04-22T13:02:13.854Z"
  },
  {
    "id": "ord_0141",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_9683",
        "name": "Product Beta 71",
        "quantity": 1,
        "unitPrice": 360.14,
        "totalPrice": 360.14
      },
      {
        "id": "item_4616",
        "name": "Product Delta 29",
        "quantity": 3,
        "unitPrice": 165.25,
        "totalPrice": 495.75
      },
      {
        "id": "item_7267",
        "name": "Product Beta 47",
        "quantity": 1,
        "unitPrice": 414.03,
        "totalPrice": 414.03
      }
    ],
    "totalAmount": 1269.92,
    "status": "completed",
    "createdAt": "2026-04-21T21:14:12.801Z"
  },
  {
    "id": "ord_0097",
    "customer": {
      "id": "cust_040",
      "name": "Thomas Rodriguez",
      "email": "thomas.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_040"
    },
    "items": [
      {
        "id": "item_3200",
        "name": "Product Delta 84",
        "quantity": 2,
        "unitPrice": 33.51,
        "totalPrice": 67.02
      },
      {
        "id": "item_9321",
        "name": "Product Delta 72",
        "quantity": 2,
        "unitPrice": 357.75,
        "totalPrice": 715.5
      }
    ],
    "totalAmount": 782.52,
    "status": "completed",
    "createdAt": "2026-04-21T14:14:27.859Z"
  },
  {
    "id": "ord_0092",
    "customer": {
      "id": "cust_005",
      "name": "Jennifer Miller",
      "email": "jennifer.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_005"
    },
    "items": [
      {
        "id": "item_6630",
        "name": "Product Sigma 27",
        "quantity": 2,
        "unitPrice": 147.83,
        "totalPrice": 295.66
      },
      {
        "id": "item_9919",
        "name": "Product Alpha 58",
        "quantity": 3,
        "unitPrice": 138.08,
        "totalPrice": 414.24
      }
    ],
    "totalAmount": 709.9,
    "status": "completed",
    "createdAt": "2026-04-20T21:05:42.849Z"
  },
  {
    "id": "ord_0072",
    "customer": {
      "id": "cust_043",
      "name": "Richard Miller",
      "email": "richard.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_043"
    },
    "items": [
      {
        "id": "item_5534",
        "name": "Product Sigma 95",
        "quantity": 3,
        "unitPrice": 118.67,
        "totalPrice": 356.01
      },
      {
        "id": "item_6824",
        "name": "Product Delta 65",
        "quantity": 1,
        "unitPrice": 300.51,
        "totalPrice": 300.51
      },
      {
        "id": "item_8373",
        "name": "Product Sigma 5",
        "quantity": 3,
        "unitPrice": 13.58,
        "totalPrice": 40.74
      },
      {
        "id": "item_4218",
        "name": "Product Gamma 20",
        "quantity": 1,
        "unitPrice": 298.58,
        "totalPrice": 298.58
      }
    ],
    "totalAmount": 995.84,
    "status": "completed",
    "createdAt": "2026-04-17T17:20:16.205Z"
  },
  {
    "id": "ord_0106",
    "customer": {
      "id": "cust_018",
      "name": "Charles Williams",
      "email": "charles.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_018"
    },
    "items": [
      {
        "id": "item_1126",
        "name": "Product Beta 89",
        "quantity": 1,
        "unitPrice": 463.91,
        "totalPrice": 463.91
      },
      {
        "id": "item_8159",
        "name": "Product Delta 61",
        "quantity": 3,
        "unitPrice": 107.52,
        "totalPrice": 322.56
      }
    ],
    "totalAmount": 786.47,
    "status": "processing",
    "createdAt": "2026-04-12T12:13:31.686Z"
  },
  {
    "id": "ord_0113",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_5067",
        "name": "Product Gamma 92",
        "quantity": 3,
        "unitPrice": 319.08,
        "totalPrice": 957.24
      },
      {
        "id": "item_6558",
        "name": "Product Alpha 27",
        "quantity": 3,
        "unitPrice": 318.2,
        "totalPrice": 954.6
      },
      {
        "id": "item_4635",
        "name": "Product Alpha 59",
        "quantity": 1,
        "unitPrice": 122.97,
        "totalPrice": 122.97
      }
    ],
    "totalAmount": 2034.81,
    "status": "completed",
    "createdAt": "2026-04-09T18:42:24.781Z"
  },
  {
    "id": "ord_0096",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_2189",
        "name": "Product Beta 22",
        "quantity": 2,
        "unitPrice": 400.72,
        "totalPrice": 801.44
      },
      {
        "id": "item_1217",
        "name": "Product Delta 86",
        "quantity": 2,
        "unitPrice": 394.53,
        "totalPrice": 789.06
      },
      {
        "id": "item_7621",
        "name": "Product Alpha 54",
        "quantity": 3,
        "unitPrice": 473.34,
        "totalPrice": 1420.02
      },
      {
        "id": "item_2629",
        "name": "Product Beta 68",
        "quantity": 2,
        "unitPrice": 491.14,
        "totalPrice": 982.28
      }
    ],
    "totalAmount": 3992.8,
    "status": "completed",
    "createdAt": "2026-04-06T23:42:18.641Z"
  },
  {
    "id": "ord_0138",
    "customer": {
      "id": "cust_047",
      "name": "Susan Miller",
      "email": "susan.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_047"
    },
    "items": [
      {
        "id": "item_6612",
        "name": "Product Gamma 76",
        "quantity": 3,
        "unitPrice": 327.92,
        "totalPrice": 983.76
      },
      {
        "id": "item_4810",
        "name": "Product Beta 100",
        "quantity": 2,
        "unitPrice": 470.92,
        "totalPrice": 941.84
      },
      {
        "id": "item_9067",
        "name": "Product Beta 76",
        "quantity": 2,
        "unitPrice": 392.25,
        "totalPrice": 784.5
      },
      {
        "id": "item_9648",
        "name": "Product Beta 32",
        "quantity": 2,
        "unitPrice": 152.99,
        "totalPrice": 305.98
      }
    ],
    "totalAmount": 3016.08,
    "status": "pending",
    "createdAt": "2026-04-06T14:56:26.345Z"
  },
  {
    "id": "ord_0012",
    "customer": {
      "id": "cust_034",
      "name": "Karen Brown",
      "email": "karen.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_034"
    },
    "items": [
      {
        "id": "item_9820",
        "name": "Product Sigma 27",
        "quantity": 2,
        "unitPrice": 95.02,
        "totalPrice": 190.04
      },
      {
        "id": "item_8913",
        "name": "Product Alpha 90",
        "quantity": 1,
        "unitPrice": 497.73,
        "totalPrice": 497.73
      }
    ],
    "totalAmount": 687.77,
    "status": "completed",
    "createdAt": "2026-04-05T18:35:06.692Z"
  },
  {
    "id": "ord_0118",
    "customer": {
      "id": "cust_037",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_037"
    },
    "items": [
      {
        "id": "item_4553",
        "name": "Product Beta 100",
        "quantity": 2,
        "unitPrice": 364.25,
        "totalPrice": 728.5
      },
      {
        "id": "item_4236",
        "name": "Product Sigma 36",
        "quantity": 3,
        "unitPrice": 393.55,
        "totalPrice": 1180.65
      }
    ],
    "totalAmount": 1909.15,
    "status": "pending",
    "createdAt": "2026-04-05T15:29:51.004Z"
  },
  {
    "id": "ord_0090",
    "customer": {
      "id": "cust_026",
      "name": "Michael Martinez",
      "email": "michael.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_026"
    },
    "items": [
      {
        "id": "item_5558",
        "name": "Product Gamma 30",
        "quantity": 2,
        "unitPrice": 377.89,
        "totalPrice": 755.78
      },
      {
        "id": "item_8475",
        "name": "Product Beta 37",
        "quantity": 2,
        "unitPrice": 172.8,
        "totalPrice": 345.6
      },
      {
        "id": "item_6370",
        "name": "Product Delta 90",
        "quantity": 2,
        "unitPrice": 359.81,
        "totalPrice": 719.62
      }
    ],
    "totalAmount": 1821,
    "status": "pending",
    "createdAt": "2026-04-04T04:47:46.532Z"
  },
  {
    "id": "ord_0119",
    "customer": {
      "id": "cust_040",
      "name": "Thomas Rodriguez",
      "email": "thomas.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_040"
    },
    "items": [
      {
        "id": "item_1446",
        "name": "Product Beta 6",
        "quantity": 3,
        "unitPrice": 270.11,
        "totalPrice": 810.33
      },
      {
        "id": "item_9089",
        "name": "Product Delta 85",
        "quantity": 1,
        "unitPrice": 70.94,
        "totalPrice": 70.94
      },
      {
        "id": "item_4202",
        "name": "Product Gamma 88",
        "quantity": 3,
        "unitPrice": 187.05,
        "totalPrice": 561.15
      }
    ],
    "totalAmount": 1442.42,
    "status": "processing",
    "createdAt": "2026-04-04T01:20:13.168Z"
  },
  {
    "id": "ord_0001",
    "customer": {
      "id": "cust_032",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_032"
    },
    "items": [
      {
        "id": "item_2607",
        "name": "Product Sigma 92",
        "quantity": 2,
        "unitPrice": 58.14,
        "totalPrice": 116.28
      }
    ],
    "totalAmount": 116.28,
    "status": "completed",
    "createdAt": "2026-04-02T06:36:05.895Z"
  },
  {
    "id": "ord_0039",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_4918",
        "name": "Product Sigma 25",
        "quantity": 1,
        "unitPrice": 176.02,
        "totalPrice": 176.02
      }
    ],
    "totalAmount": 176.02,
    "status": "completed",
    "createdAt": "2026-03-28T00:19:56.816Z"
  },
  {
    "id": "ord_0127",
    "customer": {
      "id": "cust_009",
      "name": "Elizabeth Johnson",
      "email": "elizabeth.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_009"
    },
    "items": [
      {
        "id": "item_6446",
        "name": "Product Delta 10",
        "quantity": 3,
        "unitPrice": 397.09,
        "totalPrice": 1191.27
      },
      {
        "id": "item_6169",
        "name": "Product Sigma 85",
        "quantity": 1,
        "unitPrice": 319.03,
        "totalPrice": 319.03
      }
    ],
    "totalAmount": 1510.3,
    "status": "completed",
    "createdAt": "2026-03-24T17:34:08.646Z"
  },
  {
    "id": "ord_0122",
    "customer": {
      "id": "cust_005",
      "name": "Jennifer Miller",
      "email": "jennifer.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_005"
    },
    "items": [
      {
        "id": "item_9270",
        "name": "Product Beta 48",
        "quantity": 2,
        "unitPrice": 162.23,
        "totalPrice": 324.46
      },
      {
        "id": "item_9631",
        "name": "Product Sigma 19",
        "quantity": 3,
        "unitPrice": 82.58,
        "totalPrice": 247.74
      },
      {
        "id": "item_2140",
        "name": "Product Sigma 53",
        "quantity": 1,
        "unitPrice": 266.17,
        "totalPrice": 266.17
      },
      {
        "id": "item_6779",
        "name": "Product Beta 71",
        "quantity": 2,
        "unitPrice": 105.81,
        "totalPrice": 211.62
      }
    ],
    "totalAmount": 1049.99,
    "status": "pending",
    "createdAt": "2026-03-23T10:49:42.610Z"
  },
  {
    "id": "ord_0018",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_5485",
        "name": "Product Gamma 62",
        "quantity": 1,
        "unitPrice": 445.29,
        "totalPrice": 445.29
      }
    ],
    "totalAmount": 445.29,
    "status": "failed",
    "createdAt": "2026-03-20T10:22:09.831Z"
  },
  {
    "id": "ord_0052",
    "customer": {
      "id": "cust_031",
      "name": "Mary Williams",
      "email": "mary.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_031"
    },
    "items": [
      {
        "id": "item_3519",
        "name": "Product Gamma 42",
        "quantity": 2,
        "unitPrice": 24.48,
        "totalPrice": 48.96
      },
      {
        "id": "item_2371",
        "name": "Product Beta 18",
        "quantity": 1,
        "unitPrice": 161.56,
        "totalPrice": 161.56
      }
    ],
    "totalAmount": 210.52,
    "status": "completed",
    "createdAt": "2026-03-14T17:03:24.110Z"
  },
  {
    "id": "ord_0046",
    "customer": {
      "id": "cust_020",
      "name": "David Jones",
      "email": "david.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_020"
    },
    "items": [
      {
        "id": "item_3463",
        "name": "Product Delta 28",
        "quantity": 2,
        "unitPrice": 184.23,
        "totalPrice": 368.46
      },
      {
        "id": "item_3239",
        "name": "Product Alpha 43",
        "quantity": 1,
        "unitPrice": 251.17,
        "totalPrice": 251.17
      }
    ],
    "totalAmount": 619.63,
    "status": "processing",
    "createdAt": "2026-03-13T12:49:09.241Z"
  },
  {
    "id": "ord_0047",
    "customer": {
      "id": "cust_002",
      "name": "Richard Davis",
      "email": "richard.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_002"
    },
    "items": [
      {
        "id": "item_1685",
        "name": "Product Alpha 3",
        "quantity": 1,
        "unitPrice": 362.63,
        "totalPrice": 362.63
      },
      {
        "id": "item_4722",
        "name": "Product Sigma 54",
        "quantity": 2,
        "unitPrice": 102.23,
        "totalPrice": 204.46
      },
      {
        "id": "item_1565",
        "name": "Product Beta 62",
        "quantity": 1,
        "unitPrice": 83.13,
        "totalPrice": 83.13
      }
    ],
    "totalAmount": 650.22,
    "status": "processing",
    "createdAt": "2026-03-13T01:02:45.525Z"
  },
  {
    "id": "ord_0145",
    "customer": {
      "id": "cust_037",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_037"
    },
    "items": [
      {
        "id": "item_6562",
        "name": "Product Beta 2",
        "quantity": 2,
        "unitPrice": 348.47,
        "totalPrice": 696.94
      },
      {
        "id": "item_4171",
        "name": "Product Sigma 10",
        "quantity": 3,
        "unitPrice": 259.29,
        "totalPrice": 777.87
      },
      {
        "id": "item_2748",
        "name": "Product Gamma 7",
        "quantity": 3,
        "unitPrice": 387.25,
        "totalPrice": 1161.75
      },
      {
        "id": "item_7130",
        "name": "Product Delta 66",
        "quantity": 3,
        "unitPrice": 133.28,
        "totalPrice": 399.84
      }
    ],
    "totalAmount": 3036.4,
    "status": "pending",
    "createdAt": "2026-03-11T18:03:28.396Z"
  },
  {
    "id": "ord_0024",
    "customer": {
      "id": "cust_045",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_045"
    },
    "items": [
      {
        "id": "item_2843",
        "name": "Product Sigma 45",
        "quantity": 1,
        "unitPrice": 148.61,
        "totalPrice": 148.61
      },
      {
        "id": "item_2841",
        "name": "Product Delta 24",
        "quantity": 1,
        "unitPrice": 275.78,
        "totalPrice": 275.78
      }
    ],
    "totalAmount": 424.39,
    "status": "completed",
    "createdAt": "2026-03-09T04:30:56.353Z"
  },
  {
    "id": "ord_0116",
    "customer": {
      "id": "cust_023",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_023"
    },
    "items": [
      {
        "id": "item_1851",
        "name": "Product Sigma 5",
        "quantity": 3,
        "unitPrice": 364.32,
        "totalPrice": 1092.96
      },
      {
        "id": "item_2928",
        "name": "Product Gamma 17",
        "quantity": 1,
        "unitPrice": 296.65,
        "totalPrice": 296.65
      },
      {
        "id": "item_2600",
        "name": "Product Sigma 19",
        "quantity": 1,
        "unitPrice": 243.77,
        "totalPrice": 243.77
      }
    ],
    "totalAmount": 1633.38,
    "status": "completed",
    "createdAt": "2026-03-07T06:03:29.869Z"
  },
  {
    "id": "ord_0140",
    "customer": {
      "id": "cust_029",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_029"
    },
    "items": [
      {
        "id": "item_1377",
        "name": "Product Alpha 62",
        "quantity": 1,
        "unitPrice": 432.17,
        "totalPrice": 432.17
      }
    ],
    "totalAmount": 432.17,
    "status": "completed",
    "createdAt": "2026-02-28T12:51:07.294Z"
  },
  {
    "id": "ord_0019",
    "customer": {
      "id": "cust_044",
      "name": "John Garcia",
      "email": "john.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_044"
    },
    "items": [
      {
        "id": "item_5471",
        "name": "Product Beta 56",
        "quantity": 2,
        "unitPrice": 48.92,
        "totalPrice": 97.84
      },
      {
        "id": "item_5621",
        "name": "Product Delta 45",
        "quantity": 2,
        "unitPrice": 117.71,
        "totalPrice": 235.42
      }
    ],
    "totalAmount": 333.26,
    "status": "processing",
    "createdAt": "2026-02-27T11:40:21.155Z"
  },
  {
    "id": "ord_0094",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_2555",
        "name": "Product Beta 54",
        "quantity": 1,
        "unitPrice": 290.01,
        "totalPrice": 290.01
      },
      {
        "id": "item_7180",
        "name": "Product Beta 55",
        "quantity": 3,
        "unitPrice": 84.05,
        "totalPrice": 252.15
      }
    ],
    "totalAmount": 542.16,
    "status": "processing",
    "createdAt": "2026-02-25T22:35:51.961Z"
  },
  {
    "id": "ord_0008",
    "customer": {
      "id": "cust_033",
      "name": "Linda Miller",
      "email": "linda.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_033"
    },
    "items": [
      {
        "id": "item_2199",
        "name": "Product Delta 86",
        "quantity": 2,
        "unitPrice": 122.01,
        "totalPrice": 244.02
      },
      {
        "id": "item_3680",
        "name": "Product Beta 74",
        "quantity": 2,
        "unitPrice": 467.22,
        "totalPrice": 934.44
      }
    ],
    "totalAmount": 1178.46,
    "status": "pending",
    "createdAt": "2026-02-25T11:21:51.946Z"
  },
  {
    "id": "ord_0022",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_2887",
        "name": "Product Delta 75",
        "quantity": 1,
        "unitPrice": 283.35,
        "totalPrice": 283.35
      },
      {
        "id": "item_7593",
        "name": "Product Gamma 50",
        "quantity": 1,
        "unitPrice": 218.77,
        "totalPrice": 218.77
      },
      {
        "id": "item_9121",
        "name": "Product Sigma 30",
        "quantity": 2,
        "unitPrice": 61.44,
        "totalPrice": 122.88
      }
    ],
    "totalAmount": 625,
    "status": "completed",
    "createdAt": "2026-02-24T05:01:12.222Z"
  },
  {
    "id": "ord_0130",
    "customer": {
      "id": "cust_015",
      "name": "Thomas Miller",
      "email": "thomas.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_015"
    },
    "items": [
      {
        "id": "item_4912",
        "name": "Product Alpha 55",
        "quantity": 3,
        "unitPrice": 259.56,
        "totalPrice": 778.68
      },
      {
        "id": "item_6515",
        "name": "Product Sigma 17",
        "quantity": 2,
        "unitPrice": 297.77,
        "totalPrice": 595.54
      }
    ],
    "totalAmount": 1374.22,
    "status": "completed",
    "createdAt": "2026-02-23T01:39:56.970Z"
  },
  {
    "id": "ord_0026",
    "customer": {
      "id": "cust_021",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_021"
    },
    "items": [
      {
        "id": "item_1474",
        "name": "Product Alpha 57",
        "quantity": 1,
        "unitPrice": 272.05,
        "totalPrice": 272.05
      }
    ],
    "totalAmount": 272.05,
    "status": "completed",
    "createdAt": "2026-02-22T13:27:32.405Z"
  },
  {
    "id": "ord_0004",
    "customer": {
      "id": "cust_050",
      "name": "Karen Jones",
      "email": "karen.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_050"
    },
    "items": [
      {
        "id": "item_6956",
        "name": "Product Beta 8",
        "quantity": 3,
        "unitPrice": 457.47,
        "totalPrice": 1372.41
      }
    ],
    "totalAmount": 1372.41,
    "status": "failed",
    "createdAt": "2026-02-19T00:00:25.922Z"
  },
  {
    "id": "ord_0065",
    "customer": {
      "id": "cust_015",
      "name": "Thomas Miller",
      "email": "thomas.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_015"
    },
    "items": [
      {
        "id": "item_2713",
        "name": "Product Delta 89",
        "quantity": 2,
        "unitPrice": 82.76,
        "totalPrice": 165.52
      }
    ],
    "totalAmount": 165.52,
    "status": "processing",
    "createdAt": "2026-02-18T04:23:59.870Z"
  },
  {
    "id": "ord_0031",
    "customer": {
      "id": "cust_003",
      "name": "Robert Martinez",
      "email": "robert.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_003"
    },
    "items": [
      {
        "id": "item_9841",
        "name": "Product Alpha 25",
        "quantity": 2,
        "unitPrice": 479.77,
        "totalPrice": 959.54
      },
      {
        "id": "item_1066",
        "name": "Product Sigma 81",
        "quantity": 1,
        "unitPrice": 418.39,
        "totalPrice": 418.39
      },
      {
        "id": "item_3548",
        "name": "Product Sigma 40",
        "quantity": 3,
        "unitPrice": 353.55,
        "totalPrice": 1060.65
      },
      {
        "id": "item_4999",
        "name": "Product Sigma 56",
        "quantity": 3,
        "unitPrice": 72.69,
        "totalPrice": 218.07
      }
    ],
    "totalAmount": 2656.65,
    "status": "completed",
    "createdAt": "2026-02-16T21:08:26.243Z"
  },
  {
    "id": "ord_0132",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_4569",
        "name": "Product Alpha 68",
        "quantity": 2,
        "unitPrice": 430.9,
        "totalPrice": 861.8
      }
    ],
    "totalAmount": 861.8,
    "status": "completed",
    "createdAt": "2026-02-13T04:00:58.586Z"
  },
  {
    "id": "ord_0003",
    "customer": {
      "id": "cust_032",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_032"
    },
    "items": [
      {
        "id": "item_3996",
        "name": "Product Gamma 61",
        "quantity": 3,
        "unitPrice": 110.44,
        "totalPrice": 331.32
      },
      {
        "id": "item_1541",
        "name": "Product Sigma 55",
        "quantity": 2,
        "unitPrice": 77.7,
        "totalPrice": 155.4
      },
      {
        "id": "item_3896",
        "name": "Product Delta 47",
        "quantity": 2,
        "unitPrice": 486.03,
        "totalPrice": 972.06
      }
    ],
    "totalAmount": 1458.78,
    "status": "completed",
    "createdAt": "2026-02-11T14:24:56.437Z"
  },
  {
    "id": "ord_0149",
    "customer": {
      "id": "cust_039",
      "name": "Michael Jones",
      "email": "michael.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_039"
    },
    "items": [
      {
        "id": "item_8680",
        "name": "Product Beta 30",
        "quantity": 2,
        "unitPrice": 380.75,
        "totalPrice": 761.5
      }
    ],
    "totalAmount": 761.5,
    "status": "processing",
    "createdAt": "2026-02-10T07:06:02.352Z"
  },
  {
    "id": "ord_0114",
    "customer": {
      "id": "cust_030",
      "name": "Robert Davis",
      "email": "robert.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_030"
    },
    "items": [
      {
        "id": "item_6671",
        "name": "Product Beta 41",
        "quantity": 1,
        "unitPrice": 324.89,
        "totalPrice": 324.89
      },
      {
        "id": "item_8044",
        "name": "Product Delta 75",
        "quantity": 2,
        "unitPrice": 265.88,
        "totalPrice": 531.76
      }
    ],
    "totalAmount": 856.65,
    "status": "completed",
    "createdAt": "2026-02-06T03:30:37.315Z"
  },
  {
    "id": "ord_0038",
    "customer": {
      "id": "cust_034",
      "name": "Karen Brown",
      "email": "karen.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_034"
    },
    "items": [
      {
        "id": "item_6434",
        "name": "Product Sigma 42",
        "quantity": 3,
        "unitPrice": 469.17,
        "totalPrice": 1407.51
      },
      {
        "id": "item_5649",
        "name": "Product Alpha 74",
        "quantity": 2,
        "unitPrice": 201.76,
        "totalPrice": 403.52
      }
    ],
    "totalAmount": 1811.03,
    "status": "processing",
    "createdAt": "2026-02-05T21:12:59.488Z"
  },
  {
    "id": "ord_0150",
    "customer": {
      "id": "cust_046",
      "name": "Jennifer Jones",
      "email": "jennifer.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_046"
    },
    "items": [
      {
        "id": "item_2515",
        "name": "Product Sigma 17",
        "quantity": 1,
        "unitPrice": 271.56,
        "totalPrice": 271.56
      },
      {
        "id": "item_7992",
        "name": "Product Beta 63",
        "quantity": 2,
        "unitPrice": 372.42,
        "totalPrice": 744.84
      },
      {
        "id": "item_3629",
        "name": "Product Beta 94",
        "quantity": 1,
        "unitPrice": 441.17,
        "totalPrice": 441.17
      },
      {
        "id": "item_7216",
        "name": "Product Beta 10",
        "quantity": 1,
        "unitPrice": 38.57,
        "totalPrice": 38.57
      }
    ],
    "totalAmount": 1496.14,
    "status": "processing",
    "createdAt": "2026-02-05T07:50:20.386Z"
  },
  {
    "id": "ord_0070",
    "customer": {
      "id": "cust_042",
      "name": "David Garcia",
      "email": "david.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_042"
    },
    "items": [
      {
        "id": "item_5518",
        "name": "Product Beta 22",
        "quantity": 3,
        "unitPrice": 418.24,
        "totalPrice": 1254.72
      }
    ],
    "totalAmount": 1254.72,
    "status": "completed",
    "createdAt": "2026-01-30T04:04:49.819Z"
  },
  {
    "id": "ord_0128",
    "customer": {
      "id": "cust_015",
      "name": "Thomas Miller",
      "email": "thomas.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_015"
    },
    "items": [
      {
        "id": "item_6817",
        "name": "Product Sigma 10",
        "quantity": 2,
        "unitPrice": 72.68,
        "totalPrice": 145.36
      }
    ],
    "totalAmount": 145.36,
    "status": "pending",
    "createdAt": "2026-01-27T11:12:02.774Z"
  },
  {
    "id": "ord_0002",
    "customer": {
      "id": "cust_029",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_029"
    },
    "items": [
      {
        "id": "item_6413",
        "name": "Product Gamma 85",
        "quantity": 1,
        "unitPrice": 285.65,
        "totalPrice": 285.65
      },
      {
        "id": "item_9079",
        "name": "Product Delta 3",
        "quantity": 3,
        "unitPrice": 349.66,
        "totalPrice": 1048.98
      },
      {
        "id": "item_6575",
        "name": "Product Delta 41",
        "quantity": 3,
        "unitPrice": 70.61,
        "totalPrice": 211.83
      }
    ],
    "totalAmount": 1546.46,
    "status": "completed",
    "createdAt": "2026-01-26T16:30:49.355Z"
  },
  {
    "id": "ord_0136",
    "customer": {
      "id": "cust_029",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_029"
    },
    "items": [
      {
        "id": "item_4649",
        "name": "Product Delta 91",
        "quantity": 2,
        "unitPrice": 225.76,
        "totalPrice": 451.52
      },
      {
        "id": "item_5960",
        "name": "Product Beta 85",
        "quantity": 2,
        "unitPrice": 206.3,
        "totalPrice": 412.6
      },
      {
        "id": "item_5744",
        "name": "Product Alpha 26",
        "quantity": 1,
        "unitPrice": 342.06,
        "totalPrice": 342.06
      },
      {
        "id": "item_2426",
        "name": "Product Delta 100",
        "quantity": 3,
        "unitPrice": 13.07,
        "totalPrice": 39.21
      }
    ],
    "totalAmount": 1245.39,
    "status": "completed",
    "createdAt": "2026-01-22T15:02:45.379Z"
  },
  {
    "id": "ord_0006",
    "customer": {
      "id": "cust_034",
      "name": "Karen Brown",
      "email": "karen.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_034"
    },
    "items": [
      {
        "id": "item_4138",
        "name": "Product Alpha 81",
        "quantity": 3,
        "unitPrice": 36.37,
        "totalPrice": 109.11
      },
      {
        "id": "item_2783",
        "name": "Product Delta 57",
        "quantity": 1,
        "unitPrice": 100.37,
        "totalPrice": 100.37
      }
    ],
    "totalAmount": 209.48,
    "status": "completed",
    "createdAt": "2026-01-22T03:05:58.600Z"
  },
  {
    "id": "ord_0111",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_3699",
        "name": "Product Sigma 75",
        "quantity": 1,
        "unitPrice": 97.09,
        "totalPrice": 97.09
      },
      {
        "id": "item_1417",
        "name": "Product Alpha 67",
        "quantity": 3,
        "unitPrice": 358.42,
        "totalPrice": 1075.26
      }
    ],
    "totalAmount": 1172.35,
    "status": "completed",
    "createdAt": "2026-01-21T23:45:45.442Z"
  },
  {
    "id": "ord_0041",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_1895",
        "name": "Product Alpha 77",
        "quantity": 3,
        "unitPrice": 349.58,
        "totalPrice": 1048.74
      },
      {
        "id": "item_7769",
        "name": "Product Beta 51",
        "quantity": 1,
        "unitPrice": 167.03,
        "totalPrice": 167.03
      }
    ],
    "totalAmount": 1215.77,
    "status": "pending",
    "createdAt": "2026-01-18T04:30:26.979Z"
  },
  {
    "id": "ord_0137",
    "customer": {
      "id": "cust_033",
      "name": "Linda Miller",
      "email": "linda.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_033"
    },
    "items": [
      {
        "id": "item_9905",
        "name": "Product Delta 98",
        "quantity": 2,
        "unitPrice": 150.55,
        "totalPrice": 301.1
      },
      {
        "id": "item_4586",
        "name": "Product Gamma 92",
        "quantity": 2,
        "unitPrice": 411.03,
        "totalPrice": 822.06
      },
      {
        "id": "item_9041",
        "name": "Product Sigma 56",
        "quantity": 2,
        "unitPrice": 451.09,
        "totalPrice": 902.18
      },
      {
        "id": "item_3437",
        "name": "Product Delta 93",
        "quantity": 3,
        "unitPrice": 456.22,
        "totalPrice": 1368.66
      }
    ],
    "totalAmount": 3394,
    "status": "processing",
    "createdAt": "2026-01-15T13:31:09.645Z"
  },
  {
    "id": "ord_0076",
    "customer": {
      "id": "cust_014",
      "name": "Mary Johnson",
      "email": "mary.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_014"
    },
    "items": [
      {
        "id": "item_2346",
        "name": "Product Beta 31",
        "quantity": 3,
        "unitPrice": 414.02,
        "totalPrice": 1242.06
      }
    ],
    "totalAmount": 1242.06,
    "status": "completed",
    "createdAt": "2026-01-12T22:58:35.232Z"
  },
  {
    "id": "ord_0043",
    "customer": {
      "id": "cust_016",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_016"
    },
    "items": [
      {
        "id": "item_6144",
        "name": "Product Alpha 72",
        "quantity": 3,
        "unitPrice": 184.43,
        "totalPrice": 553.29
      },
      {
        "id": "item_9585",
        "name": "Product Delta 21",
        "quantity": 2,
        "unitPrice": 247.79,
        "totalPrice": 495.58
      },
      {
        "id": "item_4109",
        "name": "Product Delta 71",
        "quantity": 3,
        "unitPrice": 331.31,
        "totalPrice": 993.93
      }
    ],
    "totalAmount": 2042.8,
    "status": "processing",
    "createdAt": "2026-01-11T14:21:46.396Z"
  },
  {
    "id": "ord_0015",
    "customer": {
      "id": "cust_007",
      "name": "Susan Johnson",
      "email": "susan.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_007"
    },
    "items": [
      {
        "id": "item_9079",
        "name": "Product Beta 66",
        "quantity": 1,
        "unitPrice": 365.98,
        "totalPrice": 365.98
      },
      {
        "id": "item_8782",
        "name": "Product Gamma 52",
        "quantity": 2,
        "unitPrice": 33.71,
        "totalPrice": 67.42
      }
    ],
    "totalAmount": 433.4,
    "status": "completed",
    "createdAt": "2026-01-07T21:39:56.776Z"
  },
  {
    "id": "ord_0016",
    "customer": {
      "id": "cust_012",
      "name": "Sarah Brown",
      "email": "sarah.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_012"
    },
    "items": [
      {
        "id": "item_6252",
        "name": "Product Alpha 90",
        "quantity": 3,
        "unitPrice": 415.8,
        "totalPrice": 1247.4
      },
      {
        "id": "item_2144",
        "name": "Product Beta 22",
        "quantity": 2,
        "unitPrice": 250.06,
        "totalPrice": 500.12
      }
    ],
    "totalAmount": 1747.52,
    "status": "failed",
    "createdAt": "2026-01-05T02:39:11.397Z"
  },
  {
    "id": "ord_0058",
    "customer": {
      "id": "cust_022",
      "name": "John Brown",
      "email": "john.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_022"
    },
    "items": [
      {
        "id": "item_6984",
        "name": "Product Alpha 2",
        "quantity": 1,
        "unitPrice": 341.38,
        "totalPrice": 341.38
      },
      {
        "id": "item_8123",
        "name": "Product Alpha 70",
        "quantity": 3,
        "unitPrice": 41.75,
        "totalPrice": 125.25
      },
      {
        "id": "item_7869",
        "name": "Product Sigma 17",
        "quantity": 1,
        "unitPrice": 221.31,
        "totalPrice": 221.31
      },
      {
        "id": "item_1467",
        "name": "Product Alpha 38",
        "quantity": 3,
        "unitPrice": 27.67,
        "totalPrice": 83.01
      }
    ],
    "totalAmount": 770.95,
    "status": "failed",
    "createdAt": "2026-01-04T00:13:04.654Z"
  },
  {
    "id": "ord_0129",
    "customer": {
      "id": "cust_033",
      "name": "Linda Miller",
      "email": "linda.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_033"
    },
    "items": [
      {
        "id": "item_3874",
        "name": "Product Alpha 79",
        "quantity": 3,
        "unitPrice": 488.26,
        "totalPrice": 1464.78
      },
      {
        "id": "item_2012",
        "name": "Product Alpha 51",
        "quantity": 1,
        "unitPrice": 401.52,
        "totalPrice": 401.52
      }
    ],
    "totalAmount": 1866.3,
    "status": "completed",
    "createdAt": "2026-01-03T09:12:58.076Z"
  },
  {
    "id": "ord_0105",
    "customer": {
      "id": "cust_040",
      "name": "Thomas Rodriguez",
      "email": "thomas.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_040"
    },
    "items": [
      {
        "id": "item_2595",
        "name": "Product Sigma 16",
        "quantity": 3,
        "unitPrice": 214.35,
        "totalPrice": 643.05
      },
      {
        "id": "item_6577",
        "name": "Product Sigma 58",
        "quantity": 3,
        "unitPrice": 272.92,
        "totalPrice": 818.76
      }
    ],
    "totalAmount": 1461.81,
    "status": "processing",
    "createdAt": "2026-01-01T17:08:07.313Z"
  },
  {
    "id": "ord_0081",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_2921",
        "name": "Product Alpha 66",
        "quantity": 3,
        "unitPrice": 208.6,
        "totalPrice": 625.8
      },
      {
        "id": "item_9739",
        "name": "Product Beta 13",
        "quantity": 3,
        "unitPrice": 410.81,
        "totalPrice": 1232.43
      },
      {
        "id": "item_7143",
        "name": "Product Beta 89",
        "quantity": 1,
        "unitPrice": 90.54,
        "totalPrice": 90.54
      },
      {
        "id": "item_5247",
        "name": "Product Delta 77",
        "quantity": 3,
        "unitPrice": 422.88,
        "totalPrice": 1268.64
      }
    ],
    "totalAmount": 3217.41,
    "status": "pending",
    "createdAt": "2025-12-31T13:28:01.604Z"
  },
  {
    "id": "ord_0007",
    "customer": {
      "id": "cust_017",
      "name": "Robert Brown",
      "email": "robert.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_017"
    },
    "items": [
      {
        "id": "item_6858",
        "name": "Product Sigma 76",
        "quantity": 2,
        "unitPrice": 292.42,
        "totalPrice": 584.84
      },
      {
        "id": "item_2793",
        "name": "Product Sigma 39",
        "quantity": 2,
        "unitPrice": 275.12,
        "totalPrice": 550.24
      }
    ],
    "totalAmount": 1135.08,
    "status": "completed",
    "createdAt": "2025-12-31T11:31:02.332Z"
  },
  {
    "id": "ord_0082",
    "customer": {
      "id": "cust_028",
      "name": "Patricia Brown",
      "email": "patricia.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_028"
    },
    "items": [
      {
        "id": "item_3353",
        "name": "Product Beta 76",
        "quantity": 2,
        "unitPrice": 489.57,
        "totalPrice": 979.14
      },
      {
        "id": "item_6101",
        "name": "Product Sigma 14",
        "quantity": 3,
        "unitPrice": 314.23,
        "totalPrice": 942.69
      },
      {
        "id": "item_3219",
        "name": "Product Delta 84",
        "quantity": 2,
        "unitPrice": 287.83,
        "totalPrice": 575.66
      }
    ],
    "totalAmount": 2497.49,
    "status": "failed",
    "createdAt": "2025-12-26T18:45:03.511Z"
  },
  {
    "id": "ord_0126",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_4764",
        "name": "Product Gamma 47",
        "quantity": 3,
        "unitPrice": 332.37,
        "totalPrice": 997.11
      },
      {
        "id": "item_1762",
        "name": "Product Beta 61",
        "quantity": 3,
        "unitPrice": 487.53,
        "totalPrice": 1462.59
      },
      {
        "id": "item_3747",
        "name": "Product Alpha 19",
        "quantity": 1,
        "unitPrice": 185.09,
        "totalPrice": 185.09
      },
      {
        "id": "item_5322",
        "name": "Product Sigma 55",
        "quantity": 2,
        "unitPrice": 118.27,
        "totalPrice": 236.54
      }
    ],
    "totalAmount": 2881.33,
    "status": "completed",
    "createdAt": "2025-12-25T04:08:12.287Z"
  },
  {
    "id": "ord_0103",
    "customer": {
      "id": "cust_033",
      "name": "Linda Miller",
      "email": "linda.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_033"
    },
    "items": [
      {
        "id": "item_7534",
        "name": "Product Gamma 78",
        "quantity": 2,
        "unitPrice": 184.71,
        "totalPrice": 369.42
      },
      {
        "id": "item_1028",
        "name": "Product Delta 35",
        "quantity": 2,
        "unitPrice": 84.46,
        "totalPrice": 168.92
      }
    ],
    "totalAmount": 538.34,
    "status": "completed",
    "createdAt": "2025-12-25T03:26:33.488Z"
  },
  {
    "id": "ord_0010",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_4031",
        "name": "Product Alpha 81",
        "quantity": 1,
        "unitPrice": 76.74,
        "totalPrice": 76.74
      }
    ],
    "totalAmount": 76.74,
    "status": "completed",
    "createdAt": "2025-12-21T08:32:36.557Z"
  },
  {
    "id": "ord_0050",
    "customer": {
      "id": "cust_025",
      "name": "Charles Martinez",
      "email": "charles.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_025"
    },
    "items": [
      {
        "id": "item_5125",
        "name": "Product Gamma 2",
        "quantity": 3,
        "unitPrice": 439.18,
        "totalPrice": 1317.54
      },
      {
        "id": "item_5482",
        "name": "Product Sigma 40",
        "quantity": 2,
        "unitPrice": 290.95,
        "totalPrice": 581.9
      },
      {
        "id": "item_3342",
        "name": "Product Sigma 39",
        "quantity": 2,
        "unitPrice": 421.84,
        "totalPrice": 843.68
      }
    ],
    "totalAmount": 2743.12,
    "status": "completed",
    "createdAt": "2025-12-19T16:52:18.357Z"
  },
  {
    "id": "ord_0023",
    "customer": {
      "id": "cust_013",
      "name": "Joseph Davis",
      "email": "joseph.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_013"
    },
    "items": [
      {
        "id": "item_3204",
        "name": "Product Alpha 92",
        "quantity": 2,
        "unitPrice": 139.92,
        "totalPrice": 279.84
      },
      {
        "id": "item_9095",
        "name": "Product Alpha 48",
        "quantity": 3,
        "unitPrice": 280.9,
        "totalPrice": 842.7
      }
    ],
    "totalAmount": 1122.54,
    "status": "completed",
    "createdAt": "2025-12-18T12:01:14.230Z"
  },
  {
    "id": "ord_0066",
    "customer": {
      "id": "cust_016",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_016"
    },
    "items": [
      {
        "id": "item_3810",
        "name": "Product Beta 15",
        "quantity": 2,
        "unitPrice": 403.12,
        "totalPrice": 806.24
      },
      {
        "id": "item_9949",
        "name": "Product Beta 29",
        "quantity": 1,
        "unitPrice": 385.98,
        "totalPrice": 385.98
      },
      {
        "id": "item_4975",
        "name": "Product Gamma 99",
        "quantity": 3,
        "unitPrice": 14.01,
        "totalPrice": 42.03
      },
      {
        "id": "item_6977",
        "name": "Product Sigma 81",
        "quantity": 2,
        "unitPrice": 165.85,
        "totalPrice": 331.7
      }
    ],
    "totalAmount": 1565.95,
    "status": "completed",
    "createdAt": "2025-12-17T14:03:48.537Z"
  },
  {
    "id": "ord_0073",
    "customer": {
      "id": "cust_036",
      "name": "Richard Garcia",
      "email": "richard.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_036"
    },
    "items": [
      {
        "id": "item_7739",
        "name": "Product Sigma 7",
        "quantity": 2,
        "unitPrice": 282.44,
        "totalPrice": 564.88
      },
      {
        "id": "item_1012",
        "name": "Product Sigma 6",
        "quantity": 1,
        "unitPrice": 294.85,
        "totalPrice": 294.85
      }
    ],
    "totalAmount": 859.73,
    "status": "processing",
    "createdAt": "2025-12-17T13:59:48.387Z"
  },
  {
    "id": "ord_0068",
    "customer": {
      "id": "cust_014",
      "name": "Mary Johnson",
      "email": "mary.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_014"
    },
    "items": [
      {
        "id": "item_4455",
        "name": "Product Sigma 59",
        "quantity": 2,
        "unitPrice": 170.9,
        "totalPrice": 341.8
      }
    ],
    "totalAmount": 341.8,
    "status": "processing",
    "createdAt": "2025-12-16T17:15:57.336Z"
  },
  {
    "id": "ord_0064",
    "customer": {
      "id": "cust_005",
      "name": "Jennifer Miller",
      "email": "jennifer.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_005"
    },
    "items": [
      {
        "id": "item_4899",
        "name": "Product Alpha 88",
        "quantity": 2,
        "unitPrice": 268.95,
        "totalPrice": 537.9
      }
    ],
    "totalAmount": 537.9,
    "status": "processing",
    "createdAt": "2025-12-11T20:58:28.858Z"
  },
  {
    "id": "ord_0099",
    "customer": {
      "id": "cust_050",
      "name": "Karen Jones",
      "email": "karen.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_050"
    },
    "items": [
      {
        "id": "item_3613",
        "name": "Product Gamma 24",
        "quantity": 2,
        "unitPrice": 173.54,
        "totalPrice": 347.08
      },
      {
        "id": "item_8277",
        "name": "Product Beta 60",
        "quantity": 1,
        "unitPrice": 414.42,
        "totalPrice": 414.42
      },
      {
        "id": "item_9442",
        "name": "Product Sigma 84",
        "quantity": 2,
        "unitPrice": 264.29,
        "totalPrice": 528.58
      }
    ],
    "totalAmount": 1290.08,
    "status": "completed",
    "createdAt": "2025-12-07T00:12:41.521Z"
  },
  {
    "id": "ord_0095",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_1679",
        "name": "Product Sigma 72",
        "quantity": 2,
        "unitPrice": 198.82,
        "totalPrice": 397.64
      }
    ],
    "totalAmount": 397.64,
    "status": "completed",
    "createdAt": "2025-12-03T15:50:35.109Z"
  },
  {
    "id": "ord_0020",
    "customer": {
      "id": "cust_050",
      "name": "Karen Jones",
      "email": "karen.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_050"
    },
    "items": [
      {
        "id": "item_9050",
        "name": "Product Beta 5",
        "quantity": 1,
        "unitPrice": 305.96,
        "totalPrice": 305.96
      },
      {
        "id": "item_5086",
        "name": "Product Sigma 41",
        "quantity": 1,
        "unitPrice": 220.59,
        "totalPrice": 220.59
      }
    ],
    "totalAmount": 526.55,
    "status": "completed",
    "createdAt": "2025-12-03T07:24:35.132Z"
  },
  {
    "id": "ord_0029",
    "customer": {
      "id": "cust_037",
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_037"
    },
    "items": [
      {
        "id": "item_1200",
        "name": "Product Sigma 12",
        "quantity": 2,
        "unitPrice": 88.99,
        "totalPrice": 177.98
      },
      {
        "id": "item_1015",
        "name": "Product Beta 63",
        "quantity": 3,
        "unitPrice": 417.81,
        "totalPrice": 1253.43
      }
    ],
    "totalAmount": 1431.41,
    "status": "processing",
    "createdAt": "2025-11-30T05:16:09.985Z"
  },
  {
    "id": "ord_0053",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_1108",
        "name": "Product Gamma 7",
        "quantity": 2,
        "unitPrice": 419.51,
        "totalPrice": 839.02
      },
      {
        "id": "item_9415",
        "name": "Product Gamma 42",
        "quantity": 2,
        "unitPrice": 312.42,
        "totalPrice": 624.84
      }
    ],
    "totalAmount": 1463.86,
    "status": "completed",
    "createdAt": "2025-11-29T11:04:20.792Z"
  },
  {
    "id": "ord_0139",
    "customer": {
      "id": "cust_041",
      "name": "David Brown",
      "email": "david.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_041"
    },
    "items": [
      {
        "id": "item_8534",
        "name": "Product Gamma 89",
        "quantity": 2,
        "unitPrice": 128.1,
        "totalPrice": 256.2
      },
      {
        "id": "item_5471",
        "name": "Product Gamma 48",
        "quantity": 1,
        "unitPrice": 307,
        "totalPrice": 307
      },
      {
        "id": "item_5516",
        "name": "Product Beta 56",
        "quantity": 3,
        "unitPrice": 278.32,
        "totalPrice": 834.96
      }
    ],
    "totalAmount": 1398.16,
    "status": "processing",
    "createdAt": "2025-11-27T06:03:30.642Z"
  },
  {
    "id": "ord_0108",
    "customer": {
      "id": "cust_048",
      "name": "Michael Rodriguez",
      "email": "michael.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_048"
    },
    "items": [
      {
        "id": "item_9130",
        "name": "Product Sigma 22",
        "quantity": 3,
        "unitPrice": 311.4,
        "totalPrice": 934.2
      }
    ],
    "totalAmount": 934.2,
    "status": "completed",
    "createdAt": "2025-11-23T15:21:48.237Z"
  },
  {
    "id": "ord_0109",
    "customer": {
      "id": "cust_035",
      "name": "Jessica Davis",
      "email": "jessica.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_035"
    },
    "items": [
      {
        "id": "item_1489",
        "name": "Product Delta 19",
        "quantity": 2,
        "unitPrice": 340.92,
        "totalPrice": 681.84
      },
      {
        "id": "item_8198",
        "name": "Product Beta 55",
        "quantity": 3,
        "unitPrice": 361.36,
        "totalPrice": 1084.08
      },
      {
        "id": "item_5790",
        "name": "Product Gamma 92",
        "quantity": 3,
        "unitPrice": 440.35,
        "totalPrice": 1321.05
      }
    ],
    "totalAmount": 3086.97,
    "status": "failed",
    "createdAt": "2025-11-18T18:47:35.412Z"
  },
  {
    "id": "ord_0009",
    "customer": {
      "id": "cust_045",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_045"
    },
    "items": [
      {
        "id": "item_8004",
        "name": "Product Beta 74",
        "quantity": 3,
        "unitPrice": 49.45,
        "totalPrice": 148.35
      },
      {
        "id": "item_5720",
        "name": "Product Alpha 84",
        "quantity": 2,
        "unitPrice": 280.97,
        "totalPrice": 561.94
      },
      {
        "id": "item_1082",
        "name": "Product Gamma 25",
        "quantity": 2,
        "unitPrice": 182.44,
        "totalPrice": 364.88
      },
      {
        "id": "item_7291",
        "name": "Product Alpha 44",
        "quantity": 2,
        "unitPrice": 384.02,
        "totalPrice": 768.04
      }
    ],
    "totalAmount": 1843.21,
    "status": "failed",
    "createdAt": "2025-11-17T16:59:27.156Z"
  },
  {
    "id": "ord_0069",
    "customer": {
      "id": "cust_021",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_021"
    },
    "items": [
      {
        "id": "item_7745",
        "name": "Product Gamma 65",
        "quantity": 2,
        "unitPrice": 31.18,
        "totalPrice": 62.36
      },
      {
        "id": "item_7354",
        "name": "Product Alpha 67",
        "quantity": 1,
        "unitPrice": 301.44,
        "totalPrice": 301.44
      },
      {
        "id": "item_5688",
        "name": "Product Delta 48",
        "quantity": 3,
        "unitPrice": 426.69,
        "totalPrice": 1280.07
      }
    ],
    "totalAmount": 1643.87,
    "status": "completed",
    "createdAt": "2025-11-16T17:39:04.629Z"
  },
  {
    "id": "ord_0054",
    "customer": {
      "id": "cust_018",
      "name": "Charles Williams",
      "email": "charles.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_018"
    },
    "items": [
      {
        "id": "item_1966",
        "name": "Product Sigma 51",
        "quantity": 1,
        "unitPrice": 238.47,
        "totalPrice": 238.47
      },
      {
        "id": "item_5778",
        "name": "Product Alpha 60",
        "quantity": 2,
        "unitPrice": 174.23,
        "totalPrice": 348.46
      },
      {
        "id": "item_2866",
        "name": "Product Beta 23",
        "quantity": 3,
        "unitPrice": 244.34,
        "totalPrice": 733.02
      },
      {
        "id": "item_7196",
        "name": "Product Gamma 51",
        "quantity": 3,
        "unitPrice": 303.44,
        "totalPrice": 910.32
      }
    ],
    "totalAmount": 2230.27,
    "status": "completed",
    "createdAt": "2025-11-07T21:23:50.451Z"
  },
  {
    "id": "ord_0042",
    "customer": {
      "id": "cust_009",
      "name": "Elizabeth Johnson",
      "email": "elizabeth.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_009"
    },
    "items": [
      {
        "id": "item_7849",
        "name": "Product Sigma 79",
        "quantity": 2,
        "unitPrice": 308.45,
        "totalPrice": 616.9
      }
    ],
    "totalAmount": 616.9,
    "status": "completed",
    "createdAt": "2025-11-04T21:18:59.843Z"
  },
  {
    "id": "ord_0144",
    "customer": {
      "id": "cust_050",
      "name": "Karen Jones",
      "email": "karen.jones@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_050"
    },
    "items": [
      {
        "id": "item_1885",
        "name": "Product Gamma 28",
        "quantity": 2,
        "unitPrice": 210.82,
        "totalPrice": 421.64
      },
      {
        "id": "item_7996",
        "name": "Product Delta 5",
        "quantity": 3,
        "unitPrice": 288.03,
        "totalPrice": 864.09
      }
    ],
    "totalAmount": 1285.73,
    "status": "completed",
    "createdAt": "2025-11-04T09:26:06.264Z"
  },
  {
    "id": "ord_0091",
    "customer": {
      "id": "cust_044",
      "name": "John Garcia",
      "email": "john.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_044"
    },
    "items": [
      {
        "id": "item_9480",
        "name": "Product Beta 36",
        "quantity": 1,
        "unitPrice": 409.64,
        "totalPrice": 409.64
      },
      {
        "id": "item_1444",
        "name": "Product Delta 57",
        "quantity": 1,
        "unitPrice": 402.47,
        "totalPrice": 402.47
      }
    ],
    "totalAmount": 812.11,
    "status": "processing",
    "createdAt": "2025-10-22T19:50:50.372Z"
  },
  {
    "id": "ord_0146",
    "customer": {
      "id": "cust_024",
      "name": "Thomas Garcia",
      "email": "thomas.garcia@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_024"
    },
    "items": [
      {
        "id": "item_3021",
        "name": "Product Delta 65",
        "quantity": 3,
        "unitPrice": 240.18,
        "totalPrice": 720.54
      },
      {
        "id": "item_2758",
        "name": "Product Beta 40",
        "quantity": 3,
        "unitPrice": 254.14,
        "totalPrice": 762.42
      },
      {
        "id": "item_7603",
        "name": "Product Gamma 88",
        "quantity": 2,
        "unitPrice": 255.5,
        "totalPrice": 511
      },
      {
        "id": "item_8856",
        "name": "Product Delta 83",
        "quantity": 1,
        "unitPrice": 234.61,
        "totalPrice": 234.61
      }
    ],
    "totalAmount": 2228.57,
    "status": "pending",
    "createdAt": "2025-10-20T03:58:46.827Z"
  },
  {
    "id": "ord_0102",
    "customer": {
      "id": "cust_021",
      "name": "Robert Smith",
      "email": "robert.smith@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_021"
    },
    "items": [
      {
        "id": "item_5556",
        "name": "Product Alpha 16",
        "quantity": 2,
        "unitPrice": 458.2,
        "totalPrice": 916.4
      },
      {
        "id": "item_6673",
        "name": "Product Delta 76",
        "quantity": 1,
        "unitPrice": 54.53,
        "totalPrice": 54.53
      }
    ],
    "totalAmount": 970.93,
    "status": "completed",
    "createdAt": "2025-10-20T00:10:52.536Z"
  },
  {
    "id": "ord_0089",
    "customer": {
      "id": "cust_018",
      "name": "Charles Williams",
      "email": "charles.williams@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_018"
    },
    "items": [
      {
        "id": "item_5608",
        "name": "Product Sigma 79",
        "quantity": 1,
        "unitPrice": 78.91,
        "totalPrice": 78.91
      },
      {
        "id": "item_8735",
        "name": "Product Beta 58",
        "quantity": 1,
        "unitPrice": 445.11,
        "totalPrice": 445.11
      },
      {
        "id": "item_2975",
        "name": "Product Alpha 36",
        "quantity": 3,
        "unitPrice": 324.15,
        "totalPrice": 972.45
      },
      {
        "id": "item_6310",
        "name": "Product Beta 58",
        "quantity": 3,
        "unitPrice": 166.24,
        "totalPrice": 498.72
      }
    ],
    "totalAmount": 1995.19,
    "status": "completed",
    "createdAt": "2025-10-19T09:01:34.410Z"
  },
  {
    "id": "ord_0033",
    "customer": {
      "id": "cust_028",
      "name": "Patricia Brown",
      "email": "patricia.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_028"
    },
    "items": [
      {
        "id": "item_8963",
        "name": "Product Delta 93",
        "quantity": 2,
        "unitPrice": 17.99,
        "totalPrice": 35.98
      }
    ],
    "totalAmount": 35.98,
    "status": "failed",
    "createdAt": "2025-10-10T03:29:32.572Z"
  },
  {
    "id": "ord_0062",
    "customer": {
      "id": "cust_007",
      "name": "Susan Johnson",
      "email": "susan.johnson@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_007"
    },
    "items": [
      {
        "id": "item_5087",
        "name": "Product Beta 19",
        "quantity": 2,
        "unitPrice": 57.77,
        "totalPrice": 115.54
      },
      {
        "id": "item_5981",
        "name": "Product Alpha 19",
        "quantity": 1,
        "unitPrice": 386.54,
        "totalPrice": 386.54
      }
    ],
    "totalAmount": 502.08,
    "status": "completed",
    "createdAt": "2025-10-06T06:55:31.014Z"
  },
  {
    "id": "ord_0143",
    "customer": {
      "id": "cust_019",
      "name": "John Davis",
      "email": "john.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_019"
    },
    "items": [
      {
        "id": "item_1596",
        "name": "Product Alpha 21",
        "quantity": 1,
        "unitPrice": 461.91,
        "totalPrice": 461.91
      },
      {
        "id": "item_1081",
        "name": "Product Sigma 100",
        "quantity": 3,
        "unitPrice": 280.93,
        "totalPrice": 842.79
      }
    ],
    "totalAmount": 1304.7,
    "status": "completed",
    "createdAt": "2025-10-04T23:41:01.939Z"
  },
  {
    "id": "ord_0060",
    "customer": {
      "id": "cust_015",
      "name": "Thomas Miller",
      "email": "thomas.miller@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_015"
    },
    "items": [
      {
        "id": "item_1480",
        "name": "Product Gamma 49",
        "quantity": 1,
        "unitPrice": 183.98,
        "totalPrice": 183.98
      },
      {
        "id": "item_1880",
        "name": "Product Sigma 84",
        "quantity": 2,
        "unitPrice": 34.93,
        "totalPrice": 69.86
      },
      {
        "id": "item_5524",
        "name": "Product Gamma 53",
        "quantity": 3,
        "unitPrice": 195.57,
        "totalPrice": 586.71
      },
      {
        "id": "item_2186",
        "name": "Product Alpha 18",
        "quantity": 3,
        "unitPrice": 212.44,
        "totalPrice": 637.32
      }
    ],
    "totalAmount": 1477.87,
    "status": "failed",
    "createdAt": "2025-09-29T12:02:45.601Z"
  },
  {
    "id": "ord_0032",
    "customer": {
      "id": "cust_030",
      "name": "Robert Davis",
      "email": "robert.davis@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_030"
    },
    "items": [
      {
        "id": "item_5942",
        "name": "Product Sigma 42",
        "quantity": 2,
        "unitPrice": 114.79,
        "totalPrice": 229.58
      },
      {
        "id": "item_9778",
        "name": "Product Alpha 99",
        "quantity": 3,
        "unitPrice": 13.59,
        "totalPrice": 40.77
      }
    ],
    "totalAmount": 270.35,
    "status": "completed",
    "createdAt": "2025-09-28T11:28:24.765Z"
  },
  {
    "id": "ord_0135",
    "customer": {
      "id": "cust_026",
      "name": "Michael Martinez",
      "email": "michael.martinez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_026"
    },
    "items": [
      {
        "id": "item_1633",
        "name": "Product Sigma 75",
        "quantity": 2,
        "unitPrice": 349.1,
        "totalPrice": 698.2
      }
    ],
    "totalAmount": 698.2,
    "status": "pending",
    "createdAt": "2025-09-20T20:41:22.095Z"
  },
  {
    "id": "ord_0075",
    "customer": {
      "id": "cust_010",
      "name": "Robert Rodriguez",
      "email": "robert.rodriguez@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_010"
    },
    "items": [
      {
        "id": "item_4033",
        "name": "Product Delta 52",
        "quantity": 2,
        "unitPrice": 22.82,
        "totalPrice": 45.64
      },
      {
        "id": "item_5249",
        "name": "Product Gamma 75",
        "quantity": 2,
        "unitPrice": 360.14,
        "totalPrice": 720.28
      }
    ],
    "totalAmount": 765.92,
    "status": "completed",
    "createdAt": "2025-09-20T02:41:36.579Z"
  },
  {
    "id": "ord_0088",
    "customer": {
      "id": "cust_045",
      "name": "Richard Brown",
      "email": "richard.brown@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?u=cust_045"
    },
    "items": [
      {
        "id": "item_8950",
        "name": "Product Gamma 26",
        "quantity": 2,
        "unitPrice": 438.08,
        "totalPrice": 876.16
      }
    ],
    "totalAmount": 876.16,
    "status": "completed",
    "createdAt": "2025-09-17T07:31:48.837Z"
  }
];

export const mockActivities: ActivityEvent[] = [
  {
    "id": "act_81584",
    "type": "order_completed",
    "message": "Order ord_0117 was completed by David Garcia",
    "timestamp": "2026-09-13T00:48:24.876Z",
    "avatarUrl": "https://i.pravatar.cc/150?u=cust_042",
    "relatedEntityId": "ord_0117"
  },
  {
    "id": "act_23905",
    "type": "order_placed",
    "message": "Order ord_0078 was processing by Barbara Williams",
    "timestamp": "2026-09-11T14:50:48.647Z",
    "avatarUrl": "https://i.pravatar.cc/150?u=cust_038",
    "relatedEntityId": "ord_0078"
  },
  {
    "id": "act_17310",
    "type": "order_placed",
    "message": "Order ord_0021 was processing by Michael Rodriguez",
    "timestamp": "2026-09-09T10:50:27.256Z",
    "avatarUrl": "https://i.pravatar.cc/150?u=cust_048",
    "relatedEntityId": "ord_0021"
  }
];

export const mockAnalytics: AnalyticsSummary = {
  totalRevenue: {
    "value": 24592.50,
    "previousValue": 13147.40,
    "trendPercentage": 87.1,
    "isPositive": true
  },
  totalOrders: {
    "value": 150,
    "previousValue": 110,
    "trendPercentage": 36.4,
    "isPositive": true
  },
  activeCustomers: {
  "value": 50,
  "previousValue": 45,
  "trendPercentage": 11.1,
  "isPositive": true
},
  conversionRate: {
  "value": 4.2,
  "previousValue": 3.8,
  "trendPercentage": 10.5,
  "isPositive": true
},
  revenueTimeseries: [
  {
    "date": "2025-09",
    "revenue": 4088.5,
    "orders": 5
  },
  {
    "date": "2025-10",
    "revenue": 7849.56,
    "orders": 7
  },
  {
    "date": "2025-11",
    "revenue": 15934.58,
    "orders": 10
  },
  {
    "date": "2025-12",
    "revenue": 19731.7,
    "orders": 15
  },
  {
    "date": "2026-01",
    "revenue": 19748.37,
    "orders": 15
  },
  {
    "date": "2026-02",
    "revenue": 16197.8,
    "orders": 16
  },
  {
    "date": "2026-03",
    "revenue": 9756.14,
    "orders": 10
  },
  {
    "date": "2026-04",
    "revenue": 23821.71,
    "orders": 17
  },
  {
    "date": "2026-05",
    "revenue": 10078.81,
    "orders": 10
  },
  {
    "date": "2026-06",
    "revenue": 16767.78,
    "orders": 13
  },
  {
    "date": "2026-07",
    "revenue": 13147.4,
    "orders": 11
  },
  {
    "date": "2026-08",
    "revenue": 19648.14,
    "orders": 15
  }
]
};
