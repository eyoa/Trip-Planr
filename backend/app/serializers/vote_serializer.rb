class VoteSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :suggest, :user
end
