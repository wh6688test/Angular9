import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputformsComponent } from './inputforms/inputforms.component';
import { GroupsService } from './services/groups.service';
import { AppConfigService,  } from './services/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    InputformsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
        provide : APP_INITIALIZER,
            multi : true,
            deps : [AppConfigService],
            useFactory : (appConfigService : AppConfigService) => () => {
                appConfigService.loadAppConfig()
            }
    },
    GroupsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
