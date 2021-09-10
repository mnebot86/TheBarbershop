class AddBarberRefToBookings < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookings, :barber, index: true 
    add_foreign_key :bookings, :barbers 
  end
end
