require 'nokogiri'
require 'uri'
require 'open-uri'
require 'json'

url = 'https://www.jumia.co.ke/phones-tablets/'
doc = Nokogiri::HTML(URI.open(url))

# extract all phone names and prices
# phones = doc.css('.name').map(&:text)
# prices = doc.css(".prc").map(&:text)

# phone_list = []
# phones.each_with_index do |phone, index|
#     phone_list << { name: phone, price: prices[index] }
#   end


products = []

doc.css('.core').each do |item|
  title = item.css('.info .name')
  price = item.css('.info .prc').text.strip
  link = item.css('.img-c .img')
  products << {title: title, price: price, link: link}
end

puts products.to_json

# print the results
# puts "Phones:"
# phones.each { |phone| puts "- #{phone}" }
# puts "Prices:"
# prices.each { |price| puts "- #{price}" }


