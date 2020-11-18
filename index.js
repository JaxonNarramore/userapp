// Add all models
const db = require('./models');

// Createa user inside of user table

// db.user.create({
//     firstName: 'Haley',
//     lastName: 'Narramore',
//     age: 21
// }).then(createdUser => {
//     console.log(createdUser.get());
// });

// Read from the users table

// db.user.findOne({
//     where: { firstName: 'Haley' }
// }).then(foundUser => {
//     console.log(foundUser.get());
// });

// // Find all users

// db.user.findAll().then(allUsers => {
//     console.log(allUsers);
//     console.log(allUsers[0].get());
// });

//Update a user

// db.user.update({
//     lastName: 'Smith'
// }, {
//     where: { firstName: 'Haley' }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged);
// });

//Delete a user 

// db.user.destroy({
//     where: { lastName: 'Smith' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted);
// });

// Dont need .then its just for you to see the console.log in node