class CollaboratorSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :trip, :user
end