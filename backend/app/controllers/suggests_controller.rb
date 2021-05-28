class SuggestsController < ApplicationController
  def index
    suggests = Suggest.all
    render json: suggests.to_json
  end

end
