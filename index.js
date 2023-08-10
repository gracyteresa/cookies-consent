const maindiv=document.getElementById("modal")
const formEl=document.getElementById("consent-form")
const para=document.getElementById("modal-text")
const xbtn=document.getElementById("modal-close-btn")
const deletebtn=document.getElementById("decline-btn")
const btndiv=document.getElementById("modal-choice-btns")
setTimeout(function(){
    maindiv.style.display="block"

},1500)


formEl.addEventListener("submit",function(e){
    e.preventDefault()
    const ob= new FormData(formEl)
    

       para.innerHTML=`<div class="modal-inner-loading">
       <img src="loading.svg" class="loading">
       <p id="upload-text">Uploading your data to the dark web...</p>
   </div>`
    
    
    setTimeout(function(){

        document.getElementById("upload-text").innerHTML=` Making the sale...`
    
     
     },1500)
     setTimeout(function(){
        

        document.getElementById("modal-inner").innerHTML= `
        <h2 class="h2"><span class="span">${ob.get("fullName")}</span>,Thanks you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images.png">
        </div>
    `
    xbtn.disabled=false
    
     
     },3000)



})
xbtn.addEventListener("click",function(){
    maindiv.style.display="none"

})
deletebtn.addEventListener("mouseenter",function(){
    btndiv.classList.toggle("swap")
   
})

