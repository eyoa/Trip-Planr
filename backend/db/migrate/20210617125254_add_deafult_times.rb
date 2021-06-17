class AddDeafultTimes < ActiveRecord::Migration[6.1]
  def change
    change_column :entries, :start_time, :datetime, :default => DateTime.parse(DateTime.now.strftime("2021-06-18T14:00:00.000Z"))
    change_column :entries, :end_time, :datetime, :default => DateTime.parse(DateTime.now.strftime("2021-06-19T16:00:00.000Z"))

  end
end
