class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.boolean :success
      t.string :deliverytime

      t.timestamps
    end
  end
end
