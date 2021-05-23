class SuggestsController < ApplicationController
  def index
    suggests = Suggest.all
    render json: SuggestSerializer.new(suggests)
  end

end
