import { Component,ViewChild } from '@angular/core';
import { ProductsComponent} from './products/products.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FullDemo';
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;
  renderProductValues() {
    this.productsComponent.renderValues();
  }
}
