class ActivitiesController < ApplicationController
  def Index
    activities = Activity.all
    render json: ActivitySerializer.new(activities)
  end
end
