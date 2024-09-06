
// constructor
// function Person(Myname , mycolor , myage) {
//     this.naam = Myname;
//     this.rang = mycolor
//     this.age = myage
// }

// Person.prototype.bhasha = function () {
//     console.log("ye meri bhasha hai");
// }

// Person.prototype.boli = function () {
//   console.log("ye meri boli hai");
// }


// let Person1 = new Person("samarth", "black", 28)
// let Person2 = new Person("sda", "white", 21);


class Person {
  constructor(Myname, mycolor, myage) {
    this.naam = Myname;
    this.rang = mycolor;
    this.age = myage;
  }

   bhasha() {
      return `ye hai meri bhasha hindi , mai hu ${this.naam}`
    
  }

}

// class student {
//   constructor(Myname, mycolor, myage) {
//     this.naam = Myname;
//     this.rang = mycolor;
//     this.age = myage;
//   }

//   bhasha() {
//     return `ye hai meri bhasha hindi , mai hu ${this.naam}`;
//   }
// }

//scenario-1

// class student extends Person{
//     // if all the things are same as person and we need it in class student
// }


// scenario - 2 if we hadd to add extra property
//     class student extends Person {
//         constructor(Myname, mycolor, myage, groupno) {
//             super(Myname, mycolor, myage)
//             this.no=groupno

//         }
//     }


// let Person1 = new student("samarth", "black", 28,'A')
// let Person2 = new Person("sda", "white", 21);


// scenario - 3 if we hadd to remove property not possible
    // class student extends Person {
    //     constructor(Myname, mycolor, groupno) {
    //         super(Myname, mycolor)
    //         this.no=groupno
    //     }
    // }


// scenario -4 override

    class student extends Person {
        constructor(Myname, mycolor, myage, groupno) {
            super(Myname, mycolor, myage)
            this.no=groupno

        }
        bhasha() {
            return ` ye meri bhasha english , meri umar hai ${this.age}`
        }
    }

let Person1 = new student("samarth", "black", 28,'A')
