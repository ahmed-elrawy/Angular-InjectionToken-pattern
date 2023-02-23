import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorConfig, COLOR_CONFIG_TOKEN } from 'projects/config';
import { ColorService } from 'projects/shared-library/src/public-api';

@Component({
  selector: 'app-root',
  template:`<h1>{{s.getProductInfo()}}</h1>`
})
export class AppComponent {constructor(public s:ColorService){}}
const getRedPrice = (price: number) => 1.5*price;

export const APP_CONFIG: ColorConfig = {
  productColor: 'red',
  productGeneralConditions: 'www.red-product.com',
  getPrice: getRedPrice,
};

@NgModule({
  imports: [BrowserModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
