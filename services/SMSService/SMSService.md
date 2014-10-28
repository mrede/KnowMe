1. Install Ruby v2.1.3 - http://rubyinstaller.org/downloads/
1. Setup Twilio (SMS/Texting) account - https://www.twilio.com/try-twilio 
1. Install Twilio Ruby API – gem install twilio-ruby - https://www.twilio.com/docs/ruby/install#installation
1. Install attached cacert.pem and set SSL_CERT_FILE windows environment variable based on https://gist.github.com/fnichol/867550#the-manual-way-boring
1. Install Sinatra (Web Container) - http://www.sinatrarb.com/
1. Update SMSFunctions.rb with the required creditials from https://www.twilio.com/user/account
1. Open a command prompt in the directory containing SMSService.rb and run: ruby SMSService.rb
1. Test the service: http://localhost:4567/sendSms?number=PHONE_NO_REGISTERED_TO_TWILIO_ACCOUNTT&content=Test