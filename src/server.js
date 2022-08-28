const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require ('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () =>  console.log('Server is Running'));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    name: process.env.name,
    user: process.env.user,
    pass: process.env.pass,
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error); 
  } else {
    console.log("Ready to send email");
  }
})