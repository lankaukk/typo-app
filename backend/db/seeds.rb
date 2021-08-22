# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Element.destroy_all
# Composition.destroy_all

Element.create(characters: "2#4Fd:8", colors: "#6CFF0D, #6EB53F, #6501FF, #FFC612, #B59941", placements: "30px, 35px, 40px, 45px, 50px, 55px, 60px, 65px, 70px, 75px, 80px, 85px, 90px, 95px", font_family: "helvetica", composition_id: 1)

Element.create(characters: "H7*%fc3", colors: "#6CFF0D, #6EB53F, #6501FF, #FFC612, #B59941", placements: "30px, 35px, 40px, 45px, 50px, 55px, 60px, 65px, 70px, 75px, 80px, 85px, 90px, 95px", font_family: "helvetica", composition_id: 2)

fire = Composition.create(artist: "McKayla")
water = Composition.create(artist: "McKayla")
earth = Composition.create(artist: "Taurus")
air = Composition.create(artist: "Libra")

