const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parseFile() {
    try {
      const data = await fs.promises.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${this.filePath}`);
      } else if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON in file: ${this.filePath}`);
      } else {
        throw error;
      }
    }
  }

  async parseDirectory() {
    try {
      const files = await fs.promises.readdir(this.filePath);
      const parsedFiles = [];
      for (const file of files) {
        const filePath = path.join(this.filePath, file);
        const stats = await fs.promises.stat(filePath);
        if (stats.isFile() && path.extname(file) === '.json') {
          const parser = new Parser(filePath);
          const data = await parser.parseFile();
          parsedFiles.push(data);
        }
      }
      return parsedFiles;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`Directory not found: ${this.filePath}`);
      } else {
        throw error;
      }
    }
  }
}

module.exports = Parser;