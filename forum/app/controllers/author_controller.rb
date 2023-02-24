class AuthorController < ApplicationController
  def index
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.new(username: "...", email: "...", password: "...")

    if @author.save
      redirect_to @author
    else
      render :new
    end
  end

  def login

end
