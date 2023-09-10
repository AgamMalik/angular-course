import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name ="agam";
  product = {
    name: 'iPhone',
    price: 9999,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/images (4).jpg',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
