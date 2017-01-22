module Codebreaker
  class Game
    def initialize(output)
      @output = output
    end
    def start
      @output.puts "Welcome to CodeBreaker!"
      @output.puts "Enter a guess:"
    end
  end
  class Output
    def messages
      @messages ||= []
    end

    def puts
      messages << message
    end

    def output
      @output ||= Output.new
    end
  end
end