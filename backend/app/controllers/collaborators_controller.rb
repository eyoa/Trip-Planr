class CollaboratorsController < ApplicationController
  def Index
    collaborators = Collaborator.all
    render json: CollaboratorSerializer.new(collaborators)
  end
end
