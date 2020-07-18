class Task < ApplicationRecord
  belongs_to :user
  validates :dateToDo, presence: true

end
