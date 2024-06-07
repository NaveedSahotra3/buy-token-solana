const fs = require('fs-extra');

async function moveFiles() {
  try {
    await fs.copy('./widget/dist', './dist');
    console.log('Files moved successfully!');
  } catch (err) {
    console.error('Error moving files:', err);
  }
}

moveFiles();
