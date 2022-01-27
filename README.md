# Thunk-app
creating search application for GitHub users using thunk

egistration page that will allow a user to register with the necessary details mentioned in the API docs.
When the user submits the registration form, it must POST the data to the api and receive a 200 status code. It must also verify that all fields have been filled in.
If it receives an error status code of 401 it must tell the user an error has occurred.
Part-2
Create a route called login
Create a simple login page that allows a user to enter their username and password.
When the user submits their login details you must send the data to the api.
If the login data is correct, you must display all the profile information. You must also hide the login page elements.
On success move to another route /dashboard
Part-3
In the /dashboard page
Create a search bar
User should be able to search for github users
Create a dummy profile page so that you can test this out
Bonus:
Show results with 5 users per page (by default github gives 30 override it: ?page=3&per_page=100 is an example of how you can pass query params )
