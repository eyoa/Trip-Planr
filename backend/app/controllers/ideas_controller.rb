class IdeasController < ApplicationController
  before_action :set_trip

  # show ideas for trip with votes....
  def index
    @ideas = @trip.ideas.all
    render json: @ideas.to_json
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
    if Idea.find params[:id].destroy
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
