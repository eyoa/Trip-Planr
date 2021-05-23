class ActivitiesController < ApplicationController
  def index
    activities = Activity.all
    render json: ActivitySerializer.new(activities)
  end
end
