class VotesController < ApplicationController
  def Index
    votes = Vote.all
    render json: VoteSerializer.new(votes)
  end
end
