class UsersController < ApplicationController
  def index
    @users = User.all
    if @users
      render json: @users.to_json
    else
      render json: {status: 500, message: 'no users found'}
    end

  end


  def show
    @user = User.find params[:id]
    if @user
      render json: @user.to_json
    else
      render json: {status: 500, message: 'user not found'}
    end
  end



  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: @user.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Could not make new user.' }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :profile_url)  
  end

end
