# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

puts "Re-creating Users ..."
## Users
User.destroy_all
15.times do
  User.create!({
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: '123456',
    profile_url: 'https://example.org/'
  })
end
