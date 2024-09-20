// on baruserites. Mõeldud frontendi jaoks. 

// variables- muutujad, 


// DATA TYPES
// Primitiivsed, hoiavad väärtust:
// *String => "See on string väärtus" 
//           'see on samuti string väärtus' 
// 		   `see samuti`
// *Number (Integer, Float) => 43
// *Boolean => true/false, jah/ei, 1/0 

// Array => [] jada, andmekogu. suudab hoida enda sees String, number ja booleani + ennast ja objekti
//  Object => {} 

// const personal = ["Nimi 1", "Nimi 2", 43, true] see on Array
// const personaldata = {
//     name: "Kadri"
//     age: 10,
//     Position: "Student"
// };

// const everibody = [
//     {},
//     {}
// ]

// CTRL KC paneb kommentaari peale
// CTRL KU võtab maha

// mitu objekti hoiame arrays, objectis hoiame isikuomadusi vms

// MUUTUJAD:
// 1. Nimetus
// 2. Väärtus 
const teacherName = "Karl"
// Muutumatu muutuja on const
const fruit = "Banaan"; // Muutuja, mida ei saa enam muuta

// // Muutuv muutuja on let
let model = "BMW" // Muutuja, mida saab veel muuta ja tal on nimi ja väärtus

// camelCase
// camel_case on pythonis
// Muutujate nimetus on camelCase and it makes some sense 

// KOODIBLOKK => {} (nagu ka objektil)


const calculateSum = (Number1, Number2) => {
        const number3 = 256;
      //  console.log(teacherName);
        return Number1 + Number2;

};


calculateSum(1, 2);

// Kõik see on SCOPE
// väljaspoolt koodiblokki ei saa võtta asju koodi seest. Koodiblokk on suletud!

// Function Scope - 
// Global scope - terve fail

// võtta ei saa blokist välja, aga väljast sisse saab võtta

// Koodiblokk => SCOPE
// Koodiblokki tähistab {} (objekti sümbol)


// Hoisting 


// ANDMETÜÜBID (5 tüüpi)

// string converted to boolean "a" - true
//                             " " - false
//                             0-9 - true
//                             -1-.. false

// Type Casting - andmetüübi muutmine

const castNumber = 123456;
// muudame numbri tüübi string andmetüübiks
console.log(typeof Boolean(castNumber))

// Tüübi kontrollimiseks kasutame "typeof"
// console.log(typeof String(castNumber))
console.log(typeof Number(castNumber))




// 1. Array => sümbol on []
// sinna saame lisada kõik andmetüübid, see on jada. 

// [1, 2, 3, 4, 5]
// 1 pos. indeks on alati 0
//   2 pos. indeks on 1 jne. 
// palun anna mulle arrayst indeksi 2 element, siis saame number 3. 

// Array => sümbol on [], toimub indekseerimine, esimene element on kohal 0. 
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];

// alt + shift + nool alla, see kopeerib read

// 1. viis, kus mahud väiksemad

console.log(characters[7]);
console.log(characters[6]);
console.log(characters[5]);
console.log(characters[6]);
console.log(characters[4]);
console.log(characters[3]);
console.log(characters[8]);
console.log(characters[2]);
console.log(characters[1]);
console.log(characters[0]);

// 2. kasutame loop, kordame scripti.
// teeme loopi, ütleme et käi kordusena arrays üle ja siis ütle mulle tabelis info. 


// Loopimine => korduslause, igast array elemendist minnakse üle ja käiakse läbi script
// 2-1. kõige kiirem viis! ei ole aga ilus
// For loop

for(i = 0; i < characters.length; i++) {
    console.log("For loop: ", characters[i]);
}

// 1. i on 0, sest array algab nullist. 
// 2. Tingimus - jooksutan scripti, kuni keskmine osa on true. 
// i-le liidetakse seni, kuni muutub array pikkusest suuremaks



// 2-2. lihtsam loopimise viis. 
// forEach loop
characters.forEach((char) => {
    console.log("For each loop: ", char)
})
// character = i, iga karakteri kohta


// loopimise loogika igas programmeerimiskeeles sama, visuaal on lihtsalt teine. 











   




