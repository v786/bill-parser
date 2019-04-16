import { Component, OnInit } from '@angular/core';
import { TessService } from '../tess.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  imgLink: string;
  text: any;

  constructor(private _service: TessService) { }

  ngOnInit() {
  }

  saveLink(value) {
    this.imgLink = value;
    this.getText(value);
  }

  getTotal() {
    let tempVar = this.text.toString();
    this.text = tempVar.replace('total', '@');
    this.text = tempVar.replace('Total', '@');
    this.text = tempVar.replace('TOTAL', '@');

    alert(this.text);
    console.log('in get');
  }

  getText(img) {
    this._service.recognize(img).subscribe(
      responseProductData => {
        this.text = responseProductData;
      }
    );
  }

}
