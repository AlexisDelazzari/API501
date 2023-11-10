# Awesome Project Build with TypeORM
Currently this is a test project to implement typeorm with express and mysql that not pokemon related

## How this project was created:

1. npm i -g typeorm
2. typeorm init --database mysql --express
3. npm i --save-dev @types/express

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Stucture of the project

### Entities

Entities are the classes that map to database tables.
They are the most important part of TypeORM, since they are responsible for storing and retrieving data. 
Entities are defined by adding a @Entity() decorator to a class. 
The class name will be the table name.

### Repositories

Repositories are responsible for fetching data from the database.
They are defined by extending the Repository class.
Repositories are used to perform operations on entities.

### Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.
The class name will be the base route for all the routes defined inside the controller.

### Routes

Routes are defined inside controllers.
They are responsible for handling incoming requests and returning responses to the client.

### Credentials

- [x] [Alexis De-lazzari] portfolio : https://alexisdelazzari.fr/



