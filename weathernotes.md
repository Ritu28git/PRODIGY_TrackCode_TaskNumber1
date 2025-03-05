 promise - the promise object represents the eventual completion (or failure) of an
  asynchronous operation and its resulting value.

JavaScript mein, Promise ek object hota hai jo future mein kisi asynchronous operation ke complete hone ka result represent karta hai. Iska use hum asynchronous code ko handle karne ke liye karte hain, jaise ki network request, file reading, ya koi time-consuming task.

promise - ki three stages hoti h
1. pending
2. Resolve
3. reject


1. Pending:-  Jab promise abhi complete nahi hua hota, matlab operation abhi chal raha hota hai.
2. Resolved(Fulfilled):- Jab promise successful ho jata hai, matlab operation complete ho gaya hai.
3. Rejected:- Jab promise fail ho jata hai, matlab operation mein koi error aata hai.
Ek promise object do main cheezein hoti hain:

.then(): Jab promise resolve hota hai.
.catch(): Jab promise reject hota hai.




Cart 
order 
foodetails
droplacation


// const pro2= response.json();
// pro2.then ((data)=>{
//     console.log(data);

})



1.  const Promise = fetch('http://api.weatherapi.com/v1/current.json?key=3b78ee83b8f141d4be241436252702&q=India&aqi=yes')

Promise.then ((response)=>{
 return response.json();
})
 pro2.then ((data)=>{
    console.log(data);
 })

 2. promises
    .then(response=>response.json())
    .then(data=>console.log(data))

 3.    fetch('http://api.weatherapi.com/v1/current.json?key=3b78ee83b8f141d4be241436252702&q=India&aqi=yes')
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch((error)=>console.log(error));