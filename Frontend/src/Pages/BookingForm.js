import React, { useState, useEffect } from 'react'
import './BookingForm.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useParams } from 'react-router-dom';
import axios from "axios";

function BookingForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [passportNo, setPassportNo] = useState();
  const [age, setAge] = useState();
  const [f_Fare, setf_Fare] = useState();
  const [f_From, setf_From] = useState();
  const [f_To, setf_To] = useState();
  const [f_Class, setf_Class] = useState();

  
  const ChangeName = () => {
    setf_Fare(prams.fare);
    setf_From(prams.from);
    setf_To(prams.to);
    setf_Class(prams.class);
  }


  
  // const [bookNow, setBookNow] = useState("");

const OnSubmit = () => {
  setf_Fare(prams.fare);
  setf_From(prams.from);
  setf_To(prams.to);
  setf_Class(prams.class);
    console.log(fName, lName, passportNo,age,f_Fare, f_From, f_To, f_Class
      );
    axios
    .post("http://localhost:3001/api", {
      fName: fName,
      lName: lName,
      passportNo: passportNo,
      age: age,
      f_Fare: f_Fare,
      f_From: f_From,
      f_To: f_To,
      f_Class: f_Class,
    })
    .then(() => {
      alert("Success");
    });

}


  const prams = useParams();
  return (
    <div className='Formpage_body'>
      <Header />
      <div className='ticket_booking'>
        <div className='Flight_details'>
          <div className='fromTo'>
            <p><span>From: </span><i>{prams.from}</i></p>
            <p><span>To:   </span><i>{prams.to}</i></p>
          </div>
          <div className='rem_details'>
            <p><span>Class: </span><i>{prams.class}</i></p>
            <p><span>Fare:  </span><i>{prams.fare}</i></p>
          </div>
        </div>
        <form>
          <input type="text" name="fName"
            onChange={(e) => setFName(e.target.value)}

            id="fName" placeholder="First Name"></input>
          <input type="text" name="lName" id="lName"
                onClick={ChangeName}
                onChange={(e) => setLName(e.target.value)}
          placeholder="Last Name"></input> <br></br>

          <input type="number"
                onChange={(e) => setPassportNo(e.target.value)}
          
          name="passportNo" id="passportNo" placeholder="passportNo"></input>
          
          <input type="number" 
                onChange={(e) => setAge(e.target.value)}
          
          name="Age" id="Age" placeholder="Age"></input> <br></br>
          <input type="button" 
              onClick={OnSubmit}
         
         value="Book Now" id="bookIt"></input>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default BookingForm;