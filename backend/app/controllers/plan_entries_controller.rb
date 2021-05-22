class PlanEntriesController < ApplicationController
  def Index
    entries = PlanEntry.all
    render json: PlanEntrySerializer.new(entries)
  end
end
