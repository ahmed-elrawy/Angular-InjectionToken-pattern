import { NgModule ,Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorConfig, COLOR_CONFIG_TOKEN } from 'projects/config';
import { ColorService } from 'projects/shared-library/src/public-api';

@Component({
  selector: 'app-root',
  template:`<h1>{{s.getProductInfo()}}</h1>`
})
export class AppComponent {constructor(public s:ColorService){}}
const getBluePrice = (price: number) => 0.95*price;
export const APP_CONFIG: ColorConfig = {
  productColor: 'blue',
  productGeneralConditions: 'www.blue-articles.com',
  getPrice: getBluePrice,

};

@NgModule({
  imports: [BrowserModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
