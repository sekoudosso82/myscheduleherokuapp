class Task < ApplicationRecord
  belongs_to :user
  validates :date_to_do, presence: true

end
