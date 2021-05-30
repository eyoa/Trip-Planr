class VotesController < ApplicationController
  # remove a vote
  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @tvote.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Vote not created.' }
    end
  end
  
  # add a vote
  def destroy
    if Vote.find params[:id].destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove vote.' }
    end
  end

  def vote_params
    params.require(:vote, :idea_id, :user_id)
  end

end
