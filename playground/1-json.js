const fs = require('fs');

const book = {
	title: 'Total Recall',
	author: 'Sara Paretsky',
}

//goal is to convert ^ this object into json...

const bookJSON = JSON.stringify(book); //<--takes in object and returns JSON string
console.log(bookJSON); //{"title":"Total Recall","author":"Sara Paretsky"}

const parsedData = JSON.parse(bookJSON); //<--takes in JSON string and returns object
console.log(parsedData); //{ title: 'Total Recall', author: 'Sara Paretsky' }

fs.writeFileSync('1-json.json', bookJSON); //<--storing the JSON object in a file

const dataBuffer = fs.readFileSync("1-json.json"); //does not return a string, it returns a buffer
console.log(dataBuffer); //<Buffer 7b 22 74 69 74 6c 65 22 3a 22 54 6f 74 61 6c 20 52 65 63 61 6c 6c 22 2c 22 61 75 74 68 6f 72 22 3a 22 53 61 72 61 20 50 61 72 65 74 73 6b 79 22 7d>
console.log(dataBuffer.toString()); //{"title":"Total Recall","author":"Sara Paretsky"}

const data = JSON.parse(dataBuffer.toString());
console.log(data.title); //Total Recall
console.log(data.author); //Sara Paretsky