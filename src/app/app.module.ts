import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { AboutComponent } from './about/about.component';
import { CreationComponent } from './creation/creation.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './shared.service';
import { HealthComponent } from './health/health.component';
  var config = {
    apiKey: "AIzaSyB13NSKX_H78K_JwR8Pg40Txdg1PBqC9ZM",
    authDomain: "health-7ac65.firebaseapp.com",
    databaseURL: "https://health-7ac65.firebaseio.com",
    storageBucket: "health-7ac65.appspot.com",
    messagingSenderId: "586509450204"
  };
  var routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'health', component: HealthComponent},
    {path:'about', component: AboutComponent},
    {path: '#',component: CreationComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    AboutComponent,
    CreationComponent,
    HealthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
