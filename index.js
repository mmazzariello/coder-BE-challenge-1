class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Product not found");
    }
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

const product1 = new Product(
  "Product 1",
  "Description 1",
  10,
  "thumbnail1.png",
  "aaa123",
  10
);
const product2 = new Product(
  "Product 2",
  "Description 2",
  20,
  "thumbnail2.png",
  "aab123",
  20
);
const product3 = new Product(
  "Product 3",
  "Description 3",
  30,
  "thumbnail3.png",
  "aac123",
  30
);

const productManager = new ProductManager();
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

const productIdToFind = "mg5pgztww";
const productById = productManager.getProductById(productIdToFind);
console.log("productById", productById);

console.log("productsArray", productManager.products);
console.log("getProducts", productManager.getProducts());
