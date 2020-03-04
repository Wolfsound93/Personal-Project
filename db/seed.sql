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
