import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mail from "../assets/assets/email.svg"
import tel from "../assets/assets/phone.svg"
import konum from "../assets/assets/location.svg"
import "./Cards.scss"


const Cards = () => {
  const [data, setData] = useState([])
  const url = "https://randomuser.me/api/"

  const getData = async () => {
    const details = await axios.get(url)
    setData(details.data.results)
  }

  useEffect(() => { getData() }, [])

  let registeredDate = ''; // Varsayılan değer






  return (
    <div>
      {data.map((a) => {
        return (
          <div className='container' key={a.id.value}>

            <div>
              <img className="picture" src={a.picture.large} alt="" />
            </div>

            <div className='name'><h2>{a.name.title} {a.name.first} {a.name.last}</h2></div>
            <div className="numerish-inf">
              <span>Age: {a.dob.age}</span>
              <p>Register Date: {a.registered.date} </p>
            </div>

            <div className="mail">
              <img className="icon" src={mail} alt="" />
              <p>{a.email} </p>
            </div>
            <div className="phone">
              <img className="icon" src={tel} alt="" />
              <p>{a.cell} </p>
            </div>
            <div className="location">
              <img className="icon" src={konum} alt="" />
              <p>{a.location.city} - {a.location.country} </p>
            </div>

            <button className='btn' onClick={() => { getData() }}>Click Me To Change USers</button>
          </div>
        )
      })



      }


    </div>




  )
}

export default Cards