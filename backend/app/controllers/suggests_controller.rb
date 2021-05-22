class SuggestsController < ApplicationController
  def Index
    suggests = Suggest.all
    render json: SuggestSerializer.new(suggests)
  end
end
