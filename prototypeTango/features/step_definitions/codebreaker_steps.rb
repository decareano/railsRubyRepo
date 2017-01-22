#---
# Excerpted from "The RSpec Book",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/achbd for more book information.
#---


Given /^I am not yet playing$/ do
end


When /^I start a new game$/ do
    game = Game.new(output)
    game.start
  end



Then /^I should see "([^"]*)"$/ do |message|
  output.messages.should include(message)
end






