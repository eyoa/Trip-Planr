class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :start_date, :end_date
  belongs_to :user
  has_many :days
  has_many :collaborators
  has_many :suggests
end
