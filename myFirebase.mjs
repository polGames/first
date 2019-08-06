import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPcUYxd7b1mkvtJw2xQcKg5MDlgCUcoLc",
    authDomain: "temp-e1279.firebaseapp.com",
    databaseURL: "https://temp-e1279.firebaseio.com",
    projectId: "temp-e1279",
    storageBucket: "temp-e1279.appspot.com",
    messagingSenderId: "849591009650",
    appId: "1:849591009650:web:793e703e77865aa0"
};


firebase.initializeApp(firebaseConfig);

let database = firebase.database()
let scoresDB = database.ref('scores') //* a reference to whichever section of the database you want, you can do this multiple times in the same project. one for scores, one for saves, etc

let score = {
    name: 'boi',
    value: 999,
}

let result = scoresDB.push(score)
console.log(result.key) //* .push returns the 'database key' of the entry you just added, the same key of random letters and numbers you can see when you view the database on the firebase website

scoresDB.on('value', gotData, errorData) //* when anything changes in the 'scores' database, it will alert us of the change. it doesnt send the delta change it sends the entire database section, but there's an option somewhere to only ask for when a certain part changes, i saw it somewhere

function gotData(data) {
    console.log(data.val())
}

function errorData(error) {
    console.log(error)
}