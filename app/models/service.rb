class Service < ApplicationRecord
  belong_to :barber
  has_many :booking 
end
