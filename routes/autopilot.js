'use strict';
const twilio = require('twilio');
const express = require('express');

/* eslint-disable new-cap */
const router = express.Router();

var appointments =[ 
  {"id":1,"date_time":"2021-03-09 15:00"},
  {"id":2,"date_time":"2021-03-09 16:00"},
  {"id":3,"date_time":"2021-03-09 17:00"},
  {"id":4,"date_time":"2021-03-09 18:00"},
  {"id":5,"date_time":"2021-03-09 19:00"}
]

router.post('/create_booking_appointment', function(req, res, next) {
  console.log(req)
  var booking_date = JSON.parse(req.body.Memory).twilio.collected_data.collect_booking.answers.booking_date.answer
  var booking_time = JSON.parse(req.body.Memory).twilio.collected_data.collect_booking.answers.booking_time.answer

  console.log(booking_date)
  console.log(booking_time)
  
  var new_booking_date_time = booking_date+" "+booking_time;

  if(isAvailable(new_booking_date_time)){

    res.send({actions:sendSuccessMsg()})
    var new_appointment_id = appointments.length+1
    appointments.push({"id":new_appointment_id,"date_time":new_booking_date_time})
    console.log(appointments)

  }
  else{
    res.send({actions:sendFailureMsg()})
    console.log(appointments)

  }
  
});


function isAvailable(new_booking_date_time){

  var rs =  appointments.find(element => element.date_time  === new_booking_date_time);
  console.log(rs)
  return rs ? false : true
}


function sendSuccessMsg() {
  const message = `your appointment booking is successfull`;
  var actions = [
      {
          say: message,
      }
  ];
  return actions;
}

function sendFailureMsg() {
  const message = `your appointment booking failed, The doctor will not be available at that time`;
  var actions = [
      {
          say: message,
      }
  ];
  return actions;
}


module.exports = router;
