class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.references :activity
      t.references :trip

      t.timestamps
    end
  end
end
