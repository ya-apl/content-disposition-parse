const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const { minify } = require('terser');

// Папка с скомпилированными файлами
const distFolder = join(__dirname, 'dist');

// Получаем список всех файлов в папке dist
const files = readdirSync(distFolder).filter(file => file.endsWith('.js'));

// Обрабатываем каждый файл
files.forEach(async (file) => {
  const filePath = join(distFolder, file);
  const code = require('fs').readFileSync(filePath, 'utf-8');

  // Минификация файла
  const result = await minify(code);

  // Создаем минифицированный файл с суффиксом .min.js
//   const minifiedFilePath = join(distFolder, file.replace('.js', '.min.js'));
  const minifiedFilePath = join(distFolder, file);
  writeFileSync(minifiedFilePath, result.code, 'utf-8');

  console.log(`Минифицированный файл создан: ${minifiedFilePath}`);
});
