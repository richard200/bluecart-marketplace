class ScraperController < ApplicationController

    require 'open-uri'

    def index
      search_term = params[:search_term]&.gsub(' ', '+') || '' # if no search term is provided, use an empty string
  
      jumia_url = "https://www.jumia.co.ke/phones-tablets"
    #   kilimall_url = "https://www.kilimall.co.ke/new/commoditysearch?c=4220&gc_id=4220&q=#{search_term}"
  
     products = scrape_jumia(jumia_url)
     
    #   kilimall_products = scrape_kilimall(kilimall_url)
  
      render json: {jumia: products}
    end
  
    private
  
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
    
    # products = scrape_jumia(jumia_url)
    # puts products # => Array
    
    # products.each do |product|
    #   puts "#{product[:title]} - #{product[:price]}"
    # end
    # def scrape_jumia(jumia_url)
    #     doc = Nokogiri::HTML(URI.open(jumia_url))
    #     result = []
      
    #     doc.css('.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd').each do |item|
    #       title = item.css('.info .name').text
    #       price = item.css('.info .prc').text.strip
    #     #   link = item.css('.img-c .img')
    #     #   oldprice = item.css('.info.s-prc-w.old').text.strip
      
    #       # product = {
    #       #   title: title,
    #       #   price: price
           
    #       # }
    #       # result << { product: product }
    #        result << { :title => title, :price => price}
    #     end
      
    #     pp result.to_json
    #   end
      
  
    # def scrape_kilimall(url)
    #   doc = Nokogiri::HTML(open(url))
    #   products = []
  
    #   doc.css('div.item-data').each do |item|
    #     title = item.css('a.item-title').text.strip
    #     price = item.css('span.price-tag').text.strip
    #     link = item.css('a.item-title')[0]['href']
    #     products << {title: title, price: price, link: link}
    #   end
  
    #   products
    # end
  end
  