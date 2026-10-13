import {pool}  from './db.js';
const books = [{id:1, title:'El juego de Ender', writer: 'Orson Scott Card', year: 1982},{id: 2, title:'King Sorrow' , writer: 'Joe Hill' , year: 2025}]
try
{
await pool.query(`create table if not exists libro(
    id integer generated always as identity primary key,
    TITLE text not null, 
    WRITER text,
    YEAR integer
   )`);
   for (const book of books) {
    await pool.query('INSERT INTO libro (title, writer, year) VALUES ($1, $2, $3)', [book.title, book.writer, book.year]);
  }
}
catch (error) {
    console.error('Error al insertar los libros:', error);
}
finally {
    await pool.end();
}