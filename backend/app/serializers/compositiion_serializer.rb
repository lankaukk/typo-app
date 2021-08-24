class CompositiionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :characters, :colors, :placements, :font_family, :artist_id, :artist, :created_at
  belongs_to :artist
end
