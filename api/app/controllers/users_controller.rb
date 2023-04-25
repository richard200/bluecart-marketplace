
class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


     # GET /users
    def index
        #get users
        render json: User.all, status: :ok
    end 
    
    

     # keep user login
     def show

        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end


    #putch
    def update
        user = find_user
        if user.valid?
            user.update(user_params)
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

  
    #post user
    def create
        user = User.create!(user_params)
        if user.valid?
          render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


     # keep user login
     def login
                sql = "username = :username OR email = :email"
                user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
                if user&.authenticate(user_params[:password])
                 
                    app_response(message: 'Login was successful', status: :ok, data: {user: user})
                else
                    app_response(message: 'Invalid username/email or password', status: :unauthorized)
                end
            end
        

   # DELETE
   def destroy
    # check whether the task exists
    user = User.find_by(id:params[:id])
   
   #  delete the task
   if user
       user.destroy
       head :no_content
   #  return a not found user
   else 
       render json: {error: 'User not found'}, status: not_found
   end
   end


    
    private

    def user_params
        params.permit(:username, :password, :email)
    end

    def find_user
        User.find(params[:id])
    end

    def record_not_found_response(exception)
        render json: { error: "User not found" }, status: :not_found
    end


end













# class UsersController < ApplicationController

#     rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


#      # GET /users
#     def index
#         #get users
#         render json: User.all, status: :ok
#     end 
    
    

#      # keep user login
#      def show

#         user = User.find_by(id: session[:user_id])
#         if user
#           render json: user
#         else
#           render json: { error: "Not authorized" }, status: :unauthorized
#         end
#       end


#     #putch
#     def update
#         user = find_user
#         if user.valid?
#             user.update(user_params)
#             render json: user
#         else
#             render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#         end
#     end

#     def create
#         user = User.create(user_params)
#         if user.valid?
#              save_user(user.id)
#             app_response(message: 'Registration was successful', status: :created, data: user)
#         else
#             app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
#         end
#     end


  
#     #post user
#     # def create
#     #     user = User.create!(user_params)
#     #     if user.valid?
#     #       render json: user, status: :created
#     #     else
#     #         render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#     #     end
#     # end

#     def login
#         sql = "username = :username OR email = :email"
#         user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
#         if user&.authenticate(user_params[:password])
#             save_user(user.id)
#             token = encode(user.id, user.email)
#             app_response(message: 'Login was successful', status: :ok, data: {user: user, token: token})
#         else
#             app_response(message: 'Invalid username/email or password', status: :unauthorized)
#         end
#     end

#    # DELETE
#    def destroy
#     # check whether the task exists
#     user = User.find_by(id:params[:id])
   
#    #  delete the task
#    if user
#        user.destroy
#        head :no_content
#    #  return a not found user
#    else 
#        render json: {error: 'User not found'}, status: :not_found
#    end
#    end


    
#     private

#     def user_params
#         params.permit(:username, :email, :password)
#     end

#     def find_user
#         User.find(params[:id])
#     end

#     def record_not_found_response(exception)
#         render json: { error: "User not found" }, status: :not_found
#     end


# end



# # class UsersController < ApplicationController
# #     before_action :session_expired?, only: [:check_login_status]

# #     def index 
# #         user = User.all 
# #         render json: user, status: 200
# #     end

 


# #     def logout
# #         remove_user
# #         app_response(message: 'Logout successful')
# #     end

# #     def check_login_status
# #         app_response(message: 'success', status: :ok)
# #     end

# #     private 
    
# #     def user_params
# #         params.permit(:username, :email, :password)
# #     end
   

# #     # def update
# #     #     user = User.find_by(id: params[:id])
# #     #     user.update(user_params)
# #     #     render json: user, (message: "User updated successfully"), status: :updated
# #     # end

# #     # def delete 
# #     #     user = User.find_by(id: params[:id])
# #     #     user.delete
# #     #     render json: (message: "User deleted successfully")
# #     # end

  
# # end
