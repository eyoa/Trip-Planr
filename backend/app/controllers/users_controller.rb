class UsersController < ApplicationController
  def Index
    users = User.all
    render json: UserSerializer.new(users)
  end
end
