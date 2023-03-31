let form = document.querySelector("#registration_form");
form.addEventListener("submit", handleSubmit );
function handleSubmit(event){
    event.preventDefault();
    // console.log("i am clicked")
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mob").value;
    let password = document.querySelector("#password").value;

    if(!name || !email || !mobile || !password)
    {
        alert("Empty Input");
        return;
    }

    email = "eve.holt@reqres.in";
    password = "pistol"

    let payload = {
        email,
        password
    }
    fetch("https://reqres.in/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
    }).then((res) =>{
        return res.json();
        //pending
    }).then((res) =>{
        console.log(res);
        alert(`success- ${res.token}`);
        window.location.href="login.html"
       
        //resolved
    }).catch((err) =>{
        console.log(err)
        alert("Not able to register")
        //rejecetd
    })
}
