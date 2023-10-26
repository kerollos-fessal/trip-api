

// using express
let data = {
    "hotels": [
      {
        "country": "United States",
        "hotels": [
          {
            "name": "Hotel A",
            "price": "$150",
            "rating": 4.5,
            "images": ["image1.jpg", "image2.jpg"]
          },
          {
            "name": "Hotel B",
            "price": "$200",
            "rating": 4.2,
            "images": ["image3.jpg", "image4.jpg"]
          }
        ]
      },
      {
        "country": "France",
        "hotels": [
          {
            "name": "Hotel X",
            "price": "€180",
            "rating": 4.8,
            "images": ["image5.jpg", "image6.jpg"]
          },
          {
            "name": "Hotel Y",
            "price": "€220",
            "rating": 4.6,
            "images": ["image7.jpg", "image8.jpg"]
          }
        ]
      },
      {
        "country": "Japan",
        "hotels": [
          {
            "name": "Hotel P",
            "price": "¥15,000",
            "rating": 4.7,
            "images": ["image9.jpg", "image10.jpg"]
          },
          {
            "name": "Hotel Q",
            "price": "¥20,000",
            "rating": 4.4,
            "images": ["image11.jpg", "image12.jpg"]
          }
        ]
      },
      {
        "country": "Australia",
        "hotels": [
          {
            "name": "Hotel M",
            "price": "$180",
            "rating": 4.3,
            "images": ["image13.jpg", "image14.jpg"]
          },
          {
            "name": "Hotel N",
            "price": "$220",
            "rating": 4.1,
            "images": ["image15.jpg", "image16.jpg"]
          }
        ]
      },
      {
        "country": "Brazil",
        "hotels": [
          {
            "name": "Hotel R",
            "price": "R$300",
            "rating": 4.6,
            "images": ["image17.jpg", "image18.jpg"]
          },
          {
            "name": "Hotel S",
            "price": "R$250",
            "rating": 4.3,
            "images": ["image19.jpg", "image20.jpg"]
          }
        ]
      }
    ],
    "things_to_do": [
      {
        "country": "United States",
        "hobbies": ["Hiking", "Sightseeing", "Shopping"]
      },
      {
        "country": "France",
        "hobbies": ["Wine tasting", "Visiting museums", "Exploring castles"]
      },
      {
        "country": "Japan",
        "hobbies": ["Trying traditional foods", "Visiting temples", "Experiencing tea ceremonies"]
      },
      {
        "country": "Australia",
        "hobbies": ["Surfing", "Snorkeling at the Great Barrier Reef", "Exploring the Outback"]
      },
      {
        "country": "Brazil",
        "hobbies": ["Carnival celebrations", "Exploring the Amazon rainforest", "Samba dancing"]
      }
    ],
    "restaurants": [
      {
        "country": "United States",
        "restaurants": [
          {
            "name": "Restaurant 1",
            "location": "New York",
            "rating": 4.7
          },
          {
            "name": "Restaurant 2",
            "location": "Los Angeles",
            "rating": 4.5
          }
        ]
      },
      {
        "country": "France",
        "restaurants": [
          {
            "name": "Restaurant 3",
            "location": "Paris",
            "rating": 4.8
          },
          {
            "name": "Restaurant 4",
            "location": "Nice",
            "rating": 4.6
          }
        ]
      },
      {
        "country": "Japan",
        "restaurants": [
          {
            "name": "Restaurant 5",
            "location": "Tokyo",
            "rating": 4.6
          },
          {
            "name": "Restaurant 6",
            "location": "Osaka",
            "rating": 4.4
          }
        ]
      },
      {
        "country": "Egypt",
        "restaurants": [
          {
            "name": "Restaurant 7",
            "location": "alex",
            "rating": 4.6
          },
          {
            "name": "Restaurant 8",
            "location": "cairo",
            "rating": 4.4
          }
        ]
      },
      {
        "country": "Dubai",
        "restaurants": [
          {
            "name": "Restaurant 9",
            "location": "nables",
            "rating": 4.6
          },
          {
            "name": "Restaurant 10",
            "location": "doha",
            "rating": 4.4
          }
        ]
      }
    ]
    }
import express from "express";

const app = express();

 //get all data
app.get("/home", (req, res) => {
    console.log(data)
    res.json({data});
});

app.listen(3000);
module.exports = app

