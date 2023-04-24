class CreateSearches < ActiveRecord::Migration[7.0]
  def change
    create_table :searches do |t|
      t.string :user_id
      t.string :search_id

      t.timestamps
    end
  end
end
