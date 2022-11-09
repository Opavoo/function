const person = {
    firstname: 'Халид',
    age: 22
  };
  
function concatNames (obj, lastname){
    return `${obj.firstname} ${lastname}`;
}
console.log(concatNames(person, 'Аюбов')); 


// Задание 4.2

function correctName(object){
    if(!object.fathername){
        return object.firstname;
    }else{
        return `${object.firstname}  ${object.lastname} ${object.fathername}`;
    }
}


const firstPerson = {
    firstname: 'Халид',
    lastname: 'Аюбов',
    fathername: undefined,
};
  console.log(correctName(firstPerson)); 
  

const secondPerson = {
    firstname: 'Халид',
    lastname: 'Аюбов',
    fathername: 'Исаевич',
};
  console.log(correctName(secondPerson)); 
  
