create table events (
	eventid integer auto_increment not null,
    name varchar(255) not null,
    location varchar(255) not null,
    date date,
    primary key (eventid)
);

describe events;

insert into events (eventid, name, location, date) values 
(1, "State of React 2020", "Menlo Park, California, United States", "2020-08-27"),
(2, "Express: Full Stack Applications", "Mountain View, California, United States", "2020-08-28"),
(3, "Nodejs in Action", "South Carolina, United States", "2020-08-27"),
(4, "ECMA SCript: Beginners", "Menlo Park, California, United States", "2020-08-27"),
(5, "React Router for Beginners", "Menlo Park, California, United States", "2020-08-28"),
(6, "MEVN vs MERN vs MESN (Svelte): Choosing the best Stack for You", "Mountain View, California, United States", "2020-08-27"),
(7, "Outro: State of React 2020", "Menlo Park, California, United States", "2020-08-29");

select * from events;

drop table users_image;