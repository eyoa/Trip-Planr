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
    @collaborator = Collaborator.find params[:id]
    if @collaborator.destory
      render json: @collaborator, status: :ok
    else
      render json: { status: 'error', code: 3000, message: 'Could not remove collaborator.' }
    end
  end

  private
  def collaborator_params
    params.require(:collaborator).permit(:user_id, :trip_id)
  end

end
