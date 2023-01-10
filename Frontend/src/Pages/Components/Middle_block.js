import React, { useState, useEffect } from 'react';
import'./Middle_block.css';
import axios from "axios";
import { _loading } from 'popups';

function Middle_block(props) {

  const [passNo, setpassNo] = useState();
  const [lastName, setlastName] = useState();
  const [flight_from, setflight_from] = useState();
  const [flight_to, setflight_to] = useState();
  const [SearchDataBackend, setSearchDataBackend] = useState([]);
  const [DataChecking, setDataChecking] = useState(undefined);
  const [FSearchDataBackend, setFSearchDataBackend] = useState([]);
  const [FDataChecking, setFDataChecking] = useState(undefined);
  

  useEffect(async() => {
    await OnSubmit1();
  }, []);
  const OnSubmit1 = async  () => {
    
      console.log( passNo, lastName);
        const res = await fetch(`http://localhost:3001/getRecord/${passNo}/${lastName}`);
        const passengerData = await res.json();
        if(passengerData.data[0] !== undefined){
        setSearchDataBackend(passengerData.data[0]);
        setDataChecking(SearchDataBackend.fullName);
        }
        else
        {
          setDataChecking("NODATA");
        }
        // .then(() => {
      //   alert("Success");
      // });  
  }

  const OnSubmit2 = async () => {

    console.log( flight_from, flight_to);
        const res = await fetch(`http://localhost:3001/getFlightData/${flight_from}/${flight_to}`);
        const FlightData = await res.json();
        if(FlightData.data[0] !== undefined){
        setFSearchDataBackend(FlightData.data[0]);
        setFDataChecking(FSearchDataBackend.FlightNo);
        }
        else
        {
          setFDataChecking("NODATA");
        }
        // .then(() => {
      //   alert("Success");
      // }); 
  
  }



  if(props.name === "Flight_Status")
  {
    return <div>
        <h3>Search for DHA Suffa Airways Flight Status</h3>
        <div className='F_status'>
        <form>
          <div className='Input_field'>
            <input type="text" name="from"  id="from"
              onChange={(e) => setflight_from(e.target.value)}
            placeholder="From"></input>
            <input type="text" name="to"  id="to"
              onChange={(e) => setflight_to(e.target.value)}
            placeholder="To"></input>
            </div>
            <div className='submit_button'>
              <input type="button" value="Search Flight"
                onClick={OnSubmit2}
              id="submit"></input>
            </div>
          </form>
          <div className='DataRetrived'>
          </div>
          <GettingFlightData data={{ FDataChecking: FDataChecking, FlightNo: FSearchDataBackend.FlightNo, FDA: FSearchDataBackend.FDA, FlightFrom: FSearchDataBackend.Flight_From, FlightTo: FSearchDataBackend.Flight_to, FlightStatus: FSearchDataBackend.Flight_status}}
                          ></GettingFlightData>
        </div>
    </div>;
  }
  else
  {
    return <div>
        <h3>Check Your Ticket</h3>
        <div className='C_in'>
        <form>
        <div className='Input_field'>
            <input type="text" name="passNo"  id="passNo"
              onChange={(e) => setpassNo(e.target.value)}
            placeholder="Enter Passport No"></input>
            <input type="text" name="lname"  id="lname" 
              onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"></input>
          </div>
          <div className='submit_button'>
            <input type="button" 
              onClick={OnSubmit1}            
            value="Check-in" id="submit"></input>
          </div>
          </form>

          <div className='DataRetrived'>
          </div>
          <GettingData data={{ DataChecking: DataChecking, fullName: SearchDataBackend.fullName, Age: SearchDataBackend.Age, TicketID: SearchDataBackend.TicketID, passNo: SearchDataBackend.Passport_No, totalFare: SearchDataBackend.Total_Fare}}
                          ></GettingData>

        </div>
    </div>;
  }
}


function GettingFlightData(props) {

  if(props.data.FDataChecking === 'NODATA')
  {
  return (
    <div className='Pass_Data_Negative'>
      <h1> NO DATA FOUND</h1>
    </div>
  )
  }
  else if(props.data.FDataChecking === undefined)
  {
    return (
      <div></div>
    )
  }
  else{
    return (
      <div className='Pass_Data'>
      <div className='StartingPoint'>Flight No        : <h3>{props.data.FlightNo}</h3></div>
      <div>From  : <h3>{props.data.FlightFrom}</h3></div>
      <div>To : <h3>{props.data.FlightTo}</h3></div>
      <div className='SecondPointF'>Departure / Arrival Date         : <h3>{props.data.FDA}</h3></div>
      <div>Flight Status  : <h3>{props.data.FlightStatus}</h3></div>

      </div>
    )

  }
}


function GettingData(props) {

  if(props.data.DataChecking === 'NODATA')
  {
  return (
    <div className='Pass_Data_Negative'>
      <h1> NO DATA FOUND</h1>
    </div>
  )
  }
  else if(props.data.DataChecking === undefined)
  {
    return (
      <div></div>
    )
  }
  else{
    return (
      <div className='Pass_Data'>
      <div className='StartingPoint'>Name        : <h3>{props.data.fullName}</h3></div>
      <div>Ticket ID   : <h3>{props.data.TicketID}</h3></div>
      <div>Passport No : <h3>{props.data.passNo}</h3></div>
      <div className='SecondPoint'>Age         : <h3>{props.data.Age}</h3></div>
      <div>Total Fare  : <h3>{props.data.totalFare}</h3></div>

      </div>
    )

  }
}

export default Middle_block;
