const fs = require('fs');
const path = require('path');

class Parser {
  constructor(fileName) {
    this.fileName = fileName;
    this.data = {};
  }

  readData() {
    try {
      const filePath = path.join(__dirname, this.fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      this.data = JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
    }
  }

  parseData() {
    if (Object.keys(this.data).length === 0) {
      this.readData();
    }
    // example parsing logic, replace with actual logic
    const parsedData = Object.keys(this.data).map(key => ({ id: key, value: this.data[key] }));
    return parsedData;
  }
}

module.exports = Parser;