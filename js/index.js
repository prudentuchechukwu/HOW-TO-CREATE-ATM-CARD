const arr=[1,2,3,4,5,6];
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

const nestedArray=[[1,2], [3,4], [5,6]]
for(let i=0; i<nestedArray.length; i++){
    console.log(nestedArray[i]);
for (let j=0; j<nestedArray[i].length; j++){
    console.log(nestedArray[i] [j]);
}
}

// //outer layer of loop
for(let i=0; i<nestedArray.length; i++){
    console.log(`i am the outer loop ${nestedArray[i]}`)
    for (let j=0; j<nestedArray[i].length; j++){
        console.log(`i am the outer loop ${nestedArray[i] [j]}`)
    }
}

const names =['prudent', 'Charity', 'Ngozi', 'Amos', 'Caro', 'Ogechukwu'];
for (let i =0; i< names.length; i++){
    console.log(names[i]);
    for (let i=0; i<names.length; i++){
        console.log(`i am the outer loop ${names[i]}`)
    }
    for(let j=0; j<names[i].length; j++){
        console.log(`i am the inner loop ${names[i][j]}`)
    }
   
}

console.log('hello world')
console.log('Orie Prudent')

// //Variable
//Variable are placeholders to store information and data in your app
name= 'prudent'
console.log(name)
sentence='how are you doing today, nice to see you hope ypu are doing great have a great day'
console.log(sentence)

// // //operators
// //operators are use to asign values
// food=20
// console.log(food)


food = 20
tipPercentage =0.2
tipAmount=food *tipPercentage
console.log(tipAmount)

// //user input
// //prompt() is a built in Javascript functionality
// //that help you get inputs from a user through the browser
// fruit=prompt('What is your favourit fruits')
// console.log(fruit)

// food = prompt('How much is the food')
// tipPercentage =0.2
// tipAmount=food *tipPercentage
// console.log(tipAmount)

food = prompt('How much is the food')
console.log(food)
tipPercentage =prompt('tip%?')/100
tipAmount=food *tipPercentage
total= food+tipAmount
console.log(total)
console.log(tipAmount)

// //Alert() is like prompt, but is is only for output
// // 

// //data types (strings, numbers)
// //number 1,5,10,100,2.5
// //string 'hello,'' 'what is up'
// if(weather='rainy'){
//     console.log('Grap your umbrella')

// }else{
//     console.log('wear your sunglasses')
// }

// // balance=20000
// // withdraw=5000
// // canWithdraw=true
// // console.log(balance)

// // balance=300
// // withdraw=5000
// // canwithdraw= false


// // maths operation
// //multiply*
// //divide/
// //exponents **
// //modulo /Reminder%   5%2=1
// //Add +
// //Substract -

// /* Maths Methods
// Floor
// ceil
// Random
// */
// Math.floor(2.5)//2
// Math.ceil(2.5)//3
// //eg of floor is
// Math.floor  (110.25)


// Variable
// they are three types of variable
// we have const
//let
//var


//baby weather app
let weather=prompt('How is theweather')

if(weather=='rainy'){
    console.log('Grab your umbrella')
}else{
    console.log('Wear your sunglasses')
}

//FUNCTIONS
//its has 0 arguments
//does: it logs out your name to the console
function sayMyName(){
    console.log('prudent')
    console.log('Orie')
    console.log('Caro')
    console.log('Blessing')
    console.log('Amos')
    console.log('Charity')
}
sayMyName('Ngozika');


//this is a function called sayMyName2
//it has 1 argument called `name`
//does: it logs out your name to the console
function sayMyName2(name){
    console.log(name)
}
sayMyName2('Chimaobi')


function greeting(name){
    console.log("Hello, nice to meet you")
}

greeting('Chima')

function greeting(name){
    greet= `hello ${name}, nice to meet you!`
    console.log(greet)
}

greeting('Johnny Depp')

/*
adds two number
@param {number}num1 the first number to add.
@param {number} num2 the second nnumber to add.
@return{number} the result of adding num1 and num2
*/

//this is standard way of documeting through commenting.
// find more information on jsdoc.app

//the return statement stops the execution of function
//and returns a value

function sum(a,b){
    return a + b
}
console.log(sum(10,20))

num1=sum(1,2)
console.log(num1)

function calculateFoodTotal(food, tip){
tipPercentage = tip/100
tipAmount=food * tipPercentage
total=sum(food,tipAmount)
return total
}
console.log(calculateFoodTotal(100,20))

