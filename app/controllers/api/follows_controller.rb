class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
  end

  def create
    @follow = Follow.new(follow_params)


  end

  def destroy
    @follow.destroy
    respond_to do |format|
      format.html { redirect_to follows_url, notice: 'Follow was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def follow_params
      params.require(:follow).permit(:user_id, :follower_id)
    end
end
