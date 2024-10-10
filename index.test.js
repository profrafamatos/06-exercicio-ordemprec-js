//Não faça nada neste arquivo, esqueça que ele existe
const { execSync } = require('child_process');

test('verifica o resultado da expressão aritmética', () => {
  const output = execSync('node index.js').toString();
  const expectedOutput = "2\n"; // O resultado final deve ser 2
  expect(output).toBe(expectedOutput);
});
