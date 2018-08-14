class Api::LikesController < ApplicationController
  def index
    if (params[:user_id])
      @likes = Like.where(user_id: params[:user_id])
    elsif (params[:post_id])
      @likes = Like.where(user_id: params[:post_id])
    end

    if @likes
      render :index
    else
      render json: "Does Not Exist", status: 404
    end
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by_params(like_params[:user_id], like_params[:post_id])

    if @like && @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
    def like_params
      params.require(:like).permit(:user_id, :post_id)
    end
end
