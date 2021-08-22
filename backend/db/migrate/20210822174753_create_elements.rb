class CreateElements < ActiveRecord::Migration[6.1]
  def change
    create_table :elements do |t|
      t.string :characters
      t.string :colors
      t.string :placements
      t.string :font_family
      t.integer :composition_id

      t.timestamps
    end
  end
end
