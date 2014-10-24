# Install Ruby v2.1.3 - http://rubyinstaller.org/downloads/
# Setup Twilio (SMS/Texting) account - https://www.twilio.com/try-twilio 
# Install Twilio Ruby API – gem install twilio-ruby - https://www.twilio.com/docs/ruby/install#installation
# Install attached cacert.pem and set SSL_CERT_FILE windows environment variable based on https://gist.github.com/fnichol/867550#the-manual-way-boring
# Install Sinatra (Web Container) - http://www.sinatrarb.com/
# Update SMSFunctions.rb with the required creditials from https://www.twilio.com/user/account
# Open a command prompt in the directory containing this file and run: ruby SMSService.rb
# Test the service: http://localhost:4567/sendSms?number=PHONE_NO_REGISTERED_TO_TWILIO_ACCOUNTT&content=Test
