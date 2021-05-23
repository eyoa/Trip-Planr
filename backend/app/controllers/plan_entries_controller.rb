class PlanEntriesController < ApplicationController
  def index
    entries = PlanEntry.all
    render json: PlanEntrySerializer.new(entries)
  end
end
