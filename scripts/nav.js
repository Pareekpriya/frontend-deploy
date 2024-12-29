const navbar = ()=>{
   let card = `
    <div id="nav-container">
        <a id="logo" href="index.html">mini todo app</a>
        <div id="nav-links>
           <a href="#"></a>
           <a href="signup.html">Signup</a>
           <a href="login.html">Login</a>
           <a href="todos.html">Todos</a>

        </div>
    </div>
    `;
    document.getElementById("nav").innerHTML=card;
};

navbar();

