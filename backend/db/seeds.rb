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

trip1 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: 1
})

trip2 = Trip.create!({
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
    img_url: '/img/rom.jpeg',
    rating: rand(1..5),
    category: Faker::Restaurant.type,
    longitude: 13.4134995,
    latitude: 45.792650,
    url: Faker::Internet.url
  })
end


#Ideas
puts "Re-creating ideas..."
Idea.destroy_all

5.times do
  Idea.create!({
    trip_id: rand(1..Trip.count),
    activity_id: rand(1..Activity.count)
  })
end

5.times do
  Idea.create!({
    trip_id: 1,
    activity_id: rand(1..Activity.count)
  })
end

##days
puts "Re-creating Days..."

Day.destroy_all

t1d1 = trip1.days.create!({
  name: 'Day 1',
  order: 1
})

t1d2 = trip1.days.create!({
  name: 'Day 2',
  order: 2
})

t1d3 = trip1.days.create!({
  name: 'Day 3',
  order: 3
})

t2d1 = trip2.days.create!({
  name: 'Day 1',
  order: 1
})
t2d2 = trip2.days.create!({
  name: 'Day 2',
  order: 2
})


##entries
puts "Re-creating Entries..."
Entry.destroy_all
t1d1.entries.create!({
  order: 3,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d2.entries.create!({
  order: 2,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d2.entries.create!({
  order: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d1.entries.create!({
  order: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d1.entries.create!({
  order: 2,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d3.entries.create!({
  order: 1,
  day_id: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t2d1.entries.create!({
  order: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t2d2.entries.create!({
  order: 2,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t2d2.entries.create!({
  order: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})