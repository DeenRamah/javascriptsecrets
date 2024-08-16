// Create a database instance
let db;

// Open the database
const request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

request.onsuccess = (event) => {
  db = event.target.result;
  console.log('Database opened successfully!');
};

// Add data to the database
const addData = (data) => {
  const transaction = db.transaction(['myObjectStore'], 'readwrite');
  const objectStore = transaction.objectStore('myObjectStore');
  const request = objectStore.add(data);
  request.onsuccess = (event) => {
    console.log('Data added successfully!');
  };
};

// Retrieve data from the database
const getData = () => {
  const transaction = db.transaction(['myObjectStore'], 'readonly');
  const objectStore = transaction.objectStore('myObjectStore');
  const request = objectStore.getAll();
  request.onsuccess = (event) => {
    const data = event.target.result;
    console.log('Retrieved data:', data);
  };
};

// Example usage
addData({ id: 1, name: 'John Doe' });
addData({ id: 2, name: 'Jane Doe' });

getData();
