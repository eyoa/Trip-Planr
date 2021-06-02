class VotesController < ApplicationController
before_action :set_trip
before_action :set_idea 


  # /trips/:trip_id/ideas/:idea_id/votes(.:format)
  def create
    @vote = @idea.votes.build(vote_params)
    if @vote.save
      render json: @tvote.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Vote not created.' }
    end
  end
  
  # /trips/:trip_id/ideas/:idea_id/votes(.:format)
  def destroy
    @vote = @idea.votes
    if @vote.destroy
      render json: {}, status: :ok
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

  def vote_params
    params.permit(:vote, :idea_id, :user_id)
  end

end
