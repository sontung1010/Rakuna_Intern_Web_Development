class CreatePassengers < ActiveRecord::Migration[6.1]
  def change
    create_table :passengers do |t|
      t.string :name, null: false
      t.string :email, null: false

      t.timestamps
    end
    add_index :passengers, :email, unique: true
  end
end
