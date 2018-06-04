function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function colapseSideNav() {
    $("#navbar-toggler").click();
}


$('#registration_form').submit(function () {
    sendRegisterDataToFirebase();
    return false;
});


function sendRegisterDataToFirebase() {

    var inputAllRight = true;

    var opalStart = $('#opalStart').is(":checked");
    var opalPro = $('#opalPro').is(":checked");

    var kidName = document.getElementById("kidName").value;
    var kidBorn = document.getElementById("kidBorn").value;
    var kidPhone = document.getElementById("kidPhone").value;
    var kidMail = document.getElementById("kidMail").value;

    var kidAddress = document.getElementById("kidAddress").value;
    var kidCity = document.getElementById("kidCity").value;
    var kidSchool = document.getElementById("kidSchool").value;

    var kidHealth = document.getElementById("kidHealth").value;
    var kidNote = document.getElementById("kidNote").value;

    var parentName = document.getElementById("parentName").value;
    var parentPhone = document.getElementById("parentPhone").value;
    var parentMail = document.getElementById("parentMail").value;


    if (kidName === "" || kidBorn === "" || kidPhone === "" || kidMail === "" || kidAddress === "" || kidCity === "" ||
        parentName === "" || parentPhone === "") {
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Prosím vyplnte všetky potrebné polia');
        document.getElementById('formError').appendChild(div);
        inputAllRight = false;
    }

    if ($('#opalStart').is(":checked") === false && $('#opalPro').is(":checked") === false) {
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Prosím vyberte tábor ktorého sa chcete zúčastniť');
        document.getElementById('formError').appendChild(div);
        inputAllRight = false;
    }

    if ($('#opalStart').is(":checked") === true && $('#opalPro').is(":checked") === true) {
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Prosím vyberte iba jeden tábor ktorého sa chcete zúčastniť');
        document.getElementById('formError').appendChild(div);
        inputAllRight = false;
    }

    if(inputAllRight){
        




    }


}


function getErrorMessage(error) {
    return '<div class="alert alert-danger">\n' +
        '<div class="container">\n' +
        '<div class="alert-icon">\n' +
        '<i class="material-icons">error_outline</i></div>\n' +
        '<button type="button" class="close" data-dismiss="alert"\n' +
        'aria-label="Close">\n' +
        '<span aria-hidden="true"><i class="material-icons">clear</i></span>\n' +
        '</button>\n' +
        '<b>Chyba:</b>\t  ' + error + ' .\n' +
        '</div>\n' +
        '</div>';
}