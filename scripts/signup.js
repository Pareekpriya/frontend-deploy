

const form = document.getElementById("form").addEventListener("submit",async (event)=>{
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;

    try{
     if(email=="priy@gmail.com" && password=="1230"){
      alert("Signup success!")
      window.location.href="todos.html"
     }else{
      alert("Incorrect email or password!")
     }
    }catch(err){
      console.log("err",err)
    }
    
    });




