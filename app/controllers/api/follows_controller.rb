class Api::FollowsController < ApplicationController
  def index
    # Look up user's id in follower_id to find the accounts the user follows
    follow_ids = current_user.follows.map { |e| e.user_id }
    @follows = User.where("id IN (?)", follow_ids)

    # Look up user's id in user_id to find the accounts that follow the user
    follower_ids = current_user.followers.map { |e| e.follower_id }
    @followers = User.where("id IN (?)", follower_ids)

    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      @follows = current_user.follows
      @followers = current_user.followers
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(user_id: params[:id], follower_id: current_user.id)

    if @follow && @follow.destroy
      @follows = current_user.follows
      @followers = current_user.followers
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
    @follow = Follow.find_by(user_id: params[:id], follower_id: current_user.id)

    if @follow
      render json: true
    else
      render json: false
    end
  end

  private
    def follow_params
      params.require(:follow).permit(:user_id, :follower_id)
    end
end
