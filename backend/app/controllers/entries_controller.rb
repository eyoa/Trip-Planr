class EntriesController < ApplicationController
  before_action :set_trip
  before_action :get_day

  def create
    @entry = @day.entries.build(entries_params)
    if @entry.save
      render json: @entry, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Entry not created.' }
    end
  end

  def update
    # @entry = Entry.find params[:id]
    # if @entry.update(entries_params)
    #   render json: @entry.to_json, status: :ok
    # else
    #   render json: { status: 'error', code: 3000, message: 'Could not update entry.' }
    # end
  end

  def destroy
    @entry = @day.entries.find params [:id]
    if @entry.destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove entry.' }
    end
  end
  
  private

  def set_trip
    @trip = Trip.find params[:trip_id]
  end


  def get_day
    @day = @trip.days.find params[:day_id]
  end

  def entries_params
    params.permit( :day_id, :entry, :start_time, :end_time, :order, :activity_id)
  end
  
end
