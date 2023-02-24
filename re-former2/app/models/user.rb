class User < ApplicationRecord
  has_many :posts

  validates :username, uniqueness: true, presence: true
  validates :pwd, presence: true
  validates :email, uniqueness: true, presence: true
  validates :phone, uniqueness: true
  validates :fname, presence: true
  validates :lname, presence: true

end
