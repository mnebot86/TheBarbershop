class AddBarberRefToServices < ActiveRecord::Migration[6.1]
  def change
    add_reference :services, :barber, index: true 
    add_foreign_key :services, :barbers 
  end
end
