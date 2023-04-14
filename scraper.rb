require 'nokogiri'
require 'uri'
require 'open-uri'
require 'json'

# url = 'https://www.jumia.co.ke/phones-tablets/'
# doc = Nokogiri::HTML(URI.open(url))

# extract all phone names and prices
# phones = doc.css('.name').map(&:text)
# prices = doc.css(".prc").map(&:text)

# phone_list = []
# phones.each_with_index do |phone, index|
#     phone_list << { name: phone, price: prices[index] }
#   end

# jumia_url = "https://www.jumia.co.ke/phones-tablets"

# @result = []
#     def scrape_jumia(jumia_url)
#         doc = Nokogiri::HTML(URI.open(jumia_url))
       
      
#         doc.css('.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd').each do |item|
#           title = item.css('.info .name').text
#           price = item.css('.info .prc').text.strip
#         #   link = item.css('.img-c .img')
#         #   oldprice = item.css('.info.s-prc-w.old').text.strip
      
#           # product = {
#           #   title: title,
#           #   price: price
           
#           # }
#           # result << { product: product }
#            @result << { :title => title, :price => price}
#         end
      
#         pp @result.to_json
#       end

#       scrape_jumia(jumia_url)

#       puts scrape_jumia(jumia_url).class\\

require 'json'

jumia_url = "https://www.jumia.co.ke/phones-tablets"

def scrape_jumia(jumia_url)
  result = []
  doc = Nokogiri::HTML(URI.open(jumia_url))

  doc.css('.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd').each do |item|
    title = item.css('.info .name').text
    price = item.css('.info .prc').text.strip

    result << { :title => title, :price => price }
  end

  result
end

products = scrape_jumia(jumia_url)
puts products # => Array

products.each do |product|
  puts "#{product[:title]} - #{product[:price]}"
end

# products = []

# doc.css('.core').each do |item|
#   title = item.css('.info .name')
#   price = item.css('.info .prc').text.strip
#   link = item.css('.img-c .img')
#   products << {title: title, price: price, link: link}
# end

# puts products.to_json

# print the results
# puts "Phones:"
# phones.each { |phone| puts "- #{phone}" }
# puts "Prices:"
# prices.each { |price| puts "- #{price}" }


