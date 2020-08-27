const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const eventsRoute = require('./routes/events.routes');
const authenticateRoute = require('./routes/users.route');
const stallsRoute = require('./routes/stalls.route');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'));

app.get('/', (req, res) => {
   console.log('hey');
})

app.use('/api/v1/authenticate', authenticateRoute);
app.use('/api/v1/events', eventsRoute);
app.use('/api/v1/stalls', stallsRoute);

const port = process.env.PORT || 4005;

app.listen(port, (err)=>{
   if(err) console.log('Error Starting Server')
   console.log(`Expo Server up at port ${port}`)
});