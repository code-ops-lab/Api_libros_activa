import express from 'express';
const app = express();
const PORT = 3000;

const libros = [{id:1, title:'El juego de Ender', writer: 'Orson Scott Card'},{id: 2, title:'King Sorrow' , writer: 'Joe Hill'}]

app.get('/', (req, res) => {
  res.send('La api esta funcionando!');
});

app.get('/api/v1/books', (req, res) => {
  res.json(libros);
});

app.get('/api/v1/books/:id', (req, res) => {
  //const { id } = req.params;
  const book = libros.find(b => b.id ==req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Libro no encontrado' });
  }
  res.json(book);
});

app.get('/api/v1/books/writer/:writer', (req, res) => {
  const writer = libros.find(b => b.writer == req.params.writer);
  if (!writer) {
    return res.status(404).json({ message: 'Autor no encontrado' });
  }
  res.json(writer);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});