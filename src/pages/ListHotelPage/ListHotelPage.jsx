import React, { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';


 function ListHotelPage() {
    let aa = [
        {
            name: 'Sam',
            email: 'somewhere@gmail.com'
        },

        {
            name: 'Ash',
            email: 'something@gmail.com'
        }
    ]
    const [hotels, setHotels] = useState(null); 
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&checkin_date=2023-05-27&checkout_date=2023-05-28&units=metric&order_by=popularity&adults_number=2&filter_by_currency=AED&locale=en-gb&dest_id=-553173&dest_type=city&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&children_number=2&page_number=0&include_adjacency=true';
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '87e2cbcb43mshd23e9fabe71900dp1a53f1jsn8da71d5f8299',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    const getHotelData = () => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => {setHotels(json.result)})
        .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        getHotelData()
    }, [])
      
     console.log (hotels) 


  return (   
   <>   
        <h1>LIST HOTELS</h1>      
        {
            aa.map((hotel, index) => {
                return (
                    <p >
                       dfgds
                    </p>
                );
            })            
        }
        {
           hotels.map((hotel, index) => {
            return (
                <p >
                   {hotel.hotel_name}
                </p>
            );
        })      
        }
   </>
  )
}

export default ListHotelPage