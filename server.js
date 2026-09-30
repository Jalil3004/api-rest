const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let products = [
  {
    id: 1,
    nom: 'Clavier mécanique',
    description: 'Switchs rouges silencieux',
    prix: 89.99,
    categorie: 'Périphériques'
  },
  {
    id: 2,
    nom: 'Souris sans fil',
    description: 'Capteur optique 16000 DPI',
    prix: 49.99,
    categorie: 'Périphériques'
  }
];

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});

app.post('/products', (req, res) => {
  const { nom, description, prix, categorie } = req.body;
  const newProduct = {
    id: products.length + 1,
    nom,
    description,
    prix,
    categorie
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  res.send('Got a PUT request at /user');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});