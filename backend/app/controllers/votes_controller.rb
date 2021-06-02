class VotesController < ApplicationController
before_action :set_trip
before_action :set_idea

  # /trips/:trip_id/ideas/:idea_id/votes(.:format)
  def create
    @vote = @idea.votes.build(vote_params)
    if @vote.save
      render json: @vote.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Vote not created.' }
    end
  end
  
  # /trips/:trip_id/ideas/:idea_id/votes(.:format)
  def destroy
    @vote = @idea.votes
    if @vote.destroy
      render json: @vote, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove vote.' }
    end
  end

  private

  def set_trip
    @trip = Trip.find params[:trip_id]
  end

  def set_idea
    @idea = @trip.ideas.find params[:idea_id]
  end

  def other_params
    params.permit(:trip_id, :idea_id)
  end
  def vote_params
    params.permit(:user_id, :vote)
  end

end
