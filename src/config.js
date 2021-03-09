
  const cfg = {};
  
  // HTTP Port to run our web application
  cfg.port = process.env.PORT || 3000;
  
  // Your Twilio account SID and auth token, both found at:
  // https://www.twilio.com/user/account
  //
  // A good practice is to store these string values as system environment
  // variables, and load them from there as we are doing below. Alternately,
  // you could hard code these values here as strings.
  cfg.twilioAccountSid = 'ACd0e4b7233331229913f2906c8a596f50';
  cfg.twilioAuthToken = '3f9054cd54cd3e4ea8e5ff346a9f635e';
  
  // A Twilio number you control - choose one from:
  // Specify in E.164 format, e.g. "+16519998877"
  cfg.twilioPhoneNumber = '+13462630516';
  
  // Export configuration object
  module.exports = cfg;
  