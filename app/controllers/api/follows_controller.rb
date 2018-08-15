class Api::FollowsController < ApplicationController
  def index
    # Look up user's id in follower_id to find the accounts the user follows
    @follows = Follow.where(follower_id: follow_params[:follower_id])

    # Look up user's id in user_id to find the accounts that follow the user
    @followers = Follow.where(user_id: follow_params[:user_id])

    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])

    if @follow && @follow.destroy
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
    def follow_params
      params.require(:follow).permit(:user_id, :follower_id)
    end
end
