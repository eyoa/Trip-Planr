class ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render json: @activities.to_json
  end
end
