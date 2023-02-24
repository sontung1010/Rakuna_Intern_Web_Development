# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  :password => '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', # This is the secret sendgrid API key which was issued during API key creation
  :domain => 'google.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
