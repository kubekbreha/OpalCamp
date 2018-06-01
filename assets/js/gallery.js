// Get a reference to the database service
// var database = firebase.database();

var database = firebase.database();

function uploadNewPhoto(imageUrl, album) {
    var refAlbum = database.ref(album);
    refAlbum.push(imageUrl).then(function onSuccess(res) {
        console.log(res)
    }).catch(function onError(err) {
        console.log(err)
    });
}

function loadPhotos(album) {
    var leadsRef = database.ref(album);
    leadsRef.on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });
}


