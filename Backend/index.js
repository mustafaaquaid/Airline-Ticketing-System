const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "yourDBPasswordHere",
  database: "airline_system",
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

//FLIGHT ID FOR FLIGHTS TO SYDNEY FROM KARACHI -----> KHSYD101
//insert into passengers(Passport_No, First_Name, Last_Name, Age, Flight_ID) values( , "", "", , "");
//insert into bookings(Passport_No, Total_Fare, Seat_type, Flight_ID) values( , , , "", "");


app.post("/api", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const passportNo = req.body.passportNo;
  const age = req.body.age;
  const f_Fare = req.body.f_Fare;
  const f_From = req.body.f_From;
  const f_To = req.body.f_To;
  const f_Class = req.body.f_Class
  ;

  if(f_To == "Sydney")
  {

    const sqlInsert2 =
    "insert into bookings(Passport_No, Total_Fare, Seat_type, Flight_ID) values(?,?,?,?);";
    db.query(
    sqlInsert2,
    [passportNo, f_Fare, f_Class, "KHSYD101"],
    (err, result) => {
      console.log("sad " + err);
      console.log(result);
    }
    

  );
    const sqlInsert =
      "insert into passengers(Passport_No, First_Name, Last_Name, Age, Flight_ID) values(?,?,?,?,?);";
    db.query(
      sqlInsert,
      [passportNo, fName, lName, age, "KHSYD101"],
      (err, result) => {
        console.log("sad " + err);
        console.log(result);
      }
    );
  }
  if(f_To == "NewYork")
  {

    const sqlInsert2 =
    "insert into bookings(Passport_No, Total_Fare, Seat_type, Flight_ID) values(?,?,?,?);";
    db.query(
    sqlInsert2,
    [passportNo, f_Fare, f_Class, "KHNY102"],
    (err, result) => {
      console.log("sad " + err);
      console.log(result);
    }
    

  );
    const sqlInsert =
      "insert into passengers(Passport_No, First_Name, Last_Name, Age, Flight_ID) values(?,?,?,?,?);";
    db.query(
      sqlInsert,
      [passportNo, fName, lName, age, "KHNY102"],
      (err, result) => {
        console.log("sad " + err);
        console.log(result);
      }
    );
  }

});

//for select statements

app.get("/getRecord/:passNo/:lastName", (req, res) => {
    const sqlInsert1 = `select concat(First_Name, " " ,Last_Name) AS fullName, Age, Booking_ID AS TicketID, bookings.Passport_No, Total_Fare from bookings inner join passengers on bookings.Passport_No = passengers.Passport_No inner join flight on bookings.Flight_ID = flight.Flight_ID where bookings.Passport_No=${req.params.passNo} and Last_Name="${req.params.lastName}";`;
   console.log(sqlInsert1);
   db.query(sqlInsert1, (err, result) => {
     if (err) {
       console.log(err);
     } else {
       res.status(200).json({ data: result, error: false });
  }
   });
 });


 app.get("/getFlightData/:From/:To", (req, res) => {
  const sqlInsert4 = `select Flight_ID AS FlightNo,  concat(Flight_departure, " / ", Flight_Arrival) AS FDA, Flight_From, Flight_to, Flight_status from flight where Flight_From=lower("${req.params.From}") and Flight_to=lower("${req.params.To}");`;
 console.log(sqlInsert4);
 db.query(sqlInsert4, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.status(200).json({ data: result, error: false });
}
 });
});




app.listen(3001, () => {
  console.log("listening on port 3001");
});
