import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: 1,
    status: 1,
    title: "Item name",
    slug: "item-name",
    price: 2.5,
    excerpt: "Short description of item",
    description: "Long description of item"
  },
  {
    id: 2,
    status: 1,
    title: "Second item",
    slug: "second-item-name",
    price: 5.5,
    excerpt: "Short description of second item",
    description: "Long description of second item"
  }
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return +new Date();
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = item.findIndex(a => a.id == item.id);
          item.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new items in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          item.title = `Item ${item.id}`;
          item.status = 0;
          item.slug = `item-name-${item.id}`;
          item.price = item.id;
          item.excerpt = `Short description of item#${item.id}`;
          item.description = `Ling description of item#${item.id}`;

          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.itemId == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;
