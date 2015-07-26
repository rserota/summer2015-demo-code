Why use a database?
Databases provide a fast, efficient, precise way to access data. We could just use fs.readFile, fs.writeFile, but that would be VERY slow. 
Particularly good for working with small pieces of data, like strings, numbers, and objects, that change often. Not so good for larger pieces of data that don't change, like images and songs. 

Traditionally, almost all databases were SQL databases.
- Store data in a flat, tabular system, like an excel spreadsheet.
- Demands a very structured schema for all data
- uses Structured Query Language for accessing data. Though nowadays, libraries exist that provide APIs in other languages, which is great for security. 
- Most commonly scales vertically, adding more power to the same machine. Scaling horizontally is a challenge.
- Examples: MySQL (wordpress), postgreSQL

Nowadays, we have NoSQL, which is just .... not SQL.
- Many different styles (document-based is most common, also graph-based), but generally less restrictive than SQL to overcome limitations of SQL regarding scaling and replication
- Not entirely schemaless. Schema is enforced by application, not the database itself. Disorganized data is useless. Does support dynamic data, like javascript objects. 
- Easily scales horizontally by adding more machines.
- Typically faster than SQL databases.
- Always used with an API to access data. Not especially prone to injection (exception: mongoose 'where' clause)

Mongo: HuMONGOus database.
- Written in C++, so it's really fast.
- Flat file database, meaning all data is stored in a single file.
- Documents are stored in JSON-like sets (BSON, more specifically.)

Using Mongo
- Install with homebrew (should already be installed)
- start mongo server daemon with `sudo mongod`
- open a new tab, enter mongo shell with `mongo`
- show databases with `show dbs`
- select a database with `use <dbname>`. It will be created if/when necessary.
- typically, each project has one database.
- see available collections with `show collections` (explain collections vs tables)
> db.kids.find()
> db.kids.insert({name:'Alice',job:'dog walker'})
> db.kids.insert({name:'Bob',job:'baby sitter'})
> db.kids.insert({name:'Carlos',job:'dog walker'})
> db.kids.insert({name:'Dan',job:'baby sitter'})
> db.kids.find({job:'dog walker'}).pretty()
> db.kids.findOne({job:'dog walker'}).pretty()
> db.kids.update({job: 'dog walker'}, {name : 'Alice', job : 'baby walker'})
> db.kids.update({name:'Alice'},{$set:{age:12}})
> db.kids.update({job:'baby sitter'},{$set:{age:12}}, {multi:true})
- other operators: $push, $pull, $inc
> db.collection.remove({name: 'Alice'})







