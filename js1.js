//var petDog='Dozi';
//var petCat='rexi';
//console.log(petDog);
//console.log(petCat);
//console.log("my pet dog's name is:",petDog);
//console.log("my pet cat's name is:",petCat);
var age='10';
if(age>=65){
    console.log("You get your income from your pension");
}
else if(age<65 && age>=18){
    console.log("Each month you get a salary");
}
else if(age<18){
    console.log("You get an allowance");
}
else{
    console.log( "The value of the age variable is not numerical");
}
var day='Sunday';
switch(day){
    case 'Monday':
        console.log('Do something');
    break;
    case  'Tuesday':
        console.log('Do something');
    break;
    case 'Wednesday':
        console.log('Do something');
        break;

    case 'Thrusday':
        console.log('Do something');
        break;

    case 'Friday':
        console.log('Do something');
        break;

    case 'Saturday':
        console.log('Do something');
        break;

    case 'Sunday':
        console.log('Do something');
        break;
default:
    console.log('there is no such day');
    break;
}