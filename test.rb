class Awesome
  def initialize(awesome_level)
    @awesome_level = awesome_level
  end

  def awesome_level
    @awesome_level
  end
end
awesome_sauce = Awesome.new(100)
puts "awesome level is #{awesome_sauce.awesome_level}"

