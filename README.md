When developing, ensure that you have a very comprehensive api

1. First, refactor routes
2. Second, test routes
   1. Get route
   2. post route
   3. edit route
   4. delete route
3. Then, test database
   1. get data
   2. post data
   3. edit data
   4. delete data
4. integration testing
   1. route and data get
   2. route and data post
   3. route and data edit
   4. route and data delete

## ROUTES

#### GET /api/user/:userId

Request:

```

```

Response:

```
{
    id: ,
    email: string,
    password: string,
    spotify_id: string,
    spotify_access_token: string
}

```

- [ ] Make database

  - [ ] original
  - [ ] test database

- [ ] initialize knex (ensure that you fill in the knex configurations)
- [ ] Create knex migration
- [ ] Create knex seeds
- [ ] Create test environment (see tests/database/test_env)

  - [ ] getTestDatabase => returns knex(config)
  - [ ] initialize(database) => runs migration and seed files
  - [ ] cleanup => destroys database

- [ ] Create functions for database queries
- [ ] Create route tests
- [ ] write functions
