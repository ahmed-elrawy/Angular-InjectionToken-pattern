import { Inject, Injectable } from '@angular/core';
import { ColorConfig, COLOR_CONFIG_TOKEN } from 'projects/config';
const BASELINE_PRICE = 1;

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public constructor(
    @Inject(COLOR_CONFIG_TOKEN) private config: ColorConfig) {}
    public getProductInfo(){   
      return `Price per unit: ${this.config.getPrice(BASELINE_PRICE)}. 
              Please visit 
              ${this.config.productGeneralConditions} 
              for more information about our 
              ${this.config.productColor} product`;
   }
    
}
