class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("All fields are mandatory");
      return;
    }

    const duplicateCode = this.products.some((p) => p.code === product.code);
    if (duplicateCode) {
      console.error("Product code is already in use");
      return;
    }

    product.id = this.products.length + 1;
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
  "thumbnail0.png",
  "aaa124",
  10
);
const product2 = new Product(
  "Product 2",
  "Description 2",
  20,
  "thumbnail1.png",
  "aab125",
  20
);
const product3 = new Product(
  "Product 3",
  "Description 3",
  30,
  "thumbnail2.png",
  "aac125",
  30
);

const product4 = new Product(
  "Product 4",
  "",
  40,
  "thumbnail4.png",
  "aaa123",
  40
);

const product5 = new Product(
  "Product 5",
  "Description 5",
  50,
  "thumbnail5.png",
  "aab123",
  50
);

const product6 = new Product(
  "Product 6",
  "Description 6",
  60,
  "thumbnail6.png",
  "aab123",
  60
);

const productManager = new ProductManager();
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);
productManager.addProduct(product4); //  Se generará error por tener un campo vacío
productManager.addProduct(product5);
productManager.addProduct(product6); // Se generará error por tener el campo code duplicado

const productIdToFind = 3;
const productById = productManager.getProductById(productIdToFind);
console.log("productById", productById);

console.log("productsArray", productManager.products);
console.log("getProducts", productManager.getProducts());
