class DaysController < ApplicationController
  def index
    days = Day.all
    render json: DaySerializer.new(days)
  end
end
