class Post
  attr_writer :title

  def self.print_title
    puts "The title of this post is #{@title}"
  end
end
Post.print_title
