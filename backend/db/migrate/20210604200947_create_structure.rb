class CreateStructure < ActiveRecord::Migration[6.1]
  def change
    create_table "activities", force: :cascade do |t|
      t.string "name"
      t.string "description"
      t.string "img_url"
      t.integer "rating"
      t.string "category"
      t.decimal "longitude", precision: 10, scale: 6
      t.decimal "latitude", precision: 10, scale: 6
      t.string "url"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  
    create_table "collaborators", force: :cascade do |t|
      t.bigint "trip_id", null: false
      t.bigint "user_id", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["trip_id"], name: "index_collaborators_on_trip_id"
      t.index ["user_id"], name: "index_collaborators_on_user_id"
    end
  
    create_table "days", force: :cascade do |t|
      t.bigint "trip_id", null: false
      t.string "name"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.integer "order"
      t.index ["trip_id"], name: "index_days_on_trip_id"
    end
  
    create_table "entries", force: :cascade do |t|
      t.string "name"
      t.bigint "day_id", null: false
      t.bigint "activity_id", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.integer "order"
      t.datetime "start_time"
      t.datetime "end_time"
      t.index ["activity_id"], name: "index_entries_on_activity_id"
      t.index ["day_id"], name: "index_entries_on_day_id"
    end
  
    create_table "ideas", force: :cascade do |t|
      t.bigint "activity_id", null: false
      t.bigint "trip_id", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["activity_id"], name: "index_ideas_on_activity_id"
      t.index ["trip_id"], name: "index_ideas_on_trip_id"
    end
  
    create_table "trips", force: :cascade do |t|
      t.bigint "user_id", null: false
      t.string "name"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.date "end_date"
      t.date "start_date"
      t.index ["user_id"], name: "index_trips_on_user_id"
    end
  
    create_table "users", force: :cascade do |t|
      t.string "username"
      t.string "email"
      t.string "profile_url"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "password"
    end
  
    create_table "votes", force: :cascade do |t|
      t.bigint "idea_id", null: false
      t.bigint "user_id", null: false
      t.index ["idea_id"], name: "index_votes_on_idea_id"
      t.index ["user_id"], name: "index_votes_on_user_id"
    end
  end
end
