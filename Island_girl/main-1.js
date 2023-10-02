    var length=document.querySelectorAll("#btn").length;
    for (let i = 0; i < length; i++) {
       
    document.querySelectorAll("#btn")[i].addEventListener("click",()=>{
      
        document.querySelectorAll("#btn")[i].classList.add("selected")   
    });}
    var resources=document.querySelectorAll(".top-link").length;
    for (let i = 0; i < resources; i++) {
       document.querySelectorAll(".sources")[i].addEventListener("click",()=>{
        document.querySelectorAll(".resources")[i].classList.toggle("display");
       });
    }

//.list {
//    padding: 12px;
//color: rgb(83, 74, 74);
 //   font-size: 1rem;
 //   font-weight: 600;
//
//}

//.list ul {
 //   display: flex;
 //   align-items: center;
  //  justify-content: space-evenly;
//}

//ul li {margin-left: 5px; 
    //list-style: none;
//}
