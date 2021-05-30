class Trip < ApplicationRecord
  belongs_to :user
  has_many :collaborators, :dependent => :destroy
  has_many :days, :dependent => :destroy
  has_many :ideas, :dependent => :destroy
  has_many :entries, :through => :days
end
