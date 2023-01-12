/* 
for (let age = 30; age < 40; age++) 
{
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
*/


/*const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) 
{
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  //return gifts;
}
wrapGifts(gifts);
*/



const names=["Charlie","Samip","Ali"];
const occasion="birthday";
function writeCards(names, occasion)
{
    const thankYouMessages=[];
    for (var i=0;i<names.length; i++)
    {
        thankYouMessages[i]=`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
    }
    return thankYouMessages; 
}
console.log(writeCards(names, occasion));



/*
const gifts=["teddy bear","drone", "doll"];
function wrapGifts(array)
{
    let i=0;
    while (i<array.length)
    {
        console.log(`Wrapped the ${array[i]} and added a bow!`);
        i++;
    }
}
wrapGifts(gifts);
*/

function countDown(int)
{
    while (int>=0)
    {
        console.log(int);
        int--;
    }
}

countDown(10);

