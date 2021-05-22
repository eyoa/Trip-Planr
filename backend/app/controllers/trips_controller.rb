class TripsController < ApplicationController
  def Index
    trips = Trip.all
    render json: TripSerializer.new(trips)
  end
end
