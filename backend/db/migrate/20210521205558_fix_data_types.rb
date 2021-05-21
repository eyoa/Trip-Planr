class FixDataTypes < ActiveRecord::Migration[6.1]
  def change
    change_column :activities, :rating, :integer, using: 'rating::integer'
    change_column :activities, :longitude, :decimal, :precision => 10, :scale=> 6, using: 'longitude::Numeric(10,6)'
    change_column :activities, :latitude, :decimal, :precision => 10, :scale=> 6, using: 'latitude::Numeric(10,6)'
   
    remove_column :days, :order
    add_column :days, :order, :integer

    remove_column :plan_entries, :order
    remove_column :plan_entries, :start_time
    remove_column :plan_entries, :end_time
    add_column :plan_entries, :order, :integer
    add_column :plan_entries, :start_time, :datetime
    add_column :plan_entries, :end_time, :datetime
  
    remove_column :trips, :start_date
    remove_column :trips, :end_date
    add_column :trips, :end_date, :date
    add_column :trips, :start_date, :date
  end
end
