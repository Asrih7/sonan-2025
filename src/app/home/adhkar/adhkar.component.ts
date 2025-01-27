import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAdhkarState } from 'src/app/shared/reducer/reducer';
@Component({
  selector: 'app-adhkar',
  templateUrl: './adhkar.component.html',
  styleUrls: ['./adhkar.component.scss'],
})
export class AdhkarComponent  implements OnInit {
  adkhar$: Observable<any> | undefined;
  adkharData: any[] | undefined;
  index: any;
  constructor(private store: Store) {}

ngOnInit() {
  this.adkhar$ = this.store.pipe(select(selectAdhkarState.dataSelector));
  this.adkhar$.subscribe(adkharData => {
    console.log('adhkar from NgRx Store:', adkharData); 
    this.adkharData = adkharData;
  });
}

}
