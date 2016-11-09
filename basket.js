function Basket (customer, contents, price) {
  this.customer = customer || '';
  this.contents = contents || [];
  this.price = price || 0;
}

Basket.prototype.getCustomer = function () {
  return this.customer;
}

Basket.prototype.getContents = function () {
  return this.contents;
}

Basket.prototype.getPrice = function () {
  return this.price;
}

Basket.prototype.addProduct = function (product, price) {
  this.contents.push(product);
  this.price += price;
  return this;
}

Basket.prototype.deleteProduct = function (product, price) {
  for (let i in this.contents) {
    if (this.contents[i] === product) {
      this.contents.splice(i, 1);
      this.price -= price;
      break;
    }
  }
  return this;
}

module.exports = Basket;
