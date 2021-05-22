# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

## Users
puts "Re-creating Users ..."
User.destroy_all
10.times do
  User.create!({
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: '123456',
    profile_url: Faker::Internet.url
  })
end

##Trips
puts "Re-creating Trips ..."
Trip.destroy_all

Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: 1
})

5.times do
  Trip.create!({
    name: Faker::Marketing.buzzwords,
    start_date: Faker::Date.backward(days: 5),
    end_date: Faker::Date.forward(days: 5),
    user_id: rand(2..User.count)
  })
end

##Activities
puts "Re-creating Activities ..."
Activity.destroy_all
10.times do
  Activity.create!({
    name: Faker::Restaurant.name,
    description: Faker::Restaurant.description,
    img_url: Faker::Internet.url,
    rating: 4,
    category: Faker::Restaurant.type,
    longitude: 13.4134995,
    latitude: 45.792650,
    url: Faker::Internet.url
  })
end


##Suggests
puts "Re-creating Suggests..."
Suggest.destroy_all

5.times do
  Suggest.create!({
    trip_id: 5,
    activity_id: rand(1..Activity.count)
  })
end

5.times do
  Suggest.create!({
    trip_id: 1,
    activity_id: rand(1..Activity.count)
  })
end