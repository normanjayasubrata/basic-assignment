let homePage = ` <html> <head> <title> Home Page </title> </head> <body> <h1>Welcome to Home Page</h1> <form action="/create-user" method="POST"> <input type="text" name="username" id="username"> <input type="submit" value="submit"> </form> </body> </html> `;
let userPage = ` <html> <head> <title> User Page </title> </head> <body> <h1>User Page</h1> <h3>List Of Users</h3> <ul> <li>Norman</li> <li>Max</li> </ul> </body> </html> `;
let createUser = ` <html> <head> <title> Create User Page </title> </head> <body> <h1>User Created</h1> </body> </html> `;
module.exports = {
    homePage,
    userPage,
    createUser
};