class ProjectsController < ApplicationController
  before_action :use_jsx_rendering_defaults

  def index
    @projects = Project.all
  end

  def new
    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      redirect_to projects_path, notice: "Project created successfully"
    else
      response.set_header("content-location", new_project_path)
      flash.now[:alert] = "There was an error creating your project"
      render :new  
    end
  end

  private

  def project_params
    params.expect(project: [:name, :description])
  end
end