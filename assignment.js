//let country = "India";
//let continent = "Asia";
//let population = 170;

//console.log(country);
//console.log(continent);
//console.log(population);

//let isIsland = "True";
//console.log(isIsland);

//let language;
// console.log(typeof isIsland);
//  console.log(typeof population);
//  console.log(typeof country);
 //console.log(typeof language);

// language = 'Hindi';
// console.log(language);
// const country = 'India';
//  const continent = 'Asia';
//  const isIsland = true;
//  island = false;

// const population = 44;

// console.log(population / 2);
// population++;
// console.log(population++);

//  console.log(population > 6);
//  console.log(population < 33);
//  const description1 ='India'+' is in ' +'Asia' +', and its ' +'population is' +' 13 million people speak ' + 'Hindi';
//  console.log(description1)

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark/heightMark ** 2;
// const BMIJohn = massJohn/heightJohn ** 2;
// const marKHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, marKHigherBMI);

// const firstName = 'Rupa';
// const job = 'doctor';
// const birthYear = 1998;
// const year = 2022;

// const rupa = ("I'm"  + firstName + ', a' + (year-birthYear) + ' years old ' + job + '!');
// console.log(rupa);

// const jonasNew = 'I'm${firstName}, a${year-birthYear} year old${job}!';


// const lastName = 'Rupa';
// const job = 'software Engineer';
// const birthYear = 1998;
// const year = 2022;

// const jonas = "I'm " + lastName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 16;

// if(age >= 18)
// {
// 	console.log('Ramya is eligible to apply voter card');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Ramya is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1998;

// let century;
// if (birthYear <= 2000) {
//   century = "90's kid";
// } else {
//   century = 20;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark/heightMark ** 2;
// const BMIJohn = massJohn/heightJohn ** 2;
// const marKHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, marKHigherBMI);

// const BMIMark = 28.3;
// const BMIJohn = 23.9;

// let higherBMI;
// if(BMIMark>=BMIJohn)
// {
// higherBMI = "Mark's BMI is higher than John's";
// }
// else
// {
// higherBMI = "John's BMI is higher than Mark's";
// }

// console.log(higherBMI);

// const favourite = prompt("what is your lucky number?");
// console.log(favourite);

// const inputYear = '1998';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);


// const age = '22';
// if (age === 22) console.log('You are an adult :D (strict)');

// if (age == 22) console.log('You are an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 25) { 
//   console.log('Cool! 26 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('8 is also a cool number')
// } else if (favourite === 9) {
//   console.log('6 is also a cool number')
// } else {
//   console.log('Number is not 23 or 8 or 6')
// }

// if (favourite !== 26) console.log('Why not 26?');

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Ramya is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Ramya is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// const scoreDolphins = (97 + 112 + 240) / 3;
// const scoreKoalas = (109 + 95 + 150) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy­');
// }



// const day = 'monday';
// switch (day) {
//     case 'monday':
//       console.log('Plan course JavaScript');
//       console.log('Go through Udemy');
//       break;
    // case 'tuesday':
    //   console.log('Prepare theory videos');
    //   break;
    // case 'wednesday':
    // case 'thursday':
    //   console.log('Write code examples');
    //   break;
    // case 'friday':
    //   console.log('Prepare Document');
    //   break;
    // case 'saturday':
    // case 'sunday':
    //   console.log('Enjoy the weekend');
    //   break;
//     default:
//       console.log('This is not a valid day');
//   }
  
// const day = 'monday';
//   if (day === 'monday') {
//     console.log('Plan course JavaScript');
//     console.log('Go through Udemy');
//   } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   } else if (day === 'friday') {
//     console.log('Record videos');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
//   } else {
//     console.log('This is not a valid day!');
//   }





























