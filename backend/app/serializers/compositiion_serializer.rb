class CompositiionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :artist, :created_at
end
