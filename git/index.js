//tag selector
//let body=document.getElementsByTagName("body");
//console.log(body);

//class selector
//let classes = document.getElementsByClassName("h1");
//console.log(classes);

//id selector
//let val = document.getElementById("val");
//console.log(val);

//queryselector
//let varr = document.querySelector("h1");
//console.log(varr);

//queryselector
//let varr = document.querySelector(".a");
//console.log(varr);
  
//queryselectorall
//let as = Document.querySelectorAll("#val");
//console.log(as(0));
//console.log(classes(0));

//1st step 1 want node
//let aaa = document.querySelector(".a");

// read operation
//let texts = node[0].innerHTML;
//console.log(texts);

//write operation
//classes.textContent = "Entering from js";



//let text1 = node[0].textContent;
//console.log(text1);

//let text2 =node1.innerHTML;
//console.log(text2);


//let sty=document.querySelectorAll("h1");
//console.log(sty);

//let=sty[0].style.color = "red";
//console.log(sty);


//sty[1].style.color = "blue";
//console.log(sty);
// to remove a class
//sty[1].classList.remove("hidden");


// to add the class 
//sty[1].classList.add("body");


// toggle class
//sty[1].classList.toggle("hidden");

//sty[1].classList.toggle("body");

// 1 create a tag
//const v= document.createElement("h3");

// 2 put content
//v.textContent="added from js"

// 3 where we have to put find it node
//const h3=document.getElementsByClassName("cnt");

// 4 
//h3[0].appendChild(v);
{/*
  <div>
  <h2 class="sd">fgfgfg</h2>
  </div>*/
    
    }
//const div =document.createElement("div");
//const h2 = document.createElement("h2");
//h2.textContent="Anything";
//h2.classList.add="sd";
//div.appendChild(h2);
//document.body.appendChild(div);



  //<div>
{/* <button class="a">increment</button>
    <button>decremnent</button>
    <button>reset</button>
        </div>*/}

//const img=document.createElement("img");
//mg.src="https://i.pinimg.com/1200x/83/7e/6b/837e6bc8615a254a681988bccac87010.jpg"
 //img.alt="shinchan";
//img.id="my shinchan";
//mg.height="400";
//img.width="500";

//div.appendChild(img);
//document.body.appendChild(div);

//const img = document.createElement("img");

// Set attributes
//img.setAttribute("src","//i.pinimg.com/1200x/a8/d4/8a/a8d48a4aee0b62d3a7425545628cd7e8.jpg");
//img.setAttribute("alt", "Doraemon");
//img.setAttribute("id", "doraemonImage");
//img.setAttribute("width", "300");

// Append to body
//document.body.appendChild(img);


/*const btn = document.getElementsByTagName("button");
const incbtn = btn[0];
const decbtn = btn[1];
const resetbtn = btn[2];
const p = document.querySelector("#val");
let val = 0;
let inc = true;

 let pause = () => {
    if (val>= 10) {
        inc = false;
    }
 };

const handler = (vall) =>{
    if (inc) {
    vall? (val=val +1): (val= val-1);
    val>=0 ?(p.style.color = "green") : (p.style.color = "blue");
    p.textContent = val;
}
pause();
};

const init = ()=>{
    val=0;
    p.textContent=val;
    inc = true;
};
incbtn.addEventListener("click",()=>handler(true));
decbtn.addEventListener("click",()=> handler(false));
resetbtn.addEventListener("click", init);*/
    

/*const incButton=document.querySelector("button");
console.log(incButton);
incButton.addEventListener("click", () =>{
console.log("button clicked");
});*/


var obj={
    id:1,
    name:"Name",
    email:"example@com",
};
console.log(obj. name);



var obj={
    id:1,
    name:"Name",
    email:"example@com",
};
console.log(obj.id);


var obj={
    id:1,
    name:"Name",
    email:"example@com",
    data:{
        address:"Delhi",
        contact:79883789,
        adhar:7642830975,
        Info:{
            College:"Sahyadri",
            Corse:"Btech",
        },
    },
};
console.log(obj);


JSON.stringify(obj);
console.log(obj.data);

 var arr=[{id:1,Name:"as"} , 
    {id:2,Name:"as"} , 
    {id:3,Name:"as"}  ,
    {id:4,Name:"as"},
    ];
    console.log(arr);
     
 arr.forEach((el) =>(el.id=el.id*el.id));
console.log(arr);

arr.forEach((el) =>console.log(el));

//const a=arr.map((el) =>el.id);
//console.log(a);

/*const a=arr.map((el) =>{
    el.id=el.id*el.id;
    return el;

});
console.log(a);*/



const a=arr.map((el) =>{
    el.id=el.id*el.id;
return {
    i:el.id,
    n:el.name,
}});
console.log(a);

const b=[0,0,0,0,0,0,0,0,0,0]
/*{
id:index,
name:index+el,
as:id and name
}*/
/*const c=b.map((el,index) =>{
    let n=el+index;
    const asd=index+n;
    return{
        id:index,
        name:n,
        as:asd,
    };
});
console.log(c);*/

 

/*const c=b.map((el,index) =>{
    //let n=el+index;
    //const asd=index+n;
    return{
        id:index,
        name:index+el,
        as:index+index+el,
    };
});
console.log(c);*/





/*const c=b.map((el,index) =>{
    //let n=el+index;
    //const asd=index+n;
    return{
        id:index,
        name:index+el,
        as:index+index+el,
    };
}).filter((el) =>el.id%2==0 && el.name%2==0 && el.as%2==0);
console.log(y);



const c=b.map((el,index) =>{
    //let n=el+index;
    //const asd=index+n;
    return{
        id:index,
        name:index+el,
        as:index+index+el,
    };
}).filter((el) =>el.id%2==1 || el.name%2==1 || el.as%2==1);
console.log(x);*/

// Fetching dummy data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-table');
        data.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
fetch























 















































