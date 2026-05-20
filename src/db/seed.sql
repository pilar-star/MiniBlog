INSERT INTO authors (name, email, bio) VALUES
  ('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
  ('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
  ('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST');
INSERT INTO posts (title, content, author_id, published) VALUES
  ('Introducción a Node.js', 'Node.js es un entorno de ejecución de JavaScript', 1, true),
  ('PostgreSQL vs MySQL', 'Ambas son bases de datos con características distintas', 2, true),
  ('APIs RESTful', 'REST es un estilo arquitectónico', 1, true),
  ('Manejar errores en Express', 'Siempre debe haber un manejo apropiado de errores', 3, false),
  ('Async/Await', 'Las promesas son una forma de simplificar el código asíncrono', 1, false);