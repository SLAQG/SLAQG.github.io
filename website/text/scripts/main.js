let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc=myImage.getAttribute('src');
     if (mySrc==='images/wk.jpg') {
         myImage.setAttribute('src','images/wk3.jpg')
     } else {
         myImage.setAttribute('src','images/wk.jpg')
     }
     let myButton=document.querySelector('button');
     let myHeading=document.querySelector('h1');
     
     function setUserName(){
         let myName=prompt('请输入你的姓名');
         if (!myName||myName===null) {
             setUserName();
         } else {
           localStorage.setItem('name',myName);
         myHeading.innerHTML='欢迎'+myName;  
         }
         
     }
     
         if (!localStorage.getItem('name')) {
             setUserName();
         } else {
             let storedName=localStorage.getItem('name');
             myHeading.textContent='欢迎'+storedName;
         }

     
     myButton.onclick=function(){
         setUserName();
     }
    
}