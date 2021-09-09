class CreateBarbers < ActiveRecord::Migration[6.1]
  def change
    create_table :barbers do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :image_url

      t.timestamps
    end
  end
end
