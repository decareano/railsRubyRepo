describe "RSpec Greeter" do
 it "should say 'Hello Rspec' upon receiving the greet message" do
   greeter = RSpecGreeter.new
   greeting = greeter.greet
   greeting.should == "Hello RSpec"
 end
end


class RSpecGreeter 
	def greet
		"Hello RSpec"
	end
end

