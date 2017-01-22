file_again = $stdin.gets.chomp

txt_again = open(file_again)

puts "Here's your file #{file_again}:"
print txt_again.read

