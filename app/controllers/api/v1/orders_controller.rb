class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    orders = Order.all
    render json: orders
  end

  def create
    order = Order.create(order_params)
    render json: order
  end

  private

  def order_params
    params.require(:order).permit(:success, :deliverytime)
  end
end
