document.querySelector("form").addEventListener("submit",function (submitForm)
 {
            submitForm.preventDefault();
           const form = document.getElementById('myform');

            let fname = document.getElementById('fname').value;
            let lname = document.getElementById('lname').value;
            let bod = document.getElementById('bod').value;
            let mobileno = document.getElementById('number').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let address = document.getElementById('address').value;
            let city = document.getElementById('city').value;
            let file = document.getElementById('pdf').value;
            let selectGendervalue = document.querySelector('input[name="gender"]:checked');
            if(selectGendervalue)
            {
                var gender = selectGendervalue.value;
            }

            let checkboxes = document.querySelectorAll('input[type="checkbox"][name="Language"]');
            const language = [];
            
            checkboxes.forEach(checkbox => {
                if(checkbox.checked){
                    language.push(checkbox.value);
                }
            });
            
            console.log( "First name :" ,fname);
            console.log( "last name : ",lname);
            console.log( "Gender : " ,gender);
            console.log( "Birth date : ", bod);
            console.log( "Mobile no. " , mobileno);
            console.log( "Email : " , email);
            console.log("password : " ,password);
            console.log( "Language : " , language);
            console.log("Address : " ,address);
            console.log( "City : ", city);
            console.log( "File : ",file);
           
            

            const tablebody = document.querySelector('#datatable tbody');
            console.log(tablebody);

            const newrow = tablebody.insertRow();
            const secondrow = document.createElement("secondrow")
                      
          newrow.innerHTML =  `<tr>
                    <td>${fname}</td>
                    <td>${lname}</td>
                    <td>${gender}</td>
                    <td>${bod}</td>
                    <td>${mobileno}</td>
                    <td>${email}</td>
                    <td>${password}</td>
                    <td>${language}</td>
                    <td>${address}</td>
                    <td>${city}</td>
                    <td>${file}</td>
            </tr>`
            
           newrow.append(secondrow);

           form.reset();
 });




