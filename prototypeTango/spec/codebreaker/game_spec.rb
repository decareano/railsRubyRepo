require 'spec_helper'
module Codebreaker
  describe Game do
    describe "#start" do

      it "sends a welcome message" do
        output = double('output')
        game = Game.new(output)

        output.should_receive(:puts).with('Welcome to Codebreaker!')

        game.start
      end

      it "prompts for the first guess" do
        output = double('output')
        game = Game.new(output)

        output.should_receive(:puts).with('Enter guess:')

        game.start
      end

      describe "#Statement" do
        it 'uses the customers name in the header' do
          customer = double('customer')
          customer.stub(:name).and_return('marcelo')
          statement = Statement.new(customer)
          statement.generate.should =~ /^Statement for marcelo/
        end
      end
    end
  end
end