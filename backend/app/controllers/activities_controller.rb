class ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render 'activities/index.json.jb'

  end
end
