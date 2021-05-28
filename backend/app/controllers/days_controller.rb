class DaysController < ApplicationController
  def index
    @days = Day.all
  end

  def show
    @day = Day.find params[:trip_id]
    
  end
end
