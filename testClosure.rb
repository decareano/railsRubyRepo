outer = 1

def m &a_block
  inner = 99
  a_block.call(inner)
  puts "inner var = #{inner}"
  puts "argument is a #{a_block.class}"

end

m {|inner| outer += inner}
puts "outer var = #{outer}"
