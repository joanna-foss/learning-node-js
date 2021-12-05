//Challenge:
//1. Load and parse the JSON data
//2. Change the name and age property using your info
//3. Stringify the changed object and overwrite the original data
//4. Test your work by viewing data in the JSON file

const fs = require('fs'); //pulls in filesystem module for use

const me = {
	name: "Joanna",
	planet: "Venus",
	age: 100
}
const meJSON = JSON.stringify(me); //convert me object into JSON string

fs.writeFileSync('my-json.json', meJSON); //creates file with meJSON data --> {"name":"Joanna","planet":"Venus","age":100}

const dataBuffer = fs.readFileSync('my-json.json'); //this pulls the JSON data from my-json.json as a buffer
const dataJSON = dataBuffer.toString(); //this converts the buffer data into a JSON string
const user = JSON.parse(dataJSON); //this converts the JSON string into an object we can manipulate

user.name = "Jo"; //manipulate name
user.age = 150; //manipulate age
user.planet = "Mars"; //manipulate planet

const userJSON = JSON.stringify(user); //recreate object as a JSON string

fs.writeFileSync('my-json.json', userJSON); //rewrites JSON data on my-json.json... now -> {"name":"Jo","planet":"Mars","age":150}