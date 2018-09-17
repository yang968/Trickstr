class Api::PostsController < ApplicationController

  def index
    @posts = nil
    if (params[:user_id])
      @posts = current_user.posts
    else
      @posts = Post.all
    end
    @current_user = current_user
    @likes = Like.where(user_id: @current_user.id)
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
    @post = Post.find(params[:id])

    if @post.update(post_params)
      if params[:contents]
        new_contents = params[:contents].select { |content| content != "[object Object]" }
        @post.contents.attach(new_contents)
      end
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
