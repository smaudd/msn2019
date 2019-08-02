import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BubbleComponent } from './bubble/bubble.component';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './modals/sign/sign.component';
import { LoginComponent } from './modals/login/login.component';
import { ContactSearchComponent } from './modals/contact-search/contact-search.component';
import { FormComponent } from './form/form.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    BubbleComponent, 
    HeaderComponent,
    SignComponent,
    LoginComponent,
    ContactSearchComponent,
    FormComponent,
    SpinnerComponent
  ],
  exports: [
    BubbleComponent, 
    HeaderComponent,
    SignComponent,
    LoginComponent,
    ContactSearchComponent,
    FormComponent,
    SpinnerComponent
  ],
  entryComponents: [
    SignComponent, 
    LoginComponent,
    ContactSearchComponent,
  ]
})
export class ComponentsModule {}