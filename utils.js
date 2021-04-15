// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  const resp = w * h
  if (resp < 0) {
    return null
  } else {
    return resp
  }
}

const perimeter = (w, h) => {
  const resp = (2 * w) + (2 * h)
  if (resp < 0) {
    return null
  } else {
    return resp
  }
}

const circleArea = r => {
  const resp =  r * r * 3.14
  if (r < 0) {
    return null
  } else {
    return resp
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  // console.log(shoppingCart)
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
  // console.log(`Shopping cart has: ${shoppingCart}`)
  return shoppingCart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
