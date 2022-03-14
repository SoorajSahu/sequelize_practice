# Sequelize Practice

Steps
1) Clone Repo
2) Create  database and config it
3) run command
```
npm i 
npx sequelize init
npx sequelize db:migrate
```



----------------------------

# Notes 

ORM - Object Relational Model

sequelize sequelize-cli 
nodemon

select _____________________

User table
-------------


User.findAll()  // select * from user
join insert update del

Model, Migration

Model - Table class 

user {
	name, email, age, city
}
1> npx sequelize init
2> npx sequelize model:create --name user --attributes name:string,age:integer,email:string
3> npx sequelize db:migrate