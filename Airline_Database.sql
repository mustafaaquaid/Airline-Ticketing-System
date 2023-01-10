create database airline_system;
use airline_system;
# FLIGHTS TABLE WILL BE HANDLED BY ADMIN
CREATE TABLE flight(
      Flight_ID varchar(10) primary key, 
      Flight_departure date,
      Flight_From varchar(50) not null,
      Flight_to varchar(50) not null,
      Flight_Arrival date,
      Flight_status varchar(255) not null DEFAULT "SCHEDULED" #ARRIVED & #IN-FLIGHT Triggers
);

create table passengers(
	Passport_No int(11) primary key,
	First_Name varchar(100),
	Last_Name varchar(100),
    Age int(3),
    Flight_ID varchar(10),
    foreign key (Flight_ID) references flight(Flight_id)
);

CREATE TABLE bookings(
      Booking_ID int(11) primary key auto_increment,	#auto_increment
      Passport_No int(11) unique, #foreign key
	  foreign key (Passport_No) references passengers(Passport_No)
      ON UPDATE cascade 
      ON DELETE cascade,
      Total_Fare int(10) not null,
      Seat_Type varchar(100) not null,
	  Flight_ID varchar(10),
	  foreign key (Flight_ID) references flight(Flight_ID)

);

alter table bookings auto_increment = 10;

# QUERY FOR ADMIN TO INSERT A NEW FLIGHT IN TABLES
insert into flight (Flight_id , Flight_departure,  Flight_From       , Flight_to           , Flight_Arrival) 
			values ("KHISL103", '2022-02-15'    , "Karachi", "Islambad", '2022-02-16');

        
#View Table of Passenger Details
CREATE VIEW PassengerDetails AS
 select concat(First_Name," ", Last_Name) AS fullName, Age, Booking_ID AS TicketID, Total_Fare , bookings.Passport_No, Flight_status, Seat_Type, bookings.Flight_ID from bookings
	inner join passengers
    on bookings.Passport_No = passengers.Passport_No
    inner join flight
    on bookings.Flight_ID = flight.Flight_ID;
    
select * from PassengerDetails;
select * from flight;


#
delimiter //
CREATE TRIGGER upd_check BEFORE UPDATE ON flight
       FOR EACH ROW
       BEGIN
           IF old.Flight_Departure = curdate() THEN
               SET NEW.Flight_Status="IN-FLIGHT";
           ELSEIF old.Flight_Arrival=curdate() THEN
               SET NEW.Flight_Status="ARRIVED";
           END IF;
       END;//
delimiter ;
update flight set Flight_Status='SCHEDULED' where Flight_ID="KHISL103";