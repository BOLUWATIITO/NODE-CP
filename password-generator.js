const passwordGenerator = require('generate-password');

function generateRandomPassword() {
  const password = passwordGenerator.generate({
    length: 10,
    numbers: true,
    symbols: true,
  });

  console.log('Generated password:', password);
}

generateRandomPassword();
