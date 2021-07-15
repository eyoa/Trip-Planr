class AddNotesToEntries < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :notes, :string
  end
end
