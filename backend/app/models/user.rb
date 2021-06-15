class User < ApplicationRecord
  
  has_many :trips, :dependent => :destroy
  has_many :collaborators, :dependent => :destroy
  has_many :votes, :dependent => :destroy
  
  has_secure_password
  validates :username, presence: true, uniqueness: true, length: {minimum: 4}
end
