class Api::PostsController < ApplicationController

  def index
    @posts = nil
    if (params[:user_id])
      @posts = current_user.posts
    else
      @posts = Post.all
    end
    @current_user = current_user
    @reblogs = {}
    @posts.each do |post|
      @reblogs[post.id] = Post.where(reblog_id: post.id).count
    end
    @likes = Like.where(user_id: @current_user.id)
    follow_ids = current_user.follows.map { |e| e.user_id }
    @follows = User.where("id IN (?)", follow_ids)
    follower_ids = current_user.followers.map { |e| e.follower_id }
    @followers = User.where("id IN (?)", follower_ids)
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
      params.require(:post).permit(:user_id, :post_type, :title, :description, :reblog_id, contents: [])
    end
end
