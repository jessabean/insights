require 'sinatra'
set :views, settings.root + '/app/views'

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/response' do
  @industries = params[:industries]
  erb :confirm
end