//ES6
//Arrow Function
function calculateFoodTotal(food, tip){
   const tipPercentage = tip/100
    const tipAmount=food * tipPercentage
    const total=sum(food,tipAmount)
    return total
    }
    console.log(calculateFoodTotal(100,20))

    // this is arrow functionwith explicit return
    const sumArrow=(a,b)=>{
return a + b
    }
    console.log(sumArrow(100,50))

    // or
    // this is arrow function with implicit return
    //Important: for implicit return remove curly braces
    
    const sumArrow2 =(a, b)=> a + b
    console.log(sumArrow2(40,60))

    const  addArrow=(c,d)=>{
        return c + d
    }
    console.log(addArrow(200,300))

    const  subArrow=(e,f)=>{
        return e-f
    }
    console.log(subArrow(200,100))

    const divArrow=(x,y)=>{
        return  x/y

    }
    console.log(divArrow(4000,2000))

    //Arrays
    const groceries=['Apple', 'Orange', 'Grape','Pears']
    console.log(groceries)
    console.log(groceries[0])
    console.log(groceries[2])
    console.log(groceries[3])

    groceries.push('apple')
    console.log(groceries)
    groceries.push('mango')
    console.log(groceries)

    //Array Slice  
    // start from 0 inclusive and up to 2[0,1]
    // start from 0 inclusive and up to 6[0,1,2,3,4,5,]

    console.log(groceries.slice(3,7 ))
    console.log(groceries.slice(1,3 ))

    //Array Methods(slice,push,indexOf,length)
    console.log(groceries.indexOf('pears'))

    //length is an array property that returns the
    //number of element you have in a given array
    console.log(groceries.length)

    //object{}
    //Object are type of variable, quite similar to
    //arrays but they have something called key-value pairs
const person ={
name: 'prudent',
shirt:'white',
shoe:'black'

}
console.log(person.name)
console.log(person.shirt)
console.log(person.shoe)

// ways of accessing object are
//dot notation vs bracket notation
console.log(person['name'])
console.log(person['shirt'])
console.log(person['shoe'])

person.phone=12345678901
person['phone']='12345678901'
console.log(person.phone)


const person2={
name2:'Charity',
shirt:'blue',
shoe:'red',
phone:"+234801776644",
}
console.log(person2)
console.log(person2.name2)
console.log(person2.shirt)
console.log(person2.shoe)
console.log(person2.phone)

//this is ES6 Arrow Function using (2 Argument)
// Object
//template literals
// const introducer=(name,shirt)=>{

//     const person={
//         name: name,
//         shirt:shirt
//     }
//    const intro= `Hello, my name is ${person3.name} and the color of my shirt is ${person.shirt}`

//    return intro
// }
// //call the function
// console.log(introducer('prudent','blue'))

const introducer2=(name, shirt)=>{
    const person3={
        name:name,
        shirt:shirt
        
        
    }
    const intro=`Good day everyone, my name is ${person3.name} and the color of my shirt is ${person3.shirt}`
    return intro
}
console.log(introducer2('UChechukwu','white'))


// const introducer3=(name, shirt)=>{
//     const person3={
//         name:name,
//         shirt:shirt,
//         assets:100000,
//         liabilities:50000,
        
        
//     }
//     const intro=`Good day everyone, my name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.assets-person3.liabilities} USD`

//     return intro
// }
// console.log(introducer3('UChechukwu','white'))
//A method is property containing a function definition
const introducer4=(name, shirt)=>{
    const person3={
        name:name,
        shirt:shirt,
        assets:100000,
        liabilities:50000,
        networth:function(){
            return this.assets-this.liabilities
        }
        
        
    }
    const intro=`Good day everyone, my name is ${person3.name} and the color of my shirt is ${person3.shirt} and my net worth is ${person3.networth()} USD`

    return intro
}
console.log(introducer4('UChechukwu','white'))

//For Loops
// const fruits=['orange', 'Apple', 'water Mellon', 'Grape','orange', 'Apple', 'water Mellon', 'Grape']
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// //For Loop
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[0])
// }
// //i++ means increament with 1

// //easy way to write for loop
// for(const fruit of fruits){
//     console.log(fruit)
// }

// const numbers=[1, 2, 3, 4, 5, 6]
// //how to sum numbers in array
// for(const number of numbers){
//     console.log(number)
// }
// //or
// for(let i=0; i<numbers.length;i++){
//     console.log(numbers[i])
// }
// if you want to double this number
// for(const number of numbers){
//     console.log(number *2)
// }
// double the array
//[2, 4, 6, 8, 10, 10]
//turn it to function
// const double=(numbers)=>{
//     let result=[]
// for(const number of numbers){
//     result.push(number * 2)
// }
// return result
// }
// console.log(double([1, 2, 3, 4, 5, 6]))

//how to square number instead of multiplication
// we use exponential

