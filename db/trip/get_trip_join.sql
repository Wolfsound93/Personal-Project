select * from users

inner join trip
on users.user_id = trip.user_id

inner join stops
on trip.trip_id = stops.trip_id

where users.user_id = $1;

