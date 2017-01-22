def three_times
  yield
  yield
  yield
end

three_times { puts "Hello"}

value = "some shape"

[1,2].each {|value| puts value }
puts value

[1,2,3,4,5,7,9].each {|i| puts i }
