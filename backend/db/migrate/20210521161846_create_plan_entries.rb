class CreatePlanEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :plan_entries do |t|
      t.string :name
      t.references :day, null: false, foreign_key: true
      t.string :order
      t.string :start_time
      t.string :end_time
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
