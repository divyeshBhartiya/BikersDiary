import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridJoggingComponent } from './grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './add-or-update-jogging/add-or-update-jogging.component';
import { WorkoutService } from './workout.service';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
// import { OktaCallbackComponent} from '@okta/okta-angular';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent,
    // OktaCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ],
  providers: [WorkoutService], // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule {

}
