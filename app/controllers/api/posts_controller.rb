class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :index
  end

  # def show
  #   @post = Post.find(params[:post][:id])
  #  end

  def create
    @post = Post.new(post_params)
    if @post.save
      @post.contents.attach(params[:contents]) if params[:contents]
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:post][:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
    def post_params
      params.require(:post).permit(:user_id, :post_type, :title, :description, contents: [])
    end
end
