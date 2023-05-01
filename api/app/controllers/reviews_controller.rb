class ReviewsController < ApplicationController
    def create 
        review = Review.create!(review_params)
        if review 
            app_response(message: "Review left successfully", status: :ok, data: review)
        else 
            app_response(message: "There was a problem with leaving your review", status: :unprocessable_entity, data: review.errors)
        end
    end


    private 
    def review_params
        params.permit(:rating, :comment)
    end
end
