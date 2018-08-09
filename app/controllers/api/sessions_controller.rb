class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    # debugger
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid username and/or password"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: ["Signed out successfully"]
    else
      render json: ["No one is signed in"], status: 404
    end
  end
end
