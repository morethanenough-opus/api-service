const xml2js = require('xml2js');

module.exports.parse = function(fileContent) {
  const parser = new xml2js.Parser({explicitChildren: true});
  let result;
  
  parser.parseString(fileContent, (err, xml) => {
    if (err) throw err;
    result = xml;
  });
  
  return result;
}