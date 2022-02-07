(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            submitForm()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
async function submitForm() {
    var formData = {
        Größe: $("#Größe").val(),
        Mail: $("#Mail").val(),
        Straße: $("#Straße").val(),
        PLZ: $("#PLZ").val(),
        Stadt: $("#Stadt").val()
    };
    $.ajax({
        url: "/api/neuBestellung",
        type: "post",
        dataType:'json', 
        data: {"formData" : formData},
        success: function(response){
            console.log("success")
              if(response.msg=='success'){  
                  alert('data added');;  
              }else{  
                  alert('data not added');  
              } 
          },
        error: function(error){
            alert("server error");
        }
    })
}

