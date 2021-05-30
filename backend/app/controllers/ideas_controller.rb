class IdeasController < ApplicationController
  
  # show ideas for trip with votes....
  def index
    ideas = Idea.all
    render json: ideas.to_json
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

  def ideas_params
    params.require(:idea, :trip_id).permit(:activity_id)
  end
end
