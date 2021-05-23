class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :email, :password, :profile_url
  has_many :collaborators, :votes, :trips
end