// const double=(numbers)=>{
//     let result=[]
// for(const number of numbers){
//     result.push(number ** 2)
// }
// return result
// }
// console.log(double([1, 2, 3, 4, 5, 6]))


//Letter Counter
// const howManyLetters=()=>{
//     const phrase='hello Jane, can you go to shoprite with me?'
//     for(letter in phrase){
//         console.log(letter)
//     }
// }
// howManyLetters()

// const howManyLetters=()=>{
//     const phrase='Hello Chike, i have orange mango and apple for you'
//     for(letter in phrase){
//         console.log(letter)
//     }
// }

// howManyLetters()
// to start counting with 1
// const howManyLetters=(phrase)=>{
// return {result: phrase.length}
// }
// const phrase= prompt('write your phrase')
// console.log(howManyLetters(phrase))



// [1,2,3,4]//10
// result=0
// result=1
// result=3
// result=6
// result=10



// const sumArray=(numbers)=>{
//     let result=0;
//     //for loop
//     for(const number of numbers){
//         console.log(number)
//         // increament is
//         result=result + number
//     }
//     return{result}
// }
// const nums=[1,2,3,4,5]
// console.log(sumArray(nums))

const max=(numbers)=>{
   let result=numbers[0]
    for(const number of numbers){
        if(number>result){
            result=number

        }
    }
    return {result}
}
console.log(max([1,2,3,4,5]))

// how to calculate frequency
// const letterFrequency=(phrase)=>{
//    console.log(phrase)
//    // lets loop it
//    for(const letter of phrase){
//     console.log(letter)
//    }
// }
// console.log(letterFrequency('haha'))


// //Strings with length not equal to the number of characters
// const emoji = "😄";
// console.log(emoji.length); // 2
// const adlam = "𞤲𞥋𞤣𞤫";
// console.log(adlam.length); // 8
// const formula = "∀𝑥∈ℝ,𝑥²≥0";
// console.log(formula.length); // 11


// // //increament the value by +1
// // //otherwise, set the value to 1

// const letterFrequency=(phrase)=>{
//     //letterrFrequency ('haha)
//     console.log(phrase)
//     //make a frequency object{}
//     let frequency={}
//     for(const letter of phrase){
//         // //check if letter exist in frequency
//     if(letter in frequency){

//     //increament the value by +1
//     frequecny[letter]+=1
//     //or
//     // frequency[letter]=frequency[letter]+1
//         //or
//     // frequency[letter]+=1
//     //or
//     //or frequency[letter]++
//     //or frequency[letter]--

//     }else{
//         frequency[letter]=1
//     }

//     }
//     return frequency
// }

// console.log(letterFrequency('lol what are you doing later tonight lol, haha!'))

//word Frequency
//if i called function wordFrequency('lol what lol')
//it will return  {'lol:2, 'what:1}
// const wordFrequency=(phrase)=>{
//     let frquency={}
//     return frequency
// }
// // console.log(wordFrequency('lol what lol'))






// const wordFrequency=(phrase)=>{
// let frequency={}
// words=phrase.split(' ')
// for(const word of words){
//     console.log(word)
//     if(word in frequecy){
//         frequency[word]+=1
//     }else{
//         frequency[word]=1
//     }
// }
// console.log(words)
// return frequency
// }
// console.log(wordFrequency('lol what ;lol yo yo yo'))
// //increament operators
// //they are ++, --,+=
// //if you want to increament by one use ++
const actors=[
    {name:'Johnny', networth:2000000},
    {name:'amber', networth:10},
    {name:'matt',networth:1700000},
    {name:'brad',networth:3000000},
    {name:'leonard', networth:1000000},
]
// let result=actors.filter(actor=>actor.networth>10)
// console.log(result)
//let names=result.map(actor=>actor.name).join(',   ')
console.log(actors.reduce((prev,curr)=> prev+curr.networth,0))



//  names = result.map(actor=>actor.name).join(', ')
// playground.innerHTML=`<h1>${names}</h1>`





//function multiple
function multiple(a,b){
    return a * b
}
const nums=[1,2,3,4]
const result =nums.reduce((a, b) => a + b, 0)
console.log(result)
// int main () {

//     int n[ 10 ]; /* n is an array of 10 integers */
//     int i,j;

// //initialize elements of array n to 0
// for(i=0; i < 10; i++){
//     n[i]=i+100;
// }
// //output each array element's valu
// for(j=0; j< 10; j++){
// printf ('Element [%d]=%d\n', j, n[j]);
// }
// return 0;


//when the above code is compiled and executed, it produce the following result
Element[0] = 100
Element[1] = 101
Element[2] = 102
Element[3] = 103
Element[4] = 104
Element[5] = 105
Element[6] = 106

