class CollaboratorsController < ApplicationController
  def index
    collaborators = Collaborator.all
    render json: CollaboratorSerializer.new(collaborators)
  end
end
