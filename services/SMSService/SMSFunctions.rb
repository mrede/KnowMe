require 'rubygems'

require 'twilio-ruby'
#require 'textmagic'

def sendTextMagicMsg(recipient, body)
  gateway = TextMagic::API.new('smstester', 'smstester1A')
  gateway.send body, recipient  
end

def sendTwilioMsg(recipient, body)
  # Get your Account Sid and Auth Token from twilio.com/user/account
  account_sid = 'Enter Twilio account id'
  auth_token = 'Enter Twilio token' 
  twilio_number = "Enter Twilio number" # e.g. +44 00000 000000
  
  @client = Twilio::REST::Client.new account_sid, auth_token
   
  message = @client.account.messages.create(:body => body,
      :to => recipient,    
      :from => twilio_number)   
  puts message.sid  
end

def sendMsg(recipient, msg)
  sendTwilioMsg(recipient,msg)
end