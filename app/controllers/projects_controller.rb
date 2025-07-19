class ProjectsController < ApplicationController
  before_action :use_jsx_rendering_defaults

  def index
    @pagy, @projects = pagy(Project.recent, limit: 6)
  end

  def new
    @project = Project.new
    @tasks = @project.tasks.build
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
    params.expect(project: [:name, :description, tasks_attributes: [[:title, :alloted_time, :_destroy]]])
  end
end