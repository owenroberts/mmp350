const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');


publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function (event) {
    //    console.log(event.which)
    if (event.which == 13) {
        publishPost();
    }
});
const ref = firebase.database().ref('posts');

function publishPost() {
    //    console.log(postText.value);
    const post = {}; /*empty object*/
    post.text = postText.value;
    
    post.uid = firebase.auth().currentUser.uid;
    post.date = Date.now();

    //    console.log(post);
    postText.value = "";
    /*push post to database*/
    const promise = ref.push(post);
    promise.then(function (snapshot) {
        addImage(snapshot.key);
    });
    
    //push post to database
    ref.push(post);
}


let file;
const imageButton = document.getElementById('submit-image');
imageButton.addEventListener('click', function () {
    // get the file
    file = document.getElementById('image-file').files[0];
});

function addImage(postId) {
    if (file) {
        // upload the file
        const storage = firebase.storage();
        const user = firebase.auth().currentUser;
        const ref = storage.ref('posts').child(postId).child('image');

        const promise = ref.put(file);
        promise.then(function (image) {
            return image.ref.getDownloadURL();
        }).then(function (url) {
            firebase.database().ref('posts').child(postId).update({
                imageURL: url
            });
        });
    }
}




    //
    //function hello(){
    //    console.log('hello');
    //    console.log('goddbye');
    //}
    //hello();
    //
    //
    //var banana = function(){
    //    console.log('banana');
    //    console.log('apple');
    //};
    //banana();/*next function*/
    //
    //function greet(name, greeting){
    //    console.log(greeting + "," +name);
    //}
    //function add(n1, n2){
    ////    console.log(n1 +n2);
    //    return n1 + n2;
    //}
    //var n = add(2, 2);

    //var x;
    //var y;
    //function assign(){
    //    var x = 2;
    //    var y = 3;
    //}
    //function add(){
    ////    var n = x + y;
    //    console.log(x + y);
    //}
    //assign();
    //add();
