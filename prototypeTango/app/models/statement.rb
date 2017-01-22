class Statement < ActiveRecord::Base
  def initialize(customer, product)
    @customer = customer
    @product = product
  end

  def generate
    "Statement for #{@customer.name}"
  end

end
