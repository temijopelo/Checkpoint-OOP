class Product {
  constructor(id, productName, price) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    console.log("cart items:");
    this.items.forEach((item) => {
      console.log(
        `Product ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.getTotalPrice().toFixed(2)}`
      );
    });
    console.log(`Cart Total: $${this.getTotalPrice().toFixed(2)}`);
  }
}

// Create some products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Smartphone", 500);
const product3 = new Product(3, "Headphones", 150);

// Create a new shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // 1 Laptop
cart.addItem(product2, 2); // 2 Smartphones
cart.addItem(product3, 3); // 3 Headphones

// Display cart
cart.displayCart(); // Should display the cart with products and their total price

// Remove an item (e.g., the smartphone)
cart.removeItem(2);

// Display the cart again after removal
cart.displayCart(); // Should display the cart without the smartphone
