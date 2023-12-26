class UsersController < ApplicationController
    def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: 'User not found' }, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      render json: { message: 'User deleted successfully' }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end


  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
