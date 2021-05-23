class TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: TripSerializer.new(trips)
  end

  def show
    trip = Trip.find_by(id: params[:id])
    options = {
      include: [:users, :days, :collaborators, :suggests]
    }
    render json: TripSerializer.new(trip)
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      puts "new trip made"
    else
      puts "didn't work reload?"
    end
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :user_id, :start_date, :end_date)
  end


end
