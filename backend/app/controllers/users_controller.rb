class UsersController < ApplicationController
  def index
    users = User.all
    render json: UserSerializer.new(users)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      puts "new user made"
    else
      puts "didn't work reload?"
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password,:profile_url)  
  end

end
