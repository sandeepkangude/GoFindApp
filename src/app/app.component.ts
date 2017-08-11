import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FindService } from './find.service';
import { ResultModel } from './app.model';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  url: FormControl;
  myform: FormGroup;
  result: Array<ResultModel>;

  private demoResult: Array<ResultModel>;

  constructor(private findService: FindService) {
    this.title = 'GOFIND';
  }

  ngOnInit(): void {
    this.url = new FormControl('', [
      Validators.required
    ]);

    this.myform = new FormGroup({
      url: this.url
    });
  }

  FindResult() {
    this.findService.post(this.url.value).subscribe((res) => {
      if (res !== undefined && res.data !== undefined) {
        if (res.data.length > 0) {
          this.result = res.map(({ category, images, color, price, itemName, itemNum, desc }) =>
            new ResultModel(category, images, color, price, itemName, itemNum, desc));
        } else {
          this.result = [];
        }
      }
    }, (err) => {
      console.log(err);
      this.result = this.GetDummyData();
    })
  }

  private GetDummyData(): Array<ResultModel> {
    return [
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/44/00/4400d68f9842f0cae24f8ba6e72abad9_best.jpg',
          'https://img.shopstyle-cdn.com/pim/9e/1f/9e1fcba6a894b25910c6a3805760b705_best.jpg'],
        'color': 'Brown',
        'price': '$1,295',
        'itemNum': 'shopstyle_636130332',
        'desc': '',
        'itemName': 'Céline 2015 Small Lizard Trio Crossbody Bag',
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/4b/71/4b717834d8e123b03746ee1cf92684bc_best.jpg'],
        'color': 'Brown',
        'price': '$17.99',
        'itemNum': 'shopstyle_534600289',
        'desc': '',
        'itemName': 'H&M Shoulder Bag'
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/81/23/81236dcf3d7bc302e9adf242655d2eca_best.jpg',
          'https://img.shopstyle-cdn.com/pim/83/b7/83b7a1ab2a84d5e883ecbc131b8682ce_best.jpg'],
        'color': 'Black',
        'price': '$111',
        'itemNum': 'shopstyle_635537704',
        'desc': '',
        'itemName': 'Sugar Tote Ha1705 Black'
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/f7/be/f7bee6401dc18169d1b093110e0e6c75_best.jpg',
          'https://img.shopstyle-cdn.com/pim/7e/ef/7eef246319a4c025b2ad0b4474b963e6_best.jpg'],
        'color': 'Pink',
        'price': '$1,395',
        'itemNum': 'shopstyle_636918319',
        'desc': '',
        'itemName': 'Corto Moltedo Constanza Large Tote'
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/12/ec/12ecb98cd930985e90eb87d2057c6a4d_best.jpg',
          'https://img.shopstyle-cdn.com/pim/15/15/15156923d71e3281745c23345bc97f86_best.jpg'],
        'color': 'Brown',
        'price': '$445',
        'itemNum': 'shopstyle_637255881',
        'desc': '',
        'itemName': 'Bottega Veneta Intrecciato Leather Crossbody Bag',
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/28/a3/28a3d253aae3b98c3166a87b4214d7fb_best.jpg',
          'https://img.shopstyle-cdn.com/pim/7a/b9/7ab9d5acf94266fff9cd53a9f5ef3d3f_best.jpg'],
        'color': 'Pink',
        'price': '$352',
        'itemNum': 'shopstyle_617436953',
        'desc': '',
        'itemName': 'Burberry Giant Check Scarf 168x30',
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/1d/35/1d3556dfbf4075f0c96934dc64d87f83_best.jpg',
          'https://img.shopstyle-cdn.com/pim/4e/7e/4e7e52abd748fcc34d877b19119888e2_best.jpg'],
        'color': 'Black',
        'price': '$326',
        'itemNum': 'shopstyle_620759102',
        'desc': '',
        'itemName': 'Burberry Belt',
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/25/3f/253f06e94c6516518fd33e8719643964_best.jpg'],
        'color': 'Yellow',
        'price': '$40.50',
        'itemNum': 'shopstyle_635953129',
        'desc': '',
        'itemName': 'Alfred Dunner Bahama Bays Short Sleeve V Neck T-Shirt'
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/b6/b1/b6b1b4b3a38b70735021bb9dcaf5111f_best.jpg',
          'https://img.shopstyle-cdn.com/pim/82/5d/825d4a4754fc4d563403b0b56f90001d_best.jpg'],
        'color': 'Gray',
        'price': '$230',
        'itemNum': 'shopstyle_637023520',
        'desc': '',
        'itemName': 'Marc Jacobs Quilted Bruna Shoulder Bag'
      },
      {
        'category': '',
        'images': ['https://img.shopstyle-cdn.com/pim/43/6d/436d463ac12fd1548f9a97dbe83a95e8_best.jpg',
          'https://img.shopstyle-cdn.com/pim/06/d2/06d2ce5703354d8fdac46fd8430ccf6a_best.jpg'],
        'color': 'Gold',
        'price': '$248',
        'itemNum': 'shopstyle_374541733',
        'desc': '',
        'itemName': 'kate spade new york Cobble Hill Ellen Crossbody'
      }
    ];
  }
}
