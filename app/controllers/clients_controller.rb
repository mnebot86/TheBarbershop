class ClientsController < ApplicationController
  before_action :authorize_request, only: [:verify]

  def index
    clients = Client.all
    render json: clients, status: :ok
  end

  def show
    client = Client.find(params[:id])
    render json: client
  end

  def create
    client = Client.new(client_params)
    if client.save
      token = create_token(client.id)
      render json: {
        client: client.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else
      render json: client.errors, status: 422
    end
  end

  #CUSTOM METHODS

  #LOGIN
  def login
    client = Client.find_by(email: client_login_params[:email])

    if client && client.authenticate(client_login_params[:password])
      token = create_token(client.id)
      render json: {
        client: client.attributes.except("password_digest"),
        token: token
        }, status: :ok
    else
      render json: { error: "unauthorized" }, status: :unauthorized
    end
  end

  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  private

  def client_params
    params.require(:client).permit(:name, :email, :password, :image_url)
  end

  def client_login_params
    params.require(:client).permit(:email, :password)
  end



  def create_token(id)
    payload = { id: id, exp: 24.hours.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
