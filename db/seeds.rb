# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Clients

eric = Client.create(name: "Eric", email: "eric@mail.com", password_digest: "12345", image_url: "http://img.izismile.com/img/img9/20160826/640/guy_got_drunk_and_bought_something_he_never_would_have_thought_to_buy_640_01.jpg")
bill = Client.create(name: "Bill", email: "bill@mail.com", password_digest: "12345", image_url: "https://i.pinimg.com/originals/55/de/7a/55de7a6bb9e994d30d132e9d4b154855.jpg")
dave = Client.create(name: "Dave", email: "Dave@mail.com", password_digest: "12345", image_url: "https://i.redd.it/8fqzw8yxpkp11.jpg")
ryan = Client.create(name: "Ryan", email: "Ryan@mail.com", password_digest: "12345", image_url: "https://media-cdn.tripadvisor.com/media/photo-s/11/0e/2e/36/some-random-cute-chinito.jpg")




#Services

Service.create(name: "Standard Haircut", description: "Standard men’s haircut, using clippers and scissors", price: 59, image_url: "https://www.ties.com/blog/wp-content/uploads/2018/07/Mens-Haircuts-2018-The-Traditional-Mens-Haircut.jpg")
Service.create(name: "Clipper Cut", description: "The Good Ol’ Buzz Cut. Pick one number between 0-4 for a buzz all over", price: 25, image_url:"https://i.pinimg.com/originals/05/7b/06/057b06bb23fabdfc3c94ad647ec36d00.jpg") 
Service.create(name: "Skin Fade", description: "Haircut starting from either skin, triple zero or zero", price: 65, image_url:"http://coolmenshair.com/wp-content/uploads/18.-skin-faded-buzz-cut.jpg") 
Service.create(name: "Skin Fade Sides", description: "Haircut starting from either skin, triple zero or zero – sides only", price: 54, image_url: "https://menshairstyletips.com/wp-content/uploads/2017/09/3-High-Top-with-Low-Fade.jpg" )
Service.create(name: "Hot Towel Head Shave", description: "Traditional Cut Throat razor head shave with hot / cold towels plus moisturizing", price: 60, image_url: "https://i.ytimg.com/vi/eIKSxECrgak/maxresdefault.jpg") 
Service.create(name: "Hot Towel Face Shave", description: "Traditional Cut Throat razor face shave with hot / cold towels plus moisturizing", price: 65, image_url: "http://static1.squarespace.com/static/50ab98b3e4b00ef29d02dcc8/53bafc8ce4b0f1e16dd7055c/53bf13a5e4b0fd3182dc4a3a/1499719857349/?format=1000w" )
Service.create(name: "Bread Trim", description: "A service for short beards/stubble. Choose a grade all over from 0–4 and then have the cheeks razored", price: 30, image_url: "https://statestreetbarbers.com/product_images/uploaded_images/trimming-beard.jpg" )
Service.create(name: "Bread Styling", description: "A service for longer and more styled beards – sculpt the beard, neckline foiled, finished with hot towel and cheekbones razored", price: 40, image_url: "https://i.pinimg.com/564x/12/44/ec/1244ec58b9b4eff8b40199d6e26e57d9.jpg" )
Service.create(name: "Hair Braiding", description: "A service for longer hair – many style to choose from", price: 75, image_url: "https://i.pinimg.com/474x/33/1f/2e/331f2e89ef100de200e1863ba78b98a5.jpg")
#Booking

Booking.create(date: '2021-08-11 17:00:00.000', client_id: eric[:id], service_id: 1)
Booking.create(date: '2021-08-12 03:30:00.000', client_id: bill[:id], service_id: 2)
Booking.create(date: '2021-08-13 04:45:00.000', client_id: dave[:id], service_id: 3)
Booking.create(date: '2021-08-14 09:45.00.000', client_id: ryan[:id], service_id: 4)
