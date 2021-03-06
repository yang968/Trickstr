class Api::LikesController < ApplicationController
  def index
    @likes = nil
    @posts = nil
    if (params[:user_id])
      @likes = current_user.likes.pluck(:post_id)
      @posts = Post.where("id IN (?)", @likes)
    elsif (params[:post_id])
      @likes = Like.where(post_id: params[:post_id])
    end

    if @posts
      render :index
    else
      render json: "Does Not Exist", status: 404
    end
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])

    if @like && @like.destroy
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
    def like_params
      params.require(:like).permit(:user_id, :post_id)
    end
end