let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}
Element[7] = 107
Element[8] = 108
Element[9] = 109


//this is what we called Dom Manipulation
console.log('hello')
let title = document.getElementById('title')

console.log('before',
title.innerText)
title.innerText = 'goodday my darling'
console.log('after',

title.innerText)

let mymy=document.getElementById('mymy')
console.log(mymy.innerText)
mymy.innerText='I love Tech'
console.log(mymy.innerText)

// let mymyDiv=document.getElementById('mymy')
// console.log('before', mymyDiv.innerText)
// let message='good morning everyone'
// mymyDiv.innerText=message;
// console.log('after', mymyDiv.innerText)

//To change HTML
// mymyDiv.innerHTML='<p>Good day</p>'

//replace the word good day with the message 
//variable using template literals

let mymyDiv=document.getElementById('mymy')
console.log('before', mymyDiv.innerText)
let message='good morning everyone'
mymyDiv.innerText=message;
console.log('after', mymyDiv.innerText)
mymyDiv.innerHTML=`<p>${message}</p>`
mymyDiv.style.color='white'
mymyDiv.style.backgroundColor='blue'
mymyDiv.style.fontSize='30px'


let redDiv=document.getElementById('red')
let yellowdDiv=document.getElementById('yellow')
let greenDiv=document.getElementById('green')
//getComputerChoice 'paper'
//userChoice vs. computerC hoice result
//-1,0,1
//show everything on the screen[DOM]
redDiv.onclick=()=>{console.log('red')}
yellowdDiv.onclick=()=>{console.log('user choose rock')}
greenDiv.onclick=()=>{console.log('Users choose his her color')}
//or
// redDiv.onclick=function(){
//     console.log('red')
// }
//to change to class
const square=document.querySelectorAll('.colorSqaure')
console.log(square)

// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)

//forEach
// const timeClicked={'red': 0, 'yellow': 0, 'green': 0}
// square.forEach(square => {
//     square.onclick=()=>{
//         timeClicked[square.value]+=1
//         square.innerText=timeClicked[square.value]
//     }
// })
// function clearScores(){
//     timeClicked.red=0
//     timeClicked.yellow =0
//     timeClicked.green =0
//     square.forEach(square=>{
//         square.innerText= 0
//     })
// }

// const clearGameBtn = document.getElementById('clear-game')
// clearGameBtn.onclick=()=>clearScores()





// const billTotalInput= document.getElementById('billTotalInput')
// const tipInput = document.getElementById('tipInput')
// const numberOfPeopleDiv = document.getElementById('numberOfPeople')
// const personTotal = document.getElementById('numberOfPeople')

// // // get number of people from number of people div
// let numberOfPeople=number (numberOfPeopleDiv.innerText)
// /// calculate the total bill per person 
// const calculateBill=()=>{   
   

// const bill=number(billInput.value)
// // console.log(bill)

// const tipPercentage =number(tipInput.value)/100
// // console.log(tipPercentage)

// const tipAmount= bill * tipPercentage
// // console.log({tipAmount})

// // //to calculate total= (tipAmount + bill)
// const total = tipAmount + bill
// // // console.log({total})

// const perPersonTotal = total/numberOfPeople
// // console.log({perPersonTotal})

// // //calculate the per person total(total divided by numberof people)
// //To Update the perPersonTotal on Dom and show it to user
// perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

// }
// //split the bill between more people
//increament the amount of people
// const increaasePeople=()=>{}

// numberOfPeople +=1
// //update the dom with the new number of people
// numberOfPeopleDiv.innerText=numberOfPeople

// numberOfPeople -=1
// //update the dom with the new number of people

// numberOfPeopleDiv.innerText=numberOfPeople
// calculateBill()
//decreament the amount of people
// const decreasePeople=()=>{
//     if(numberOfPeople<=1){
//         console.log(numberOfPeople,'is 1 or less than 1')
//         return
//     }
// }

// // // split the bill betwween fewer people
// const decreasePeople=()=>{}



//randomselectfromArray
// const randomFruit=(fruits)=>{
// const randomNumber=
// math.floor(math.random () * fruits.length)

// return fruits[randomNumber]
// }

// fruits=['Apple', 'orange', 'pinaple', 'banana','cumumber', 'pawpaw']
// console.log(randomFruit(fruits))


const randomFruit=(fruits)=>{
    // const randNumber= math.floor(math.random()*fruits.length)
console.log(randomFruit)
    return fruits(randomNumber)

}
fruits=['orange', 'mango', 'apple']
console.log(randmFruit(fruits))
