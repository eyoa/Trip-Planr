class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.string :rating
      t.string :category
      t.string :longitude
      t.string :latitude
      t.string :url

      t.timestamps
    end
  end
end
