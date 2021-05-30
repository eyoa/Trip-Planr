class EntriesController < ApplicationController

  def create
    @entry = Entry.new(entries_params)
    if @entry.save
      render json: @entry, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'Entry not created.' }
    end
  end

  def update
    @entry = Entry.find params[:id]
    if @entry.update(entries_params)
      render json: @entry.to_json, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not update entry.' }
    end
  end

  def destroy
    if Entry.find params[:id].destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove entry.' }
    end
  end
  
  private

  def entries_params
    params.require(:entry, :order, :activity_id, :day_id).permit(:start_time, :end_time)
  end
  
end
