class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description
  belongs_to :user
end
