# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "test1", 
    password_digest: "test", 
    email: "test@example.com", 
    phone:123)

# User.create(username: "test2", 
#     password_digest: "test", 
#     email: "test@example.com", 
#     phone:123)

Task.create(user_id: 1, 
    title: "test 1", 
    date_to_do: "2020/05/27",
    status: false)

Task.create(user_id: 1, 
    title: "test 2", 
    date_to_do: "2020/05/27",
    status: false)