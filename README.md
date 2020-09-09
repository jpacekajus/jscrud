# jscrud

Example Node.js application for listing, creating and deleting DB records

#Dependencies

```
docker
docker-compose
```

#How to run

Simply execute the following command in application directory:
```
docker-compose up
```

#How to use

App has the following endpoints:
```
/list - list all people from DB using GET request
/create - creates new person with provided details using POST request
/delete/<id number> - deletes person with specified ID number, f.e. /delete/5 will remove user with ID 5
```
