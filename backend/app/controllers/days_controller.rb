class DaysController < ApplicationController
  # def index
  #   @days = Day.all
    
  # end

  # def show
  #   @day = Day.find params[:trip_id]
  # end

  # create day for trip
  def create
    @day = Day.new(days_params)
    if @day.save
      render json: @day.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Day not created.' }
    end

  end

  # update day for trip
  def update
    @day = Day.find params [:id]
      if @day.update(days_params)
        render json: @day.to_json, status: :ok
      else 
        render json: { status: 'error', code: 3000, message: 'Could not update day.' }
      end
  end

  # remove day for trip
  def destroy
    if Day.find params [:id].destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove Day.' }    
    end
  end

  private
  
  def days_params
    params.require(:day).permit(:trip_id, :order, :name, :id)
  end

end
