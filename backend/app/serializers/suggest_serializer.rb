class SuggestSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :activity, :trip
  has_many :votes
end
