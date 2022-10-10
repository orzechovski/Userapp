# Userapp

[Userapp open](https://orzechovski.github.io/Userapp/)

## 📜 Description

#### What application does?

Application provides an opportunity for searching thrue table of users, and also adding or edit them. Application allows for searching for content by typing in input on navigation section and sorting displayed users by name.

#### 🧩 Used technologies

For bundler in my project I used Vite instead of webpack(CRA). Fetching data is made by axios. To handle state of the app i used Redux with redux toolkit to handle creating reducers nad combining different reducers in one store. Redux thunk was used to provides more elegant functionallity while using asycnhronus query(axios) in components. React-router-dom has been used for routing.

#### 🪛 Faced challenges

When creating new user we cannot really see new user who has been added because posting to server is faked and user list on main page is initializing everytime we switch betweent routes. This can be fixed probably by fetching users in other way then in useEffect in userList component(like any other component that is not routed).
There is no validation in form posting data, I wasn't really sure it is necessery in this situations.
I regret not using Ts in this project.

## 🎰 Others

Data is fetched from [{json}Placeholder](https://jsonplaceholder.typicode.com/)
