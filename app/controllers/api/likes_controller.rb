class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def show
  end

  def create
    @like = Like.new(like_params)


  end

  def destroy

  end

  private
    def like_params
      params.require(:like).permit(:user_id, :post_id)
    end
end
