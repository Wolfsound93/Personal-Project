-- trip_id
-- user_id
-- milage
-- fuel_total
-- origin
-- destination

INSERT INTO users 
(user_email, first_name, hash)
VALUES
('testing', 'testing', 'test')
RETURNING*

delete from users
where user_id > 0 

select * from fuel_stops;


//////////////////
||DUMMY DATA FOR TRIP TABLE||

INSERT INTO trip 
(user_id, milage, fuel_total, origin, destination)
values
(19, 234, 50.20, 'NY', 'TX')
(20, 234, 50.79, 'CA', 'RI')
(21, 234, 80.20, 'RI', 'PA')
(22, 234, 62.40, 'FL', 'TX')
(23, 234, 150.22, 'NC', 'MA')
(24, 234, 20.20, 'NY', 'TX')
(25, 234, 35.20, 'MA', 'CT');
////////////////////////
SELECT * from trip;
WHERE user_id = $1
////////////////////////
create table fuel_total(fuel_trip_id serial primary key,
fuel_total numeric);
///////////////////////
create table milage (milage_id serial primary key,
milage numeric);
///////////////////////
alter table fuel_total
add column trip_id int REFERENCES trip(trip_id)

update table fuel_total
set trip_id = 1;

select * from trip
inner join fuel_total
on trip.trip_id = fuel_total.trip_id
/////////////////////////
create table receipt (receipt_id serial primary key,
milage text);
////////////////////////
alter table receipt
add column trip_id int REFERENCES trip(trip_id);
///////////////////////
alter table trip
add column 
fuel_stops_id int REFERENCES fuel_stops(fuel_stops_id);
////////////////////////
CREATE TABLE fuel_stops(fuel_stops_id serial PRIMARY KEY,
  stop_location character varying
);
////////////////////////////BATMAN
create table users (user_id serial primary key,
user_email character varying not null,
first_name character varying not null,
hash text not null);

insert into users
(user_email, first_name, hash)
values
('admin@dev.com', 'admin', 'admin'),
('test@dev.com', 'test', 'test');
////////////////////////////
create table trip (trip_id serial primary key,
origin character varying,
destination character varying,
mileage numeric,
user_id int references trip(trip_id));

INSERT INTO trip 
(trip_id, origin, destination, mileage, user_id)
values
(1, 'Dallas', 'New York', 500, 1),
(2, 'FL', 'CA', 400, 1),
(3, 'Rhode Island', 'Texas', 800, 1);
//////////////////////////////
create table stops (stops_id serial primary key,
fuel_stops character varying,
total_spent integer,
receipt text,
trip_id int references trip(trip_id));

INSERT INTO stops 
(stops_id, fuel_stops, total_spent, receipt, trip_id)
values
(1, 'Shell', 22.29, 'https://image.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg', 1),
(2, 'Cumberland Farms', 45.57, 'https://image.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg', 2),
(3, '7 Eleven', 150, 'https://image.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg', 3);
//////////////////////////////
select * from users
inner join trip
on users.user_id = trip.user_id
inner join stops
on trip.trip_id = stops.trip_id
where users.user_id = $1;

select * from trip
inner join stops
on trip.trip_id = stops.trip_id
where trip.trip_id = $1;
///////////////////////////
alter table trip
add column 
fuel_expenses numeric;



ALTER TABLE trip
ALTER COLUMN fuel_expenses TYPE int;