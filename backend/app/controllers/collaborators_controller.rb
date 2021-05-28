class CollaboratorsController < ApplicationController
  def index
    collaborators = Collaborator.all
    render json: collaborators.to_json
  end
end
