import fs from 'fs';
try {
  console.log('Cleaning node_modules and yarn.lock...');
  fs.rmSync('node_modules', { recursive: true, force: true });
  fs.rmSync('yarn.lock', { force: true });
  console.log('Cleaned successfully.');
} catch (err) {
  console.error('Error cleaning:', err);
}
