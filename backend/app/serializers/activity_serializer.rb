class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :img_url, :rating, :longitude, :latitude, :url
  belongs_to :suggests, :plan_entries
  has_many :plan_entries
end
