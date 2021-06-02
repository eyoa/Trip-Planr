class IdeasController < ApplicationController
  before_action :set_trip

  # show ideas for trip with votes....
  def index
    @ideas = @trip.ideas.all
    # @votes = @ideas.votes.all
      render :json => @ideas.to_json(:include => [:votes])
  end

  # add new idea
  def create
    @idea = @trip.ideas.build(ideas_params)
    if @idea.save
      render json: @idea, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'idea not created.' }
    end
  end

  # remove idea
  def destroy
    @idea = @trip.ideas.find params[:id]
    if @idea.destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove Idea.' }
    end
  end

  private

  def set_trip
    @trip = Trip.find params[:trip_id]
  end

  def ideas_params
    params.permit(:idea, :trip_id, :activity_id)
  end
end
