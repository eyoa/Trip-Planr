class CollaboratorsController < ApplicationController
  
  # Add collaborator
  def create
    @collaborator = Collaborator.new(collaborator_params)
    if @collaborator.save
      render json: @collaborator.to_json, status: :created
    else
      render json: { status: 'error', code: 3000, message: 'collaborator not added.' }
    end
  end

  # Remove collaborator
  def destroy
    if Collaborator.find params[:id].destroy
      render json: {}, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove collaborator.' }
    end
  end

  private
  def collaborator_params
    params.require(:collaborator, :user_id, :trip_id)
  end

end
