import * as firebase from 'firebase'

 const  Configfirebase = {

        apiKey: "AIzaSyCR71TYx5tKOVYutyNcieKGYUInDr4wTFk",
        authDomain: "reactapplication-5801f.firebaseapp.com",
        databaseURL: "https://reactapplication-5801f.firebaseio.com",
        projectId: "reactapplication-5801f",
        storageBucket: "reactapplication-5801f.appspot.com",
        messagingSenderId: "333341511256"

    }

    firebase.initializeApp(Configfirebase); 
   export  const database =  firebase.database().ref('/posts')
   export  const userDab =  firebase.database().ref('/users')
