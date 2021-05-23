class VotesController < ApplicationController
  def index
    votes = Vote.all
    render json: VoteSerializer.new(votes)
  end
end
