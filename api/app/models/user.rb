class User < ApplicationRecord
    has_many :Reviews
    has_many :searches
end
