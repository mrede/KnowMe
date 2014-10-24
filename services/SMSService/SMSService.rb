require 'sinatra'

require_relative 'SMSFunctions'

get '/sendSms' do
  sendMsg(params[:number], params[:content])
end

post '/sendSms' do
  sendMsg(params[:number], params[:content])  
end