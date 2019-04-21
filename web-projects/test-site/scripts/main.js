let myimage = document.querySelector('img')
myimage.onclick = function(){
    let mysrc = myimage.getAttribute('src')
    if (mysrc === 'images/248922-106.jpg'){
        myimage.setAttribute('src','images/331961-106.jpg')
    }else{
        myimage.setAttribute('src','images/248922-106.jpg')
    }
}
function displayname(name){
    let myname = document.querySelector('h1')
    myname.textContent ='hello '+ name
}
function setusername(){
    let username = prompt('please input your name')
    localStorage.setItem('name',username)
    displayname(username)
}
let getusername = localStorage.getItem('name')
if(!getusername){
    setusername();
}else{
    displayname(getusername);
}
let getbutton = document.querySelector('button')
getbutton.onclick = setusername
