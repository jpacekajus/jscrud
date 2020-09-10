# jscrud

Example Node.js application for listing, creating and deleting DB records

# Dependencies

```
docker-ce
docker-compose - version 3+
```

# How to run

Simply execute the following command in application directory:
```
docker-compose up
```
Or for detached mode:
```
docker-compose up -d
```

# How to stop and remove resources

Simply execute the following command in application directory:
```
docker-compose down
```
# How to use

App has the following endpoints:
```
/list - lists all people details from database using GET request
/create - creates new person details and inserts into database using POST request
/delete/<id> - deletes person by corresponding ID using DELETE request
```
# How to modify

In order to change environment variables, simply edit docker-compose.yml file

