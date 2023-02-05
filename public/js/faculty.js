

const form=document.getElementById('form')
const container=document.getElementById('data')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const branch=document.getElementById('Branch').value
const degree=document.getElementById('Degree').value
const sem=document.getElementById('sem').value
const year=document.getElementById('Year').value
fetch('http://localhost/tasks?Branch='+branch+'&sem='+sem+'&degree='+degree).then((response)=>{
    response.json().then((data)=>{
        let tableData =""
        
        data.map((values)=>{
            tableData+=`<tr>
            <td>${values.Roll_No}</td>
            <td>${values.First_Name}</td>
            <td>${values.Last_Name}</td>
        </tr>`;})
        document.getElementById("table").innerHTML+=tableData

        })     

    }).catch((e)=>{
        console.log('error')
    })
    

    
})



