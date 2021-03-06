class TripsController < ApplicationController
  
  # list of trips
  def index
    @trips = Trip.where(user_id: params[:user_id])
    render json: @trips.to_json(:include => [:collaborators])
  end

  # Itinerary - specific trip with days, entries and activity information
  def show
    @trip = Trip.find params[:id]
    render 'trips/show.json.jb'
  end

  # creating a new trip 
  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Trip not created.' }
    end
  end

  def update
    @trip = Trip.find params[:id]
    if @trip.update(trip_params)
      render json: @trip.to_json, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not update trip.' }
    end
  end

  def destroy

    if Trip.delete_by(id: params[:id])
      @trips = Trip.where(user_id: params[:user_id])
      render json: @trips.to_json, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove trip.' }
    end
  end


  private

  def trip_params
    params.permit(:trip, :name, :user_id, :start_date, :end_date)
  end

end
