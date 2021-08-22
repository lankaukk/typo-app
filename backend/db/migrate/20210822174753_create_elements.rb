class CreateElements < ActiveRecord::Migration[6.1]
  def change
    create_table :elements do |t|
      t.string :characters
      t.string :colors
      t.string :placements
      t.string :font_family

      t.timestamps
    end
  end
end
