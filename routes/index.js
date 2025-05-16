const session = require('express-session');

const express = require('express');
const router = express.Router();

// Sample product list
const products = [
  { id: 1, name: "Dapagliflozin 10 mg + Metformin (ER) 500 mg (DAPAnum-M", price: 1599, image: "/images/1.jpg", description: "Type 2 diabetes management." },
  { id: 2, name: "Glimepiride 2 mg + Metformin 1000 mg (SR) (NUMIglide-M2 Forte)", price: 930, image: "/images/2.jpg", description: "Type 2 diabetes management." },
  { id: 3, name: "Rosuvastatin 10 mg + Clopidogrel 75 mg + Aspirin 75 mg (ROZImera-Gold", price:1900, image: "/images/3.jpg", description: "Cholesterol control and heart health." },
  { id: 4, name: "Aceclofenac 100 mg + Paracetamol 325 mg + Thiocolchicoside 4 mg (MALLicide-AP)", price: 2190, image: "/images/3.jpg", description: " Muscle relaxant and pain relief." },
  { id: 5, name: "Aceclofenac 100 mg + Paracetamol 325 mg + Thiocolchicoside 4 mg (MALLicide-AP)"
, price: 7000, image: "/images/4.jpg", description: "Muscle relaxant and pain relief." },
  { id: 6, name: "CETAPIN XR 1000 mg Tablet", price: 56, image: "/images/5.jpg", description: "Type 2 diabetes management." },
  { id: 7, name: "Cardivas 12.5 mg Tablet", price: 2500, image: "/images/6.jpg", description: "Heart failure and hypertension." },
  { id: 8, name: "Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg (ACEGrand-MR", price: 1500, image: "/images/7.jpg", description: "Muscle pain and inflammation." },
  { id: 9, name: "Azithromycin 1 gm + Secnidazole 2 gm + Fluconazole 150 mg Kit (AUXizio - SF Kit", price: 971, image: "/images/8.jpg", description: "Bacterial and fungal infections." },
];


// Home page
router.get('/', (req, res) => {
  res.render('index', { products });
});

// Individual product page
router.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('product', { product });
});

// Buy product route (POST)
router.post('/buy/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render('buy', { product });
});

module.exports = router;