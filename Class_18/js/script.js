let grades = [91, 66, 77, 84, 66];
let search = 77;

/*
function searchGrade(grades,search){
    for (var i=0; i < grades.length ; i++){
        if (grades[i] == search){
            console.log(`The grade ${search} exists`);
            break;
        }
    }
}
*/

function searchGrade(grades,search){
    for (currentGrade of grades){
        if (currentGrade == search){
            console.log(`The grade ${search} exists`);
            break;
        }
    }
}

//searchGrade(grades,search);

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  console.log(person1.fullName.call(person2));
