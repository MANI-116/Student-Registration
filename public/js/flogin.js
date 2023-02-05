const loginform=document.querySelector('form')

loginform.addEventListener('submit',(e) =>{
    e.preventDefault()

    const passwordEl=document.getElementById('password-el')
const usernameEl=document.getElementById('username-el')

 
    const password=passwordEl.value
    const user=usernameEl.value
    
    console.log(password)
    console.log(user)
    

    fetch('http://localhost:80/users/'+user+'/password').then((response)=>{
    response.json().then((data=>{

        const isvalid=0
        
        if(password==data.password )
            {  window.open('http://localhost:80/faculty')
            }  
            
            
        
    })).catch((e)=>{
        console.log(e)
    })   
    
    
    
    })

})

