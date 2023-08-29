const express = require('express')
const { cartData } = require('./constants')
const app = express()
const port = 8000

app.get('/', (req, res) => {

  res.send("Cart Microservice! Navigate to /cart-details for product microservice");
})

async function getDataFromProductMS(data) {
    const response = await fetch('http://localhost:8080');
    console.log(response);
    return response;
}

app.get('/cart-details', async (req, res) => {
    const productDetails = await getDataFromProductMS(cartData);
    res.send("Connected to the product microservice and got response status as ' "+productDetails.status+" '")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})