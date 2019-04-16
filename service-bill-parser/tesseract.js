var Tesseract = require('tesseract.js');

const path = '/Users/jahangiralikhan/Downloads/';
const img = 'IaK7v2zznzNb.png';
const imgLike = path + img;

exports.getText = function (img, response) {
  res = '';
  console.log(img);
  Tesseract.recognize(img)
    .catch(err => console.error(err))
    .then(result => res += result.text)
    .finally(
      resultOrError => response.json(res.split("\n"))
    );
}