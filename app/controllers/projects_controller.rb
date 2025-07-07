class ProjectsController < ApplicationController
  before_action :use_jsx_rendering_defaults
  allow_unauthenticated_access only: [:index, :new, :create]

  def index
    @projects = Project.all
  end

  def new
  end

  def create
    @project = Project.new(project_params)

    if @project.save!
      redirect_to projects_path, notice: "Project created successfully"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.expect(project: [:name, :description])
  end
end