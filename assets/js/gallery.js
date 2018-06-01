// Get a reference to the database service
// var database = firebase.database();

//uploadNewPhoto("https://firebasestorage.googleapis.com/v0/b/opal-1526306570324.appspot.com/o/Start_2017%2FIMG_5261.jpg?alt=media&token=e745cd48-5c5b-486e-acf8-a47c0b342bff",'Start2017');

// function uploadNewPhoto(imageUrl, album) {
//     var refAlbum = database.ref(album);
//     refAlbum.push(imageUrl).then(function onSuccess(res) {
//         console.log(res)
//     }).catch(function onError(err) {
//         console.log(err)
//     });
// }
//
//

// function loadPhotos(album) {
//     var leadsRef = database.ref(album);
//     leadsRef.on("value", function (snapshot) {
//         snapshot.forEach(function (childSnapshot) {
//             var childData = childSnapshot.val();
//             console.log(childData);
//         });
//     });
// }




function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
}




// const ref = firebase.storage().ref();
// const file = '../img/opal_title.jpg';
// const name = (+new Date()) + '-' + file.name;
// const metadata = {
//     contentType: file.type
// };
// const task = ref.child(name).put(file, metadata);
// task.then((snapshot) => {
//     const url = snapshot.downloadURL;
//     console.log(url);
//     document.querySelector('#someImageTagID').src = url;
// }).catch((error) => {
//     console.error(error);
// });


