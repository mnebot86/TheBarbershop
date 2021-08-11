class ServicesController < ApplicationController
before_action :get_service, only: [:show]

  def index
    services = Service.all
    render json: services
  end

  def show
    render json: @service, status: :ok
  end
  private 

  def service_params
    params.require(:service).permit(:name, :description, :price, :image_url)
  end

  def get_service
    @service = Service.find(params[:id])
  end
end
