class ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render 'activities/index.json.jb'

  end

  def show
    @activity = Activity.find params[:id]
    render 'activities/show.json.jb'

  end

end
