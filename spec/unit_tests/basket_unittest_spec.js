describe('Basket', function () {
  var Basket = require('../../basket');
  var basket;

  beforeEach(function () {
    basket = new Basket("Jari", ["maito","banaani","hernekeitto"], 15);
  });

  it('should be created', function () {
    expect(basket).toBeDefined();
    expect(basket).not.toBeNull();
    expect(basket instanceof Basket).toBeTruthy();
  });

  describe('type of property', function () {
    it('customer should be a string', function () {
      expect(typeof basket.getCustomer()).toEqual('string');
    });

    it('contents should be an array', function () {
      // Can't use typeof on array as it would return 'object'.
      // Must use an alternative way.
      expect(basket.getContents() instanceof Array).toBeTruthy();
    });

    it('price should be a number', function () {
      expect(typeof basket.getPrice()).toEqual('number');
    });
  });

  describe('should be able to manipulate contents property', function () {
    it('by adding an item', function () {
      let price_a, price_b;

      price_a = basket.getPrice();
      basket.addProduct('kala', 5);
      price_b = basket.getPrice();

      expect(basket.getContents()).toContain('kala');
      expect(price_a + 5).toBe(price_b);
    });

    it('by removing an item', function () {
      let price_a, price_b;

      price_a = basket.getPrice();
      basket.deleteProduct('banaani', 5);
      price_b = basket.getPrice();

      expect(basket.getContents()).not.toContain('banaani');
      expect(price_a - 5).toBe(price_b);
    });
  });
});
