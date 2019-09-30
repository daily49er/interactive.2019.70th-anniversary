// Requirements
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose') // helps connect to MongoDB
const path = require('path');

require('dotenv').config();

// How to create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware that will allow us to parse JSON
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndes: true});

const connection = mongoose.connection;
connection.once('open', () => (
    console.log("MongoDB database connection established successfully!")
));

// Require and use files
const staffRouter = require('./routes/staff');
const timelineRouter = require('./routes/timeline')

app.use('/staff', staffRouter);
app.use('/timeline', timelineRouter);

// serve build folder
if(process.env.NODE_ENV === 'production'){
	app.use(express.static( 'build' ));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build', 'index.html')); // relative path
	});
}

// Starts the server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});