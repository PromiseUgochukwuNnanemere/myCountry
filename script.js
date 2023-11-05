// console.log(Date());

// const now = new Date("2023-10-28 11:23:20");
// console.log(now)


// const newDate = new Date("2022, 10, 28");

// console.log(newDate);


// let w = 10;

// if (w === 10) {
//     const newError = new Error("w is not less thank 10.");
//     console.log(newError);
// } else {
//     console.log("w is equal to 10.")
// }





// function Car (make, model, year, owner) {
//     this.make  = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner
//     this.getName = function () {
//         return 'The owner of this ' + this.make + ' ' + this.model + ' ' + this.year + ' ' + 'is' + ' ' + this.owner;
//     }
// }

// let c = new Car ('Meridian', 'Saber GT', 2012, 'Promise');
// console.log(c.getName());








// function Fan (kind, brand, year, owner) {
//     this.kind = kind;
//     this.brand = brand;
//     this.year = year;
//     this.owner = owner;
//     this.getOwner = function () {

//     return 'The owner of this'+ ' ' + this.brand + ' '+ this.kind+ ' '+ 'is' + ' ' +this.owner; 
// }
// }

// let fan = new Fan ('standing fan', 'Ox', 2023, 'Promise');

// console.log(fan.getOwner());






// function Co_interviewer(name, gender, height) {
//     this.name = name;
//     this.gender = gender;
//     this.height = height;
//     this.getName = function() {
//         return 'The co-interviewer whose name is'+ ' '+ this.name +',' + ' '+this.gender + ' ' + 'and has a height of about' + ' ' + height+ ''  + ' ' +'inches' + ' '+ 'is beautiful.' 
//     }
// }

// let co = new Co_interviewer('Richie', 'female', 6);

// console.log(co.getName());




// function Co_interviewer(name, gender, height) {
//     this.name = name;
//     this.gender = gender;
//     this.height = height;
    
// }


// Co_interviewer.prototype.getName = function() {
//     console.log(`The co-interviewer whose name is ${this.name}, ${this.gender} and has a height of about ${this.height} inches is beautiful.`);
// };

// let co = new Co_interviewer('Richie', 'female', 6);


// co.getName();






// let name = 'Promise';

// name += ' Nnanemere';

// console.log(name);


// let myName = 'Promise';
// myName = myName + ' Nnanemere'
// console.log(myName)


// let i = 2;
// console.log(i /= 3);

// for(i = 0; i <= 5; i++) {
//     console.log(i);
// }


// let array1 = [1, 2, 3,5];

// for (const iterator of array1) {
//     console.log(iterator)
// }





// var imgSet = 
// document.getElementsByTagName('img');
// var output = '';
// for (var i = 0; i < imgSet.length; i++) {
//     output += '<p>Source for image';
//     output += i;
//     output += ': ';
//     output += imgSet[i].src;
//     output += '<\p>';

// }
// console.log(output);





// function sum(a, b) {
//     return a + b;
// }

// const c = sum(2, 3);

// console.log(`The sum is ${c}.`);





// function power(base) {
//     console.log(base*base);
// };

// power(2);








console.log(document.querySelector("footer"));
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
// alert(paragraphs[0].nodeName);