class DaysController < ApplicationController
  def Index
    days = Day.all
    render json: DaySerializer.new(days)
  end
end
