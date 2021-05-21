class Trip < ApplicationRecord
  belongs_to :user
  has_many :collaborators, :dependent => :destroy
  has_many :days, :dependent => :destroy
  has_many :suggests, :dependent => :destroy
  has_many :votes, :dependent => :destroy
end
