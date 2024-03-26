let js="Adithya"
console.log(js)
//arithmethric operations
console.log(23+45-43*45/5)
let firstname="adithya"

console.log(firstname)
console.log(firstname)
console.log(firstname)

//Data Types

let isjsfun=true
console.log(isjsfun)

console.log(typeof true)
console.log(typeof 78)
console.log(typeof "adithya")


let pi=3.1415
console.log(pi)


let myfirstjob="student"
let mycurrentjob="coder"

console.log(`I changed my job fron ${myfirstjob} to ${mycurrentjob}`)


let year;
console.log(typeof year)

let name1=""
console.log(name1)
console.log(typeof null)

let job1='programmer'
let job2='teacher'

console.log(`i loved to be ${job1} as well as ${job2}`)

console.log(typeof 'adithya')
isjsfun='yes!'

console.log(typeof isjsfun)

//Math Operator
//Basic Operator
const now=2024

console.log("my age is ",now-1999)

console.log("My Age is ",now-2004)

firstname="Adithya Sai"
lastname="Vidivada"
console.log(firstname+' '+lastname)

let y=5
y+=10
console.log(y)
y+=4
console.log(y)
console.log(++y)
console.log(y)
console.log(--y)

//comparision Operator

console.log(firstname<lastname)
//the above String will compare alphabatically 
//Capital letters were given more Preferences

let x1,y1;
x1=y1=10+100*10-90/9
console.log(x1,y1)


//calculation of BMI problem

const aditya_mass=80
const aditya_height=1.6

const papa_mass=75
const papa_height=1.65

let bmi_of_aditya=aditya_mass/(aditya_height**2)
let bmi_of_papa=papa_mass/(papa_height**2)

//to make or print only upto two decimal places

bmi_of_aditya=bmi_of_aditya.toFixed(2)
bmi_of_papa=bmi_of_papa.toFixed(2)

console.log("bodymass index of Aditya is",bmi_of_aditya)
console.log("bodymass index of papa is",bmi_of_papa)


//Strings and Templates Literals

const firstName="Adithya sai"
const Lastname="Vidivada"
const job="student"
const birthyear=2003


console.log(`i am ${firstName} ${Lastname} is of ${2023-birthyear} years old and my Profession is ${job}`)


console.log(`Just new Type of Representation of String...`)

console.log(`string wit
multiple 
lines`)
//only can be used with the help of the `` notation


//conditional statements

// if-else conditions


const age=15;

if(age>=18)
{
    console.log("You are eligible for Driving")
}
else{
    let remainging=18-age
    console.log(`you were not eligible for the Driving you need to wait for ${remainging} more years`)
}

const birthYear=2012

if(birthYear<2000)
{
    console.log(`you Belong to 20th Century`)
}
else{
    console.log(`you Belong to the 21st century`)
}

//improving the bodymass index problem with the help of the if-else statements

const johnmass=88
const johnheight=1.7

const markmass=75
const markheight=2.0

let bmijohn=johnmass/(johnheight**2)
let bmimark=markmass/(markheight**2)

bmijohn=bmijohn.toFixed(2)
bmimark=bmimark.toFixed(2)

if(bmijohn > bmimark)
{
    console.log(`bmi of john(${bmijohn}) is greater than bmi of mark(${bmimark})`)
}
else{

    console.log(`bmi of mark(${bmimark}) is greater than bmi of john(${bmijohn})`)
}

//Type Conversion and coercion

let inputnum='2003'

console.log(typeof NaN)

//NaN means a nnumber type but it represents a not a number

inputnum=Number(inputnum)
console.log(inputnum)
console.log(typeof(inputnum))


//some special types of operations with strings and the numbers were
//type coersion
console.log('i am '+23+' years old')
let n='1'+1
console.log(n)


//thumb rule
//if there is a number within the combination of strings and numbers
//we get string as a final output and number act as the string for that time

//truthy and falsy values

//0,'',undefined,null,NaN
console.log(Boolean(0))
console.log(Boolean({}))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean('aditya'))


let money=100
if(money)
{
    console.log(`bro! save it because you got responsibilities`)
}
else{
    console.log(`bro Get a job or do some buisiness you got responsibilities`)

}

let height=0

if(height)
{
    console.log("your height was defined")
}
else{
    console.log("your Height was not defined")
}

//equality operators == and ===

//== checks for only the value but ignores the datatype
//but === will also take the data type into the account

var age2='18'

if(age2==18) console.log("you are now a major!(loose)")

if(age2===18) console.log("you are a major(strinct)")


//we can take the input from the user using the prompt function 
//which will only return the stirng to the programm we have to convert the type of that

var inputc=Number(prompt("Enter the Lucky Number? "))

if(inputc==23)
{
    console.log("it was 23 such a good number")
}
else if(inputc==7)
{
    console.log('7 is also a good number')
}
else if(inputc==9)
{
    console.log('9 is also a good number')
}
else{
    console.log('it was not a 23,7 or 9')
}

if(inputc!=23 && inputc!=2)
{
    console.log("why not 23 or 2")
}

//logical operators

const hasgooddrivinglicence=true
const hasgooddecision=true

console.log(hasgooddrivinglicence && hasgooddecision)
console.log(hasgooddrivinglicence || hasgooddecision)
console.log(!hasgooddecision)


if(hasgooddrivinglicence&&hasgooddecision)
{
    console.log("Priya can Drive")
}
else{
    console.log("Convince her")
}

//coding challenge

//switch statements

const day='friday'

switch(day)
{
    case 'monday':
        console.log('work work work')
        break;
    case 'tuesday':
        console.log('increase your effort')
        break
    case 'wednesday':
        console.log('continue your effort')
        break
    case 'thursday':
        console.log("good results could be seen")
        break
    case 'friday':
        console.log("Good Now Apply your Knowledge!")
        break
    default:
        console.log("you entered Wrong ans")


}

//ternary operator

const age5=15


const res=(age5>18)? "you could dring beer":"only water and soft drinks"

console.log(res)