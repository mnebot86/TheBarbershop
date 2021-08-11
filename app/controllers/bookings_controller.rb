class BookingsController < ApplicationController
before_action :get_booking, only: [:show, :update, :destroy]

  def index
    bookings = Booking.all
    render json: bookings
  end

  def show
    render json: @booking, include: :client
  end

  def create
    booking = Booking.new(booking_params)
    if booking.save
      render json: booking, status: :created
    else
      render json: booking.errors, status: :unprocessable_entity
    end
  end

  def update
    if @booking.update(booking_params)
      render json: @booking, status: :ok
    else
      render json: booking.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @booking.destroy
    render json: "DELETED"
  end

  private

  def booking_params
    params.require(:booking).permit(:date, :client_id, :service_id)
  end

  def get_booking
    @booking = Booking.find(params[:id])
  end
end
