class Collaborator < ApplicationRecord
  belongs_to :trips
  belongs_to :user
end
