class SearchesController < ApplicationController
    before_action :authorized, only: [:history]
    def create

        @search = search(params[:search_term])
        render json: @search
    end

    #method to get the user search history
    def history
        @user_history = Search.search_history(current_user.id)
        render json: @user_history
      end



end
end
