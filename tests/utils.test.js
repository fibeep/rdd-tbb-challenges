const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("Should return length x Width", function()  {
  const area = utils.area(2, 4)
  expect(area).to.be.equal(8)
  const neg = utils.area(2, -7)
  expect(neg).to.be.equal(null)
})
it("Should return 2length + 2Width", function() {
  const perimeter = utils.perimeter(5, 5)
  expect(perimeter).to.be.equal(20)
  const neg = utils.perimeter(2, -7)
  expect(neg).to.be.equal(null)
})
it("Should return area of circle given a radius", function(){
  const circle = utils.circleArea(2)
  expect(circle).to.be.equal(12.56)
  const neg = utils.circleArea(-7)
  expect(neg).to.be.equal(null)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function(){
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function(){
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart[0]['name']).to.be.a("string")
  expect(cart[0]).to.have.property("name", "apple")
  expect(cart[0]).to.have.property("price", 0.99)
  expect(cart[0]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart")

it("Should remove items from cart")

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
