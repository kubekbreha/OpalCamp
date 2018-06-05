
var database = firebase.database();

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

    if (opalStart === false && opalPro === false) {
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Prosím vyberte tábor ktorého sa chcete zúčastniť');
        document.getElementById('formError').appendChild(div);
        inputAllRight = false;
    }

    if (opalStart === true && opalPro === true) {
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Prosím vyberte iba jeden tábor ktorého sa chcete zúčastniť');
        document.getElementById('formError').appendChild(div);
        inputAllRight = false;
    }
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    if(inputAllRight) {
        if (opalStart === true) {
            var myJson = {
                registerTime: { datetime },
                kidName: {kidName},
                kidBorn: {kidBorn},
                kidPhone: {kidPhone},
                kidMail: {kidMail},
                kidAddress: {kidAddress},
                kidCity: {kidCity},
                kidSchool: {kidSchool},
                kidHealth: {kidHealth},
                kidNote: {kidNote},
                parentName: {parentName},
                parentPhone: {parentPhone},
                parentMail: {parentMail}
            };
            uploadNewRegistration('start', myJson);

        }else{
            var myJson = {
                registerTime: { datetime },
                kidName: {kidName},
                kidBorn: {kidBorn},
                kidPhone: {kidPhone},
                kidMail: {kidMail},
                kidAddress: {kidAddress},
                kidCity: {kidCity},
                kidSchool: {kidSchool},
                kidHealth: {kidHealth},
                kidNote: {kidNote},
                parentName: {parentName},
                parentPhone: {parentPhone},
                parentMail: {parentMail}
            };
            uploadNewRegistration('pro', myJson);
        }

        $("#opalStart").prop("checked", false);
        $("#opalPro").prop("checked", false);
        document.getElementById("kidName").value = "";
        document.getElementById("kidBorn").value = "";
        document.getElementById("kidPhone").value = "";
        document.getElementById("kidMail").value = "";

        document.getElementById("kidAddress").value = "";
        document.getElementById("kidCity").value = "";
        document.getElementById("kidSchool").value = "";

        document.getElementById("kidHealth").value = "";
        document.getElementById("kidNote").value = "";

        document.getElementById("parentName").value = "";
        document.getElementById("parentPhone").value = "";
        document.getElementById("parentMail").value = "";

    }
}


function uploadNewRegistration(camp ,imageUrl) {
    var refAlbum = database.ref('registration/'+ camp);
    refAlbum.push(imageUrl).then(function onSuccess(res) {
        console.log(res);
        var div = document.createElement('div');
        div.innerHTML = getSuccessMessage();
        document.getElementById('formError').appendChild(div);
        setInterval(closeAlert, 7000);
        closeAlertErr();
    }).catch(function onError(err) {
        console.log(err);
        var div = document.createElement('div');
        div.innerHTML = getErrorMessage('Chyba databázy. Skúste nekôr prosím.');
        document.getElementById('formError').appendChild(div);
    });
}


function closeAlert() {
    $("#formAlert").click();
}

function closeAlertErr() {
    $("#formAlertErr").click();
}

function getErrorMessage(error) {
    return '<div class="alert alert-danger">\n' +
        '<div class="container">\n' +
        '<div class="alert-icon">\n' +
        '<i class="material-icons">error_outline</i></div>\n' +
        '<button id="formAlertErr" type="button" class="close" data-dismiss="alert"\n' +
        'aria-label="Close">\n' +
        '<span aria-hidden="true"><i class="material-icons">clear</i></span>\n' +
        '</button>\n' +
        '<b>Chyba:</b>\t  ' + error + ' .\n' +
        '</div>\n' +
        '</div>';
}


function getSuccessMessage() {
    return '<div class="alert alert-success">\n' +
        '<div class="container">\n' +
        '<div class="alert-icon">\n' +
        '<i class="material-icons">check</i>\n' +
        '</div>\n' +
        '<button id="formAlert" type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '<span aria-hidden="true"><i class="material-icons">clear</i></span>\n' +
        '</button>\n' +
        'Učastník úspešne registrovaný.\n' +
        '</div>\n' +
        '</div>';
}