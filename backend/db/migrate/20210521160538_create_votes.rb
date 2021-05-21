class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.reference :activity
      t.reference :trip

      t.timestamps
    end
  end
end
