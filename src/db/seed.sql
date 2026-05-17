INSERT INTO authors (name, email, bio) VALUES
  ('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
  ('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
  ('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST');
let authors = [
 {
   id: 1,
   name: 'Ana García',
   email: 'ana@example.com',
   bio: 'Desarrolladora full-stack apasionada por Node.js'
 },
 {
   id: 2,
   name: 'Carlos Ruiz',
   email: 'carlos@example.com',
   bio: 'Escritor técnico especializado en bases de datos'
 },
 {
   id: 3,
   name: 'María López',
   email: 'maria@example.com',
   bio: 'Ingeniera de software con foco en APIs REST'
 }
];

INSERT INTO posts (title, content, author_id, published) VALUES
  ('Introducción a Node.js', 'Node.js es un entorno de ejecución de JavaScript', 1, true),
  ('PostgreSQL vs MySQL', 'Ambas son bases de datos con características distintas', 2, true),
  ('APIs RESTful', 'REST es un estilo arquitectónico', 1, true),
  ('Manejar errores en Express', 'Siempre debe haber un manejo apropiado de errores', 3, false),
  ('Async/Await', 'Las promesas son una forma de simplificar el código asíncrono', 1, false);
let posts = [
  {
   id: 1,
   title: 'Introducción a Node.js',
   content: 'Node.js es un entorno de ejecución de JavaScript',
   author_id: 1,
   published: true
 },
 {
   id: 2,
   title: 'PostgreSQL vs MySQL',
   content: 'Ambas son bases de datos con caracteristicas distintas',
   author_id: 2,
   published: true
 },
 {
   id: 3,
   title: 'APIs RESTful',
   content: 'REST es un estilo arquitectónico',
   author_id: 1,
   published: true
 },
 {
   id: 4,
   title: 'Manejar errores en Express',
   content: 'Siempre debe haber un manejo apropiado de errores',
   author_id: 3,
   published: false
 },
 {
   id: 5,
   title: 'Async/Await',
   content: 'Las promesas son una forma de simplificar el código asíncrono',
   author_id: 3,
   published: false
 }
];