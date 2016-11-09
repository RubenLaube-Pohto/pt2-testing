from numbers import Number
import unittest
from basket import Basket

#jarin_ostoskori = Basket("Jari", ["maito","banaani","hernekeitto"], 15)

class BasketTests(unittest.TestCase):

    def setUp(self):
        self.jarin_ostoskori = Basket("Jari",
                                      ["maito","banaani","hernekeitto"],
                                      15)

    def tearDown(self):
        del self.jarin_ostoskori

    def test_customer_is_string(self):
        self.assertTrue(isinstance(self.jarin_ostoskori.customer, str),
                        "Variable customer type should be string.")

    def test_contents_is_list(self):
        self.assertTrue(isinstance(self.jarin_ostoskori.contents, list),
                        "Variable contents type should be list.")

    def test_price_is_number(self):
        self.assertTrue(isinstance(self.jarin_ostoskori.price, Number),
                        "Variable price type should be Number")

    def test_can_add_product(self):
        self.jarin_ostoskori.add_product("kala", 5)
        self.assertIn("kala", self.jarin_ostoskori.contents,
                      "Variable contents did not contain added item.")

    def test_can_delete_product(self):
        self.jarin_ostoskori.delete_product("kala", 5)
        self.assertNotIn("kala", self.jarin_ostoskori.contents,
                         "Variable contents should not contain deleted item.")

if __name__ == '__main__':
    unittest.main()
