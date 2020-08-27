create table stalls (
	id integer NOT null auto_increment, eventid integer NOT null,
    name varchar(255) NOT null, price integer NOT null, 
    reserved tinyint(1) NOT null, bookingCompanyLogo blob,
    image blob, primary key (id), 
    foreign key (eventid) references events(eventid)
    on delete cascade
);

describe stalls;

INSERT INTO stalls (
	id, eventid, name, price, 
	reserved, bookingCompanyLogo, image
) values 
(1, 1, "API References (Paperback, Kindle, etc)", 25.99, false, null, load_file('E:/react_logo.png')),
(2, 1, "Best YouTube Channels to Learn React", 45.99, false, null, load_file('E:/youtube_logo.png')), 
(3, 1, "Medium: The Savvy WayFarer", 15.99, false, null, load_file('E:/medium_logo.png')), 
(4, 2, "Why Express is The Best Nodejs Framework", 79.99, false, null, load_file('E:/express_js_logo.jpg')), 
(5, 3, "Sailsjs, Koajs, Expressjs Node Frameworks Comparison", 129.99,  false, null, load_file('E:/nodejs_logo.jpg')), 
(6, 4, "ECMA Script: Brief History", 9.99, false, null, load_file('E:/ecma_script_logo')), 
(7, 5, "What is React Router?", 24.99, false, null, load_file('E:/react_logo.png')), 
(8, 6, "Best Full Stack Options for Developers", 49.99, false, null, load_file('E:/nodejs_logo.jpg')),
(9, 7, "Why React is Awesome", 199.99, false, null, load_file('E:/ecma_script_logo.png'));

select * from stalls;

select * from stalls where eventid = 2;

-- update stalls set reserved = true where id = 1;