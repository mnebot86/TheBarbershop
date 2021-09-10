class Barber < ApplicationRecord
  has_many :booking
  has_many :service
  has_secure_password

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, :email, :password, presence: true
  validates :password, length: { minimum: 3 }
end
