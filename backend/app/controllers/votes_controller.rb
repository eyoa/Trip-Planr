class VotesController < ApplicationController
  def index
    votes = Vote.all
    render json: votes.to_json
  end
end
