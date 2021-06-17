class ActivitiesMoreDetails < ActiveRecord::Migration[6.1]
  def change
    rename_column :activities, :description, :short_description
    add_column :activities, :long_description, :string
    add_column :activities, :price_rating, :integer
    
  end
end
