class Composition < ApplicationRecord
    has_many :elements

    def created_at
        attributes['created_at'].strftime("%b %d, %Y")
      end
end
