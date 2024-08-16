const dbgen = (tableName, columns) => {
  // Generate database schema
  const schema = `CREATE TABLE ${tableName} (`;
  columns.forEach((column, index) => {
    schema += `${column.name} ${column.type}`;
    if (index < columns.length - 1) schema += ', ';
  });
  schema += ');';

  // Generate CRUD operations
  const crud = {
    create: `INSERT INTO ${tableName} (${columns.map((column) => column.name).join(', ')}) VALUES (${columns.map((column) => '?').join(', ')});`,
    read: `SELECT * FROM ${tableName};`,
    update: `UPDATE ${tableName} SET ${columns.map((column) => `${column.name} = ?`).join(', ')} WHERE id = ?;`,
    delete: `DELETE FROM ${tableName} WHERE id = ?;`,
  };

  return { schema, crud };
};

const usersTable = {
  name: 'users',
  columns: [
    { name: 'id', type: 'INTEGER PRIMARY KEY' },
    { name: 'name', type: 'TEXT' },
    { name: 'email', type: 'TEXT' },
    { name: 'password', type: 'TEXT' },
  ],
};

const { schema, crud } = dbgen(usersTable.name, usersTable.columns);
console.log(schema);
console.log(crud);
