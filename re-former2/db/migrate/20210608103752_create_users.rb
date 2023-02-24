class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :username
      t.string :pwd
      t.string :email
      t.string :phone
      t.datetime :birthday
      t.string :gender
      t.string :occupation
      t.string :social_media
      t.string :myfile

      t.timestamps
    end
  end
end
