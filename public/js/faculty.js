let studentInfo;

function openPopup(rn)
        {
            console.log(studentInfo)
            let student;
            for(let i=0;i<studentInfo.length;i++){
                if(studentInfo[i].Roll_No==rn){
                    student=studentInfo[i];
                    break;

                }
            }
            console.log(student);
   
            // let student=values
            
            // create the modal element
           const modal = document.createElement("div");
           modal.classList.add("modal");
         
     
        // set the HTML content of the modal
        modal.innerHTML = `
        <div class="modal-content">

        
        <span class="close">&times;</span>        
         <h3>STUDENT REGISTRATION FORM</h3>

 
<table align="center" cellpadding = "10">

<!----- First Name ---------------------------------------------------------->
<tr>
  <td >Roll No</td>
  <td><textarea id="roll" name="roll.no" rows="1" cols="15">${student.Roll_No}</textarea>
  </td>

</tr>
  
<tr>
    <td>FIRST NAME</td>
    <td><textarea id="fname" name="fname" rows="4" cols="50">${student.First_Name}</textarea>
    </td>
</tr>
 
<!----- Last Name ---------------------------------------------------------->
<tr>
    <td>LAST NAME</td>
    <td><textarea id="lname" name="lame" rows="4" cols="50">${student.Last_Name}</textarea>
    </td>
</tr>
 
<!----- Date Of Birth -------------------------------------------------------->
<tr>
<td>DATE OF BIRTH</td>
 <td><input id="dob" type="text" name="dob" maxlength="11"/>


</td>
</tr>
 
<!----- Email Id ---------------------------------------------------------->
<tr>
<td>EMAIL ID</td>
<td><input type="text" name="Email_Id" maxlength="100" /></td>
</tr>
 
<!----- Mobile Number ---------------------------------------------------------->
<tr>
<td>MOBILE NUMBER</td>
<td>
<input type="text" name="Mobile_Number" maxlength="10" />
(10 digit number)
</td>
</tr>
 
<!----- Gender ----------------------------------------------------------->
<tr>
<td>GENDER</td>
<td>
<textarea id="gender" name="gender" rows="4" cols="50">male</textarea>

</td>
</tr>
 
<!----- Address ---------------------------------------------------------->
<tr>
<td>ADDRESS <br /><br /><br /></td>
<td><textarea name="Address" rows="4" cols="30"></textarea></td>
</tr>
 
<!----- City ---------------------------------------------------------->
<tr>
<td>CITY</td>
<td><input type="text" name="City" maxlength="30" />
(max 30 characters a-z and A-Z)
</td>
</tr>
 
<!----- Pin Code ---------------------------------------------------------->
<tr>
<td>PIN CODE</td>
<td><input type="text" name="Pin_Code" maxlength="6" />
(6 digit number)
</td>
</tr>
 
<!----- State ---------------------------------------------------------->
<tr>
<td>STATE</td>
<td><input type="text" name="State" maxlength="30" />
(max 30 characters a-z and A-Z)
</td>
</tr>
 
<!----- Country ---------------------------------------------------------->
<tr>
<td>COUNTRY</td>
<td><input type="text" name="Country"/></td>
</tr>
 
<!----- Courses ---------------------------------------------------------->
 
 


 
<!----- Qualification---------------------------------------------------------->
<tr>

<table>
 
<tr>
<td align="center"><b>Sl.No.</b></td>
<td align="center"><b>Course Code</b></td>
<td align="center"><b>Course Name</b></td>
<td align="center"><b>Credits</b></td>
<td align="center"><b>Hours</b></td>

</tr>
 
<tr>
<td>1</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
 
<tr>
<td>2</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
 
<tr>
<td>3</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
 
<tr>
<td>4</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
 <tr>
<td>5</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
<tr>
<td>6</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
<tr>
<td>7</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
<tr>
<td>8</td>

<td><input type="text" name="ccode" maxlength="30" /></td>
<td><input type="text" name="cname" maxlength="30" /></td>
<td><input type="text" name="credits" maxlength="20" /></td>
<td><input type="text" name="hrs" maxlength="30" /></td>
</tr>
<tr>
  <td>9</td>
  
  <td><input type="text" name="ccode" maxlength="30" /></td>
  <td><input type="text" name="cname" maxlength="30" /></td>
  <td><input type="text" name="credits" maxlength="20" /></td>
  <td><input type="text" name="hrs" maxlength="30" /></td>
  </tr>
  

</table>
<tr>
  <td>Total Credits</td>
  <td><input type="text" name="Total Credits"/></td>
  </tr>
  <tr>
    <td>Total Hours</td>
    <td><input type="text" name="Total hours"/></td>
    </tr>
    <tr>
      <td>previous semster number</td>
      <td><input type="text" name="psn"/></td>
      </tr>
    <tr>
        <td>SGPI</td>
        <td><input type="text" name="SGPI"/></td>
    </tr>
    <tr>
          <td>CGPI</td>
          <td><input type="text" name="CGPI"/></td>
    </tr>
    <tr>
      <td>Courses With Grade F(if any)<br /><br /><br /><br /><br /><br /><br /></td>
       
      <td>
      <table>
       
      <tr>
      <td align="center"><b>Sl.No.</b></td>
      <td align="center"><b>Course Code</b></td>
      <td align="center"><b>Course Name</b></td>
      
      
      </tr>
       
      <tr>
      <td>1</td>
      
      <td><input type="text" name="fccode" maxlength="30" /></td>
      <td><input type="text" name="fcname" maxlength="30" /></td>
      
      </tr>
       
      <tr>
      <td>2</td>
      
      <td><input type="text" name="fccode" maxlength="30" /></td>
      <td><input type="text" name="fcname" maxlength="30" /></td>
      
      </tr>
      </table>
      
      <button class="w3-btn">add rows</button>
    
  
 
<!----- Course -------------------------------------------------------->


<div class="mb-3"></div>
<tr>
  <td> <label for="formFileSm" class="form-label">Fee Receipt</label></td>
 <td> <input class="form-control form-control-sm" id="formFileSm" type="text"></td>
</tr>
<tr>
<td> <label for="formFileSm" class="form-label">Certificates(if applicable)</label></td>
<td> <input class="form-control form-control-sm" id="formFileSm" type="file"></td>
</tr>
</div>


</table>

 

    `;
      //gettting field id
      
     
        // add the modal to the page
           document.body.appendChild(modal);
     
           // add a click event listener to the close button
        const closeBtn = modal.querySelector(".close");
           closeBtn.addEventListener("click", () => {
           modal.remove();
           })
       }



const form=document.getElementById('form')
const container=document.getElementById('data')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const branch=document.getElementById('Branch').value
    const degree=document.getElementById('Degree').value
    const sem=document.getElementById('sem').value
    const year=document.getElementById('Year').value

 fetch('http://localhost/tasks?Branch='+branch+'&sem='+sem+'&degree='+degree).then((response)=>{
 response.json().then((data)=>
 {
        console.log(data)
        let tableData=""
        let count=0;

        studentInfo=data

        
        data.map((values)=>
    {

         
             /////................................/////////////
            let student=values.Roll_No
            console.log(student)
            tableData+=`<tr>
            <td>${count}</td>
            <td>${values.Roll_No}</td>
            <td>${values.First_Name}</td>
            <td>${values.Last_Name}</td>
            <td><button onclick="openPopup('${student}')" >view</button></td>
            

            </tr>`;
             count++;
    })
        document.getElementById("table").innerHTML+=tableData

 })     

}).catch((e)=>{
        console.log('error')
    })
    

    
})



