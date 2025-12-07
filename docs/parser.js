import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { join } from 'path';
import { URL } from 'url';

const parser = async (filePath) => {
  const filePathResolved = resolve(filePath);
  const fileContent = await readFile(filePathResolved, 'utf8');

  const fileUrl = new URL(filePath);
  const fileAbsoluteUrl = fileUrl.href;

  const fileParts = fileAbsoluteUrl.split('/');
  const fileName = fileParts[fileParts.length - 1];

  const fileLines = fileContent.split('\n');
  const fileLinesCount = fileLines.length;
  const fileLinesContent = fileLines.map((line) => line.trim()).join('\n');

  return {
    filePath: filePathResolved,
    fileContent: fileLinesContent,
    fileLinesCount,
    fileName,
    fileAbsoluteUrl,
  };
};

export default parser;