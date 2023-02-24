class Booking < ApplicationRecord
  belongs_to :flight
  has_many :passenger_bookings, dependent: :delete_all
  has_many :passengers, through: :passenger_bookings, inverse_of: :bookings

  accepts_nested_attributes_for :passengers

  before_validation :find_or_create_passenger
  before_save :ensure_confirmation

  def to_param
    confirmation
  end

  private

  def find_or_create_passenger
    self.passengers = self.passengers.map do |passenger|
      Passenger.find_or_create_by(email: passenger.email, name: passenger.name)
    end
  end

  def ensure_confirmation
    return if confirmation

    loop do
      self.confirmation = generate_confirmation_number
      break unless self.class.where(confirmation: confirmation).exists?
    end
  end

  def generate_confirmation_number(size = 6)
    charset = %w{ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z }
    (0...size).map{ charset.to_a[rand(charset.size)] }.join
  end
end
