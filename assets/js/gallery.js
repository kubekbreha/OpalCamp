// Get a reference to the database service
$(document).ready(function () {

    var urlAlbum = window.location.href;
    var formatedAlbum = urlAlbum.split('#').pop();

    document.getElementById("album_name").innerHTML = formatedAlbum;

    //var database = firebase.database();

    function uploadNewPhoto(imageUrl, album) {
        var refAlbum = database.ref(album);
        refAlbum.push(imageUrl).then(function onSuccess(res) {
            console.log(res)
        }).catch(function onError(err) {
            console.log(err)
        });
    }

    function loadPhotos(album) {

        var target = document.getElementById('test');
        var leadsRef = database.ref('gallery/' + album);
        leadsRef.on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                var str = '<img  src="' + childData + '" data-full="' + childData + '" class="m-p-g__thumbs-img" />';
                var temp = document.createElement('div');
                temp.innerHTML = str;
                while (temp.firstChild) {
                    target.appendChild(temp.firstChild);
                }
            });
        });
    }

    var target = document.getElementById('test');
    if(!formatedAlbum.localeCompare('Start_2017')) {
        for (var x = 2; x <= 216; x++) {
            var str = '<img  src="assets/img/2017_start/start_' + x + '.jpg" data-full="assets/img/2017_start/start_' + x + '.jpg" class="m-p-g__thumbs-img" />';
            var temp = document.createElement('div');
            temp.innerHTML = str;
            while (temp.firstChild) {
                target.appendChild(temp.firstChild);
            }
        }
    }else if(!formatedAlbum.localeCompare('Extrem_2017')){
        for (var x = 1; x <= 189; x++) {
            var str = '<img  src="assets/img/2017_extrem/extrem_' + x + '.jpg" data-full="assets/img/2017_extrem/extrem_' + x + '.jpg" class="m-p-g__thumbs-img" />';
            var temp = document.createElement('div');
            temp.innerHTML = str;
            while (temp.firstChild) {
                target.appendChild(temp.firstChild);
            }
        }
    }


});
