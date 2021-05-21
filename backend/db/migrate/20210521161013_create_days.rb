class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :name
      t.string :order

      t.timestamps
    end
  end
end
