import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: 1,
    status: 1,
    title: "Product name",
    slug: "product-name",
    price: 2.5,
    excerpt: "Short description of product",
    description: "Long description of product"
  },
  {
    id: 2,
    status: 1,
    title: "Second product",
    slug: "second-product-name",
    price: 5.5,
    excerpt: "Short description of second product",
    description: "Long description of second product"
  }
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return +new Date();
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    product = Object.assign({}, product); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProductTitleLength = 1;
        if (product.title.length < minProductTitleLength) {
          reject(`Title must be at least ${minProductTitleLength} characters.`);
        }

        if (product.id) {
          const existingProductIndex = product.findIndex(a => a.id == product.id);
          product.splice(existingProductIndex, 1, product);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new products in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          product.title = `Product ${product.id}`;
          product.status = 0;
          product.slug = `product-name-${product.id}`;
          product.price = product.id;
          product.excerpt = `Short description of product#${product.id}`;
          product.description = `Ling description of product#${product.id}`;

          products.push(product);
        }

        resolve(product);
      }, delay);
    });
  }

  static deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProductToDelete = products.findIndex(product => {
          product.productId == productId;
        });
        products.splice(indexOfProductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
