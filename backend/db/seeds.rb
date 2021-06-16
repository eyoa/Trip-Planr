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

  User.create!({
    username: 'spongebob',
    email: 'pineapple@underthesea.com',
    password_digest: '$2a$12$83Gq2b64hSSBaL/IUleVw.ZiOQE8mAvTkEAULOJWc3Bwk2CZxxqTq',
    profile_url: '/img/profileImg/spongebob.jpg'
  })

  User.create!({
    username: 'batman',
    email: 'man@batcave.com',
    password_digest: '$2a$12$JvbkflQC3UQssymUVeAdC.7M/vp3j89RGvt6vemRryAyx7yZAzkVq',
    profile_url: '/img/profileImg/batman.jpg'
  })

  User.create!({
    username: 'spiderman',
    email: 'spidey@neighbourhood.com',
    password_digest: '$2a$12$ZUfDyxH5QPrBDY29kFEDB.zEMaM6pe/TFaOO3a1.CDS9mXCBIs2dq',
    profile_url: '/img/profileImg/spiderman.jpg'
  })

  User.create!({
    username: 'pikachu',
    email: 'mouse@ViridianForest.com',
    password_digest: '$2a$12$G9g3o/R7DqGLs9CtJF8e8OnOkWwFruZieFbhmGOxAECDOMXnrxPG.',
    profile_url: '/img/profileImg/Pikachu.jpg'
  })


  User.create!({
    username: 'joker',
    email: 'protagonist@P5.com',
    password_digest: '$2a$12$/aDz4xJ3m0CmE.OeqH4l1e.CmCckQZM.MIoMY2R8qCY6H2RPbWUvu',
    profile_url: '/img/profileImg/Joker.jpg'
  })



##Trips
puts "Re-creating Trips ..."
Trip.destroy_all

trip1 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: rand(1..User.count)
})

trip2 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: rand(1..User.count)
})

trip3 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: rand(1..User.count)
})

trip4 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: rand(1..User.count)
})

trip5 = Trip.create!({
  name: Faker::Marketing.buzzwords,
  start_date: Faker::Date.backward(days: 5),
  end_date: Faker::Date.forward(days: 5),
  user_id: rand(1..User.count)
})



##Activities

imgArr = ['/img/rom.jpeg', '/img/bbq.jpg', '/img/aquarium.jpg', '/img/biodome.jpg', '/img/casa.jpg', '/img/church.jpeg', '/img/CN-Tower-Toronto.jpg', '/img/dome.jpg', '/img/fountian.jpg', '/img/ice.jpeg', '/img/niagaraFalls.jpg', '/img/poutine.jpeg', '/img/sushi.jpg']

puts "Re-creating Activities ..."
Activity.destroy_all
10.times do
  Activity.create!({
    name: Faker::Restaurant.name,
    description: Faker::Restaurant.description[0...140],
    img_url: imgArr[rand(0...imgArr.length - 1)],
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
  name: 'July 1st (Fri)',
  order: 0
})

t1d2 = trip1.days.create!({
  name: 'July 2nd (Sat)',
  order: 1
})

t1d3 = trip1.days.create!({
  name: 'July 3rd (Sun)',
  order: 2
})

t2d1 = trip2.days.create!({
  name: 'Aug 16th (Wed)',
  order: 0
})
t2d2 = trip2.days.create!({
  name: 'Aug 17th (Thr)',
  order: 1
})

t3d1 = trip3.days.create!({
  name: 'Sept 4th (Sat)',
  order: 0
})
t4d1 = trip4.days.create!({
  name: 'Oct 31st (Fri)',
  order: 0
})
t5d1 = trip5.days.create!({
  name: 'June 20th (Sat)',
  order: 0
})


##entries
puts "Re-creating Entries..."
Entry.destroy_all
t1d1.entries.create!({
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

t1d2.entries.create!({
  order: 0,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t1d1.entries.create!({
  order: 0,
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

t1d3.entries.create!({
  order: 0,
  day_id: 1,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})

t2d1.entries.create!({
  order: 0,
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

t2d2.entries.create!({
  order: 0,
  activity_id: rand(1..Activity.count),
  start_time: Faker::Time.forward(days: 2,  period: :morning, format: :short),
  end_time: Faker::Time.forward(days: 2,  period: :afternoon, format: :short)
})