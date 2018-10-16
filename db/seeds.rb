# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
category_list = {
    "Housing" => {
    },
    "Utilities" => {
    },
    "Food and Groceries" => {
    },
    "Entertainment" => {
    },
    "Personal Care" => {
    },
    "Other" => {
    }
  }

  category_list.each do |name, category_hash|
  p = Category.new
  p.name = name
  p.save
end
