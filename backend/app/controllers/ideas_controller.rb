class IdeasController < ApplicationController
  before_action:set_trip

  # show ideas for trip with votes....
  def index
    @ideas = @trip.ideas.all
    render json: @ideas.to_json
  end

  # add new idea
  def create
    # activity = Activity.find params[:activity_id]
    # if activity.not_exists?
    #   @activity = Activity.new(er...params???)
    # end

    new_idea = Idea.new(ideas_params)
    if new_idea.save
      render json: new_idea, status: :created
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
