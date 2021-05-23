class User < ApplicationRecord
  has_many :trips, :dependent => :destroy
  has_many :collaborators, :dependent => :destroy
  has_many :votes, :dependent => :destroy
end
