# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_15_125908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.string "short_description"
    t.string "img_url"
    t.integer "rating"
    t.string "category"
    t.decimal "longitude", precision: 10, scale: 6
    t.decimal "latitude", precision: 10, scale: 6
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "long_description"
    t.integer "price_rating"
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
    t.datetime "start_time", default: "2021-06-18 14:00:00"
    t.datetime "end_time", default: "2021-06-19 16:00:00"
    t.string "notes"
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
    t.string "password_digest"
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "idea_id", null: false
    t.bigint "user_id", null: false
    t.index ["idea_id"], name: "index_votes_on_idea_id"
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

end
