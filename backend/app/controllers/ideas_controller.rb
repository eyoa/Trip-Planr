class IdeasController < ApplicationController
  def index
    ideas = Idea.all
    render json: ideas.to_json
  end

end
