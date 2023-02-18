"use strict"

//#region CRUD

// let book1 = {
//     id: 1,
//     name: "Harry Potter",
//     author: "Rowling"
// }

// let book2 = {
//     id: 2,
//     name: "Anna Karenina",
//     author: "Tolstoy"
// }

// let book3 = {
//     id: 3,
//     name: "Hamlet",
//     author: "Shakespeare "
// }

// let book4 = {
//     id: 4,
//     name: "Othello",
//     author: "Shakespeare"
// }

// let book5 = {
//     id: 5,
//     name: "War and Peace",
//     author: "Tolstoy"
// }

// let book6 = {
//     id: 6,
//     name: "Three Deaths",
//     author: "Tolstoy"
// }

// let book7 = {
//     id: 7,
//     name: "Romeo and Juliet",
//     author: "Shakespeare"
// }

// let book8 = {
//     id: 4,
//     name: "Kitab1",
//     author: "Muellif1"
// }

// let library = {
//     name: "The British Library",
//     books: [],
//     capacity: 5,
//     addBook: function (book) {
//         if (this.books.length == this.capacity) {
//             console.log("Yer doludur");
//             return;
//         }

//         let bk = this.books.find(n => n.id == book.id)

//         if (bk != undefined) {
//             console.log("Bu kitab movcuddur");
//             return;
//         }

//         this.books.push(book)

//     },
//     GetBook: function (book2) {
//         return this.books
//     },
//     Update: function (book3) {

//         for (const item of this.books) {
//             if (item.id == book3.id) {
//                 if (book3.name != undefined) {
//                     item.name = book3.name
//                 } else{
//                     item.name = item.name
//                 }

//                 if (book3.author != undefined) {
//                     item.author = book3.author
//                 } else{
//                     item.author = item.author
//                 }
//             }
//         }
//     },
//     Delete: function(index){
//         for (const item of this.books) {

//             if (item.id == book3.id) {


//             }



//         }
//     }

// }


// library.addBook(book1)
// library.addBook(book2)
// library.addBook(book3)
// library.addBook(book4)
// library.addBook(book5)
// library.addBook(book6)
// library.addBook(book7)

// console.log(library.GetBook());

// library.Update(book8)

// library.Delete(3)

//#endregion


//#region ClassTask2

// let number = [1,2,3,4,5,6,7,8,9];

// Array.prototype.getMax = function () {
//     let max = -9999
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] > max) {
//             max = this[i]
//         }
//     }

//     return max
// }

// console.log(number.getMax());


// let number = [1,2,3,4,5,6,7,8,9];

// Array.prototype.getMax = function () {
//     let max = -9999
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] > max) {
//             max = this[i]
//         }
//     }

//     return max
// }

// console.log(number.getMax());



// let number2 = [1,2,3,4,5,6,7,8,9];

// Array.prototype.getLength = function () {


//     return this.length    
// }

// console.log(number.getLength());



// let number2 = [1,2,3,4,5,6,7,8,9];

// let num = 5

// Number.prototype.getSquare = function () {

//     return this**2;

// }

// console.log(num.getSquare());




//#endregion



//#region ClassPractice

// let stu1 = {
//     id: 1,
//     name: "Murad",
//     surname: "Jafarov",
//     age: 18,

// }

// let stu2 = {
//     id: 2,
//     name: "Musa",
//     surname: "Afandiyev",
//     age: 19,

// }

// let stu3 = {
//     id: 3,
//     name: "Nicat",
//     surname: "Novruzzade",
//     age: 36,

// }

// let stu4 = {
//     id: 4,
//     name: "Anar",
//     surname: "Huseynov",
//     age: 25,

// }

// let updatedStudent = {
//     id: 4,
//     name: "AD",
//     surname: "Soyad",
//     age: 40,
// }


// let group = {
//     name: "P414",
//     capacity: 3,
//     students: [],
//     addStudent: function (student) {
//         let stu = this.students.find(s => s.id == student.id)

//         if (this.students.length == this.capacity) {
//             console.log("Doludur");
//             return;
//         }

//         if (stu != undefined) {
//             console.log("error message");
//             return;
//         }

//         this.students.push(student)

//     },
//     getAllStudents: function () {
//         return this.students;
//     },
//     updateStudent: function (student1) {
//         for (const item of this.students) {
//             if (item.id == student1.id) {

//                 if (student1.name != undefined) {
//                     item.name = student1.name
//                 }

//                 if (student1.surname != undefined) {
//                     item.surname = student1.surname
//                 }

//                 if (student1.age != undefined) {
//                     item.age = student1.age
//                 }

//             }
//         }
//     },
//     deleteStudent: function(id){
//         return this.students.filter(s=>s.id != id);
//     }


// }

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)
// group.updateStudent(updatedStudent)
// group.deleteStudent(4)

// console.log(group.getAllStudents());






class Car {
    constructor(name, speed) {
        this.name = name;
        //this.speed = speed;
        this.color = "Red";

    }

    speed(){
        console.log(600);

    }

}

// let car1 = new Car("BMW", 500)

// console.log(car1.name + " " + car1.color + " " + car1.speed);


let car2 = new Car("Toyota")

car2.speed();









//#endregion










