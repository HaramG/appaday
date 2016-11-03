import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
@Injectable()
export class SharedService {
firebase:any;
user:any;
userpic:string;
profile:any;
welcome:boolean = true;
  constructor(@Inject(FirebaseApp) firebase) { 
    this.firebase = firebase;
    firebase.auth().onAuthStateChanged(s=>{
      this.user = s;
      console.log(s)
      if(!s){
        this.login('anon');
        this.loadprofile(s)
      }
      if(s){
        this.loadprofile(s)
      }
    })
  }
login(provider){
  if(provider === 'anon'){
    firebase.auth().signInAnonymously()
  }
}
logout(){
  firebase.auth().signOut()
}
loadprofile(user){
var newprofile = {
userpic: 'https://firebasestorage.googleapis.com/v0/b/health-7ac65.appspot.com/o/user.png?alt=media&token=6a2f26e8-fd62-4e09-bab4-c29736522835',
timestamp: firebase.database.ServerValue.TIMESTAMP,
perceptions: false
}
  if(user.isAnonymous){
    this.profile = newprofile
  }
  if(!user.isAnonymous){
    var profile = firebase.database().ref('users/'+user.uid+'/profile')
    profile.once('value').then(d=>{
      if(d.val()){
        this.profile = d.val();
        console.log(this.profile)
      }
      if(!d.val()){

        if(user.photoURL){
          newprofile.userpic = user.photoURL
        }
        this.profile = newprofile;
        console.log(this.profile)
      }
    })
  }
  firebase.database().ref('posts/creations').limitToFirst(25).once('value').then(f=>{
    if(f.val()){
      var creations = f.val();
      for(let creation of creations){
        for(let perception of this.profile.perceptions){
          if(creation === perception){
            creations[creation] = null
          }
        }
        if(creation.timestamp > this.profile.timestamp){
          this.welcomemenu.newCreations ++;
          this.welcomemenu.creations.push(creation)
        }
      }
    }
  })
  profile.set({timestamp: firebase.database.ServerValue.TIMESTAMP})
}
greet(){
  this.welcome = !this.welcome;
  console.log(this.welcome)
}
welcomemenu = {
  newCreations: 0,
  creations: [],
  newPosts: 0,
  notifications:0
}

                                                                setBases(){
                                                                  this.widthbase = window.innerWidth / 100;
                                                                  this.heightbase = window.innerHeight / 100
                                                                }
                                                                heightbase:number;
                                                                widthbase:number

animations = {
  display: 'hide',
  slide: 'normal'
}
}
