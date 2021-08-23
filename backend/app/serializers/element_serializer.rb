class ElementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :characters, :colors, :placements, :font_family, :composition_id, :composition 
  belongs_to :composition
end
