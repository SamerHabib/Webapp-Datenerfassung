async function submitForm() {
    var formData = {
        Größe: $("#Größe").val(),
        Mail: $("#Mail").val(),
        Straße: $("#Straße").val(),
        PLZ: $("#PLZ").val(),
        Stadt: $("#Stadt").val()
    };
    $.ajax({
        url: "http://localhost:3030/neuBestellung",
        type: "post",
        contenttype:'application/json; charset=utf-8',
        data: {"formData" : formData},
        success: function(result){
            alert("Erfolgreich registriert")
        },
        error: function(error){
            alert("Registrierung derzeit nicht möglich, bitte versuchen Sie es später erneut");
        }
    })
}