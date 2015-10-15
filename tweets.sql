create database tweeter;

use tweeter;

create table if not exists tweets (
	body varchar,
	user varchar,
	id int auto_increment,
	primary key(id)
);

insert into tweets(user, body)
	values ('juan', 'just ate pixxa #pizza #yum #gluten');
insert into tweets(user, body)
	values ('memexia', 'ayo word man pizza dashet @juan');
insert into tweets(user, body)
	values ('andrewNinsaf', 'iz tha man against me all tha time were i get medicine #sick');
insert into tweets(user, body)
	values ('Presidentobama', 'hey putin gimme monies no syria 4 u #diplomacy');
