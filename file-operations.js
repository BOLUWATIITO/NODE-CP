const fs = require('fs');

const filePath = 'welcome.txt';
const fileContent = 'Hello Node';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File created successfully');
});

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);
});
