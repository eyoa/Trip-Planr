class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.to_json, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not make new user.' }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password,:profile_url)  
  end

end
