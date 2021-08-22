class CreateCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :compositions do |t| 
      t.string :artist
      t.timestamps
    end
  end
end
