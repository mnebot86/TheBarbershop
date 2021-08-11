# TheBarbershop

## Overview
TheBarberShop is an app using React on Rails. I was inspired to created this for a friend's Barber Shop. A user will be able to create a profile and have the ability to select services. They can also create, edit , and delete appointment. 

## MVP
- User can login and out
- User can select a service
- User can create a booking 
- User can edit or delete a booking

## Libraries and Dependencies
| Library | Description |                      
| :-------: | :------------: |
| React | npm i in the client folder |
| React Router | npm i react-router-dom |
| axios | npm i |
| rails | bundle |
| bcrypt | uncomment in Gemfile then run bundle | 

## Client (Front End)

### WireFrames
[TheBarberShop.pdf](https://github.com/mnebot86/TheBarbershop/files/6970124/MetroCut.pdf)
<img width="423" alt="new wire" src="https://user-images.githubusercontent.com/85528188/129070619-a62b1332-9ca7-40cc-b08e-eb20ee4090f4.png">

### Component Tree

<img width="1305" alt="Screen Shot 2021-08-11 at 12 23 13 PM" src="https://user-images.githubusercontent.com/85528188/129066542-fcde20a5-0c02-45f2-8a94-a63e0c8177b2.png">

### Component File Structure
```structure
src
|_components
    |_Layout
    |_Nav
    |_Footer
    |_Service Menu
    |_Edit Form

|_screens
    |_Landing Page
    |_sign in
    |_sign up
    |_home
    |_service
    |_service detail
    |_create appointment
    |_client profile
    |_booking edit

|_service
  |_apiConfig
  |_client
  |_services
  |_booking    
```


  ### TimeFrame

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| :----| :--------: | :-----------: | :-----------: | :-----------------: |
| WireFrame| H | 3 | 2 | 2 |
| ERD | H | 1.5 | 1.5| 1.5|
| Component Chart | H | 3.5 | 1.5 | 1.5 | 
| File Structures | H | 1 | 1 | 1 |
| Model | H | 2.5 | 0 | 0 |
| Seeds | H | 2.5 | 0 | 0 |
| Controllers | H | 3 | 0 | 0|
| Routes | H | 2.5 | 0 | 0 |
| Postman | H | 1.5 | 0 | 0 |
| Screens | H | 2 | 0 | 0 |
| Components| H| 1.5 | 0 | 0|
| Services | H | 3 | 0 | 0 |
| Auth | H | 3 | 0 | 0|
| Testing | H | 3 | 0 | 0 |
| Debugging | H | 3 | 0 | 0 |
| Basic Css | H | 3 | 0 | 0 |
| Deployment | H | 2.5 | 0 | 0 |
| Total |  40 |


## Server (Back End)

### ERD

<img width="714" alt="New ERD" src="https://user-images.githubusercontent.com/85528188/129071060-56b478c1-c04c-4ac8-b36a-3efbe4c869fb.png">


### Post-MVP
- Add a Barbers Table
- Admin Auth for Barbers Only
- Check Out Cart 
- Barbers reviews
- Live rendering Calender
- Add Animation Effect to each page

### Code Showcase


<<<<<<< HEAD
### Code Issues & Resolutions ``
=======
### Code Issues & Resolutions
>>>>>>> 0860b84702d18ad0e111ec199e9a78690e2cfef9
