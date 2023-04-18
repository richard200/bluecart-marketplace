class ScraperController < ApplicationController

    require 'open-uri'

    def index
      search_term = params[:search_term]&.gsub(' ', '+') || '' # if no search term is provided, use an empty string
  
      jumia_url = "https://www.jumia.co.ke/phones-tablets/"
      jambo_url = "https://www.jamboshop.com/category/Mobile-Phones/2"
      shopit_url = "https://shopit.co.ke/electronics/"
      jiji_url = "https://jiji.co.ke/mobile-phones"
  
     products = scrape_jumia(jumia_url)
    # products = scrape_jambo(jambo_url)
     prod = scrape_jumia(jumia_url)
    # prod1 = scrape_shopit(shopit_url)
    # prod2 = scrape_ebay(ebay_url)
    prod3 = scrape_jiji(jiji_url)
     
    #   kilimall_products = scrape_kilimall(kilimall_url)
  
      render json: { jumia: products, jiji: prod3}
    end
  
    private
  
    jumia_url = "https://www.jumia.co.ke/phones-tablets/"
    def scrape_jumia(jumia_url)
      result = []
      doc = Nokogiri::HTML(URI.open(jumia_url))
    
       doc.css('.aim.row.-pbm .-pvs.col12 .card.-fh .-paxs.row._no-g._4cl-3cm-shs .prd._fb.col.c-prd').each do |item|
      #  doc.css('.crs-w._main.-phxs ,crs.row._no-g.-fw-nw._6cl-4cm.-pvxs .itm.col .prd._box._hvr').each do |item|
        img = item.css('a.core div.img-c img.img').attribute('data-src').value
        height = item.css('a.core div.img-c img.img').attribute('height').value
        pp "Height #{height}"
        title = item.css('.core .info h3.name').text
        price = item.css('.core .info div.prc').text.strip
    
        result << { :title => title, :price => price, :img => img }
      end
    
      result
    end

    # shopit_url = "https://shopit.co.ke/electronics/"
    # def scrape_shopit(shopit_url)
    #   result = []
    #   doc = Nokogiri::HTML(URI.open(shopit_url))
    
    #    doc.css('#pagination_contents.ty-pagination-container.cm-pagination-container .grid-list #categories_view_pagination_contents .ty-column4 .ut2-gl__item .cm-disable-empty-files.cm-ajax.cm-ajax-full-render.cm-ajax-status-middle.cm-processed-form .ut2-gl__body').each do |item|
    #   #  doc.css('.crs-w._main.-phxs ,crs.row._no-g.-fw-nw._6cl-4cm.-pvxs .itm.col .prd._box._hvr').each do |item|
    #     img = item.css('.ut2-gl__image .ty-pict.img-ab-hover-gallery.cm-image.lazyloaded').attribute('src').value
    #     title = item.css('.ut2-gl__content .ut2-gl__name .product-title').text
    #     price = item.css('.ut2-gl__price.pr-row-mix').text.strip
    
    #     result << { :title => title, :price => price, :img => imge }
    #   end
    
    #   result
    # end

   jiji_url = "https://jiji.co.ke/mobile-phones"
    def scrape_jiji(jiji_url)
      result = []
      doc = Nokogiri::HTML(URI.open(jiji_url))
    
      doc.css('.b-list-advert__gallery__item.js-advert-list-item .b-list-advert-base.qa-advert-list-item.b-list-advert-base--gallery').each do |item|
        #  doc.css('.crs-w._main.-phxs ,crs.row._no-g.-fw-nw._6cl-4cm.-pvxs .itm.col .prd._box._hvr').each do |item|
            img = item.css('.b-list-advert-base__img__wrapper.b-list-advert-base__img__wrapper--one-image .b-list-advert-base__img.js-list-advert-base-img .h-flex-center.h-width-100p.h-height-100p.h-overflow-hidden img').attribute('src').value
           title = item.css('.b-list-advert-base__data .b-list-advert-base__data__inner .b-list-advert-base__data__header .b-list-advert-base__data__title .qa-advert-list-item-title.b-list-advert-base__item-title .b-advert-title-inner.qa-advert-title.b-advert-title-inner--div').text
           price = item.css('.b-list-advert-base__data .b-list-advert-base__data__inner .b-list-advert-base__data__header div.b-list-advert__price.h-mt-3 div.qa-advert-price').text.strip
        result << { :img => img, :title => title, :price => price}
      end
    
      result
    end

    jambo_url = "https://www.jamboshop.com/category/Mobile-Phones/2"
      def scrape_jambo(jambo_url)
      result = []
      doc = Nokogiri::HTML(URI.open(jambo_url))
    
        doc.css('.row .col-xs-6.col-sm-4.col-md-4.col-lg-3 .category-product.text-center').each do |item|
      # doc.css('section.el-container main.el-main.main-el div.imgbox div.el-row div.el-col.el-col-6 div.grid-content.bg-purple.clearfix').each do |item|
      #  image = item.css('img.img-responsive').attr('src').value
      title = item.css('a.title h6.prd-title').text
        price = item.css('.prd-price span.offer-price').text.strip
        img = item.css('.thumbnail .img-responsive').attribute('src').value
     
        result << { :title => title, :price => price, :img => img}
      end
    
      result
    end
    
  
  end
  