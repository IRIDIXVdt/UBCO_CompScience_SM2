import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailVerifyPageRoutingModule } from './email-verify-routing.module';

import { EmailVerifyPage } from './email-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailVerifyPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EmailVerifyPage]
})
export class EmailVerifyPageModule {}
