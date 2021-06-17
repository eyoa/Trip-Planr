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

Activity.create!({
  name: 'Royal Ontario Museum',
  short_description: 'Sprawling natural history & world cultures galleries, plus dinosaurs in the Libeskind crystal wing.',
  long_description: "The Royal Ontario Museum (ROM; French: Musée royal de l'Ontario) is a museum of art, world culture and natural history in Toronto, Ontario, Canada. It is one of the largest museums in North America and the largest in Canada. It attracts more than one million visitors every year, making the ROM the most-visited museum in Canada. The museum is north of Queen's Park, in the University of Toronto district, with its main entrance on Bloor Street West. Museum subway station is named after the ROM and, since a 2008 renovation, is decorated to resemble the institution's collection.

  Established on 16 April 1912 and opened on 19 March 1914, the museum has maintained close relations with the University of Toronto throughout its history, often sharing expertise and resources.The museum was under the direct control and management of the University of Toronto until 1968, when it became an independent Crown agency of the Government of Ontario. Today, the museum is Canada's largest field-research institution, with research and conservation activities around the world.",
  price_rating: 3,
  img_url: imgArr[0],
  rating: 5,
  category: 'Museum',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://rom.on.ca'
})

Activity.create!({
  name: 'Blackjack BBQ',
  short_description: 'A barbecue restaurant is a restaurant that specializes in barbecue-style cuisine.',
  long_description: "Here at Blackjack BBQ we're all about serving up your BBQ fusion favourites with a fun twist.  From our crispy Korean BBQ style fried chicken to our smokey Louisiana baby back pork ribs, we guarantee we'll have something for every kind of BBQ lover.  Need to see it to believe it? Stop by one of our two Toronto locations!",
  price_rating: 2,
  img_url: imgArr[1],
  rating: 4,
  category: 'BBQ',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://www.blackjackbbq.ca/'
})

Activity.create!({
  name: 'Vancouver Aquarium',
  short_description: 'Popular kid-friendly attraction showcases local & exotic aquatic life with a focus on conservation.',
  long_description: "The Vancouver Aquarium is a public aquarium located in Stanley Park in Vancouver, British Columbia, Canada. In addition to being a major tourist attraction for Vancouver, the aquarium is a centre for marine research, ocean literacy education, conservation and marine animal rehabilitation. The Vancouver Aquarium was one of the first facilities to incorporate professional naturalists into the galleries to interpret animal behaviours. Prior to this, at the London Zoo Fish House, naturalists James S. Bowerbank, Ray Lankester, David W. Mitchell and Philip H. Gosse (the creator of the word aquarium) had regularly held open house events, but the Vancouver Aquarium was the first to employ educational naturalists on a full-time basis. Aquarium research projects extend worldwide and include marine mammal rescue and rehabilitation.",
  price_rating: 3,
  img_url: imgArr[2],
  rating: 5,
  category: 'Aquarium',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://www.vanaqua.org/'
})

Activity.create!({
  name: 'Biodome',
  short_description: 'Former Olympics velodrome housing replicas of 4 ecosystems & related species of animals & plants.',
  long_description: "The Montreal Biodome is a facility located at Olympic Park in the Mercier–Hochelaga-Maisonneuve neighbourhood of Montreal, Quebec, Canada, that allows visitors to walk through replicas of four ecosystems found in the Americas. The building was originally constructed for the 1976 Olympic Games as a velodrome. It hosted both track cycling and judo events. Renovations on the building began in 1989 and in 1992 the indoor nature exhibit was opened.

  The Montreal Biodome is one of four facilities that make part of the largest natural science museum complex in Canada, Space for Life, which also includes the Montreal Insectarium, Montreal Botanical Garden, and Rio Tinto Alcan Planetarium. It is an accredited member of both the Association of Zoos and Aquariums (AZA) and Canada's Accredited Zoos and Aquariums Association (CAZA).",
  price_rating: 3,
  img_url: imgArr[3],
  rating: 5,
  category: 'Museum',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://espacepourlavie.ca/biodome'
})

Activity.create!({
  name: 'Casa Loma',
  short_description: 'Grand 18th-century castle featuring regular tours & gardens that are open seasonally.',
  long_description: "A prime example of modern Toronto’s commitment to its rich history, Casa Loma was first built in 1914 by financier Sir Henry Pellatt. The castle located in midtown Toronto, is now owned by the City of Toronto and is regarded as a treasured heritage landmark. Today, Casa Loma is one of Toronto’s top tourist attractions and hospitality venues. Each year over 650,000 visitors tour Casa Loma and the estate gardens. A perfect backdrop for special occasions, Casa Loma also plays host to over 250 private events annually. The unique architecture has also made it a highly desirable location for film, television and photo shoots.",
  price_rating: 3,
  img_url: imgArr[4],
  rating: 5,
  category: 'Museum',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://casaloma.ca/'
})


Activity.create!({
  name: 'CN Tower',
  short_description: 'Landmark, over 553-metre tower featuring a glass floor & a revolving eatery with panoramic views.',
  long_description: "The CN Tower is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower located in the downtown core of Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976. Its name CN originally referred to Canadian National, the railway company that built the tower. Following the railway's decision to divest non-core freight railway assets prior to the company's privatization in 1995, it transferred the tower to the Canada Lands Company, a federal Crown corporation responsible for real estate development.

  The CN Tower held the record for the world's tallest free-standing structure for 32 years until 2007 when it was surpassed by the Burj Khalifa and was the world's tallest tower until 2009 when it was surpassed by the Canton Tower. It is now the ninth tallest free-standing structure in the world and remains the tallest free-standing structure on land in the Western Hemisphere. In 1995, the CN Tower was declared one of the modern Seven Wonders of the World by the American Society of Civil Engineers. It also belongs to the World Federation of Great Towers.
  
  It is a signature icon of Toronto's skyline and attracts more than two million international visitors annually.",
  price_rating: 4,
  img_url: imgArr[6],
  rating: 4,
  category: 'Museum',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://www.cntower.ca/'
})


Activity.create!({
  name: 'La Banquise',
  short_description: 'All-night diner for Québécois grub & local microbrews, with many poutine options & hefty breakfasts.',
  long_description: "All-night diner for Québécois grub & local microbrews, with many poutine options & hefty breakfasts. Poutine is a Québécois dish made of fresh-cut french fries topped with cheese curds and gravy. It first appeared in 1950s rural Quebec snack bars. It was widely popularized across Canada and beyond in the 1990s. Poutine may be found everywhere from fine dining menus at top restaurants to fast-food chains including McDonald’s and Burger King. It has become an iconic symbol of Québécois cuisine and culture.",
  price_rating: 1,
  img_url: '/img/poutine.jpeg',
  rating: 5,
  category: 'Casual Restaurant',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'http://labanquise.com/'
})


Activity.create!({
  name: "Yuji's from Japan",
  short_description: 'This simple, minimalist Japanese restaurant with sushi, sashimi & hot entrees also offers omakase.',
  long_description: "One of the best sushi places in Vancouver. Just like if you were in Japan",
  price_rating: 3,
  img_url: 'img/yuji.png',
  rating: 5,
  category: 'Japanese Restaurant',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'http://www.yujis.ca/'
})


Activity.create!({
  name: 'Saku',
  short_description: 'Known for tonkatsu (fried pork cutlet) & soba in a minimalist setting with beer, wine & sake.',
  long_description: "Known for tonkatsu (fried pork cutlet) & soba in a minimalist setting with beer, wine & sake. Crunchy and delicious!",
  price_rating: 2,
  img_url: 'img/saku.jpeg',
  rating: 5,
  category: 'Japanese Restaurant',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'https://www.sakuvancouver.com/'
})


