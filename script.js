//your code here
const image = document.getElementById('image');
const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const info = document.getElementById('info');
document.getElementById("getuser").addEventListener("click",getuser)

let user = getuser();
async function getuser() {
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json();
    user = (data.results[0])
    console.log(user)  
    info.innerText = ''
    image.src = user.picture.large
    name.innerText = user.name.first +" "+ user.name.last

    return user
}
console.log(user)
age.addEventListener('click',()=>{
    info.innerText = user.dob.age
})
email.addEventListener('click',()=>{
    info.innerText = user.email
})
phone.addEventListener('click',()=>{
    info.innerText = user.phone
})