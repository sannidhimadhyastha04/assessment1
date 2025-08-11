//console.log(a);
//var a = 10;
//console.log(a);
//console.log(b);/var a = 50;
//console.log(a);
//let b = 10;
//onsole.log(b);
//b = 30;
//onsole.log(b);
//const c = 30;
//console.log(familyfunction);
//familyfunction();
// //function declaratioon
// //function functionname();
//function familyfunction()
{
    //console.log("papa will not go in uncle function");
    //console.log("She takes a lot of time in makeup");

};
/*family();

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
 
//initial value; condition; increment/dec
for(let i = 0; i< a.length; i++){
    console.log('2 * $(a[i])=',a[i]);
};
console.log(a);*/

//let b = a.map((el , ui) =>{
//    return el * ui;
//});

//console.log(a);
//console.log(b);

/*let table=(param) =>{
    for(let i=0; i< a.length; i++){
        console.log('$(param)*$(a[i])=' ,a[i]*param);
    }
};
table(3);
let a="40";
if(aa==4){
    console.log("value is the same");
}
else if(aa==40){
    console.log("value is 40");
}
else if(aa==90){
    console.log("value is 90");
}
else{
    console.log("value is not the same");
}*/

// if marks of a student is more than 90 he will get a bike
// more than 80 marks
// more than 70 game
// nothing
/*let marks=80;
if(marks>=90){
    console.log("he will get bike");
}
else if(marks>=80){
    console.log("there will be party");
}
else if(marks>=70){
    console.log("there will be game");
}
else{
    console.log("nothing");
}*/


//let acc = 10;let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let b=a.filter((el) =>5).map((el) => el * 7);
//let c = b.map((el) => 5);
//console.log(b);
//let b=a.reduce((acc , cur , index) =>{
 //   return acc + cur;
//}, 100);
//console.log(b);
//acc = acc + 1;
//acc = acc + 2;
//acc = acc + 3;
//acc = acc + 4;
//acc = acc + 5;
//acc = acc + 6;


//const evenSum=a.filter((el) => el% 2==0).reduce((a , e) => a+e);
//const oddSum=a.filter((el) => el% 2==1).reduce((a , e)=> a+e);
//console.log(evenSum ,oddSum);
/*const aa=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
.map().filter().reduce()

const se=aa
.map((el , i) => i +1)
.filter((el) => el% 2==0)
.reduce((a , e) => a + e);

const so=aa
.map((el , i) => i +1)
.filter((el) => el% 2==1)
.reduce((a , e) => a + e);


console.log(se , so);*/

/*const fetchData=async() =>{
    const Response= await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(Response);
    
};
fetchData();*/


/*const fetchData=async() =>{
const response= await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);
const data= await response.json();
console.log(data);
};
fetchData();
console.log("Hello");*/


/*const fetchData=async() =>{
const response= await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response.ok);
if (response.ok==true){
const data= await response.json();
console.log(data);}
};
fetchData();
console.log("Hello");*/


/*const fetchData= async() =>{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
 console.log(response.ok);
 if (response.ok==true){
    const data= await response.json();
    console.log(data);
    
 }
 const vall=await fetch ("https://jsonplaceholder.typicode.com/todos");
 console.log(vall.ok);
 if(vall.ok==true){
     const data= await vall.json();
    console.log(data);
 }
 const varr=await fetch("https://jsonplaceholder.typicode.com/albums");
 console.log(varr.ok);
 if (varr.ok==true){
    const data= await varr.json();
    console.log(data);
    
 }
};
fetchData();*/


/*const fetchData= async() =>{
try{
    //successful case we give code inside try//
const response= await fetch("https://jsonplaceholder.typicode.com/uskjers");
 if (response.ok==true){
    const data= await response.json();
    console.log(data);
 }
else{
    throw new Error("Something is wrong");
}

}
catch( err){
    console.log("#Error" , err);
    
}};
fetchData()*/


/*const fetchData= async()=>{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);
const data= await response.json();
console.log(data);

const vall=await fetch ("https://jsonplaceholder.typicode.com/todos");
 console.log(vall.ok);
 if(vall.ok==true){
     const data= await vall.json();
        console.log(data);}
try{
const response= await fetch("https://jsonplaceholder.typicode.com/posts");
 if (response.ok==true){
    const data= await response.json();
    console.log(data);
 }
else{
    throw new Error("Something is wrong");
}
}
catch( err){
        console.log("#Error" , err);}
};
fetchData();*/



/*const fetchData= async() =>{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
 console.log(response.ok);
 if (response.ok==true){
    const data= await response.json();
    console.log(data);
    
 }
 const vall=await fetch ("https://jsonplaceholder.typicode.com/todos");
 console.log(vall.ok);
 if(vall.ok==true){
     const data= await vall.json();
    console.log(data);
 }
 const varr=await fetch("https://jsonplaceholder.typicode.com/albums");
 console.log(varr.ok);
 if (varr.ok==true){
    const data= await varr.json();
    console.log(data);
    
 }
};
fetchData();*/


const fetchData= async()=>{
    try{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
 const response1= await fetch("https://jsonplaceholder.typicode.com/todos");
  const response2= await fetch("https://jsonplaceholder.typicode.com/photos");
  if (response1.ok) {
    const data = await response.json();
    console.log(data);
  }
  if (response.ok==true) {
    const data = await response.json();
    console.log(data);
  }
    if (response.ok==true) {
        const data = await response2.json();
        console.log(data);
    }
    if(!response.ok|| !response1.ok|| !response2.ok) {
        throw new Error("Something went wrong");
    }
}
catch (err) {
    console.err("#Error", err);
}};
fetchData();


































































