import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 1,
    username: 'sambua',
    email: 'test@example.com',
    password_has: '12345#$'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return +new Date();
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
	user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserValidationLength = 3;
        if (user.username.length < minUserValidationLength) {
          reject(`First Name must be at least ${minUserValidationLength} characters.`);
        }

        if (user.email.length < minUserValidationLength) {
          reject(`Last Name must be at least ${minUserValidationLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToDelete = users.findIndex(user => {
          user.userId == userId;
        });
        users.splice(indexOfUserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default UserApi;
