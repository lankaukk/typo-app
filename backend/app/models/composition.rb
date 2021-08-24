class Composition < ApplicationRecord
    belongs_to :artist

    def created_at
        attributes['created_at'].strftime("%b %d, %Y")
      end
end