Activity.create!({
  name: 'Hida Takayama Ramen',
  short_description: 'The Hidden Ramen Shop',
  long_description: "The hidden ramen shop. Hida Takayama ramen was created by Mr. Mitsuru Asaoka. He wanted to invent a twist on the classic Hida Takayama ramen, a light chicken based soy sauce flavored broth with thin, fresh, curvy noodles. This is a famous gourmet dish in Takayama City in Gifu Prefecture, Japan. What makes this classic ramen unique is that the broth is made in one big pot. Traditionally the Ramen sauce and paste are made separately and combined just before serving. Our recipe allows for the flavors to blend together longer allowing for a richer flavor.",
  price_rating: 3,
  img_url: 'img/ramen.jpg',
  rating: 5,
  category: 'Japanese Restaurant',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'http://hidaramen.com/'
})


Activity.create!({
  name: "Musée des Beaux-Arts de Montréal",
  short_description: 'Museum of Fine Arts',
  long_description: "A must for art-lovers, the Museum of Fine Arts has amassed centuries' worth of paintings, sculpture, decorative arts, furniture, prints, drawings and photographs. European heavyweights include Rembrandt, Picasso and Monet, but the museum really shines when it comes to Canadian art. Highlights include works by Prudence Heward and Paul Kane, landscapes by the Group of Seven and abstractions by Martha Townsend and Jean-Paul Riopelle. Temporary exhibits are often exceptional and have included a showcase on French fashion designer Thierry Mugler.

  There is also a fair amount of Inuit and indigenous artifacts and lots of fancy decorative knickknacks, including Japanese incense boxes and Victorian chests.",
  price_rating: 3,
  img_url: '/img/beaux.jpg',
  rating: 4,
  category: 'Museum',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: 'www.mbam.qc.ca'
})

Activity.create!({
  name: 'Canal de Lachine',
  short_description: 'A picturesque canal with 14km-long cycling and pedestrian pathway',
  long_description: "A perfect marriage of urban infrastructure and green civic planning: a 14km-long cycling and pedestrian pathway, with picnic areas and outdoor spaces. Since the canal was reopened for navigation in 2002, flotillas of pleasure and sightseeing boats glide along its calm waters. Old warehouses converted into luxury condos line the canal near Atwater market. The Lachine Canal was originally built in 1825 as a means of bypassing the treacherous Lachine Rapids on the St Lawrence River.

  It’s well worth hiring a bike or in-line skates (kid sizes and baby trailers available) and heading out along the canal path but try to avoid summer weekends, when it’s particularly crowded. For a canalside spin, you can hire bikes from Ça Roule Montréal in Old Montréal or My Bicyclette near the Atwater market. Kayaks and boats are also available at nearby H2O Adventures. For a leisurely boat ride where someone else does the work, take a ride with Le Petit Navire.",
  price_rating: 0,
  img_url: '/img/lachine.jpg',
  rating: 5,
  category: 'Attraction',
  longitude: 13.4134995,
  latitude: 45.792650,
  url: ''
})


# Activity.create!({
#   name: 'Royal Ontario Museum',
#   short_description: 'Sprawling natural history & world cultures galleries, plus dinosaurs in the Libeskind crystal wing.',
#   long_description: "",
#   price_rating: 3,
#   img_url: imgArr[0],
#   rating: 5,
#   category: 'Museum',
#   longitude: 13.4134995,
#   latitude: 45.792650,
#   url: 'rom.on.ca'
# })


#Random activies
# 10.times do
#   Activity.create!({
#     name: Faker::Restaurant.name,
#     short_description: Faker::Restaurant.description[0...100],
#     long_description: Faker::Restaurant.description,
#     price_rating: rand(1...5),
#     img_url: imgArr[rand(0...imgArr.length - 1)],
#     rating: rand(1..5),
#     category: Faker::Restaurant.type,
#     longitude: 13.4134995,
#     latitude: 45.792650,
#     url: Faker::Internet.url
#   })
# end


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