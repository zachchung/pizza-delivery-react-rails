# Pizza Delivery App
https://pizza-delivery-react.herokuapp.com/

## Tech Stack
React for the front-end. 
Ruby on Rails for the back-end.

## Setup & Deployment
### Setup
Clone the project, and run on local machine
```bash
bundle install
yarn install
```

Once the project is made available on your local machine, create the database in PostgreSQL and populate structure and data.
```bash
rails db:create
rails db:migrate
```

### Deployment
Start the application with:
```bash
rails s
```