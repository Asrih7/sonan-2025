import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSonanState } from 'src/app/shared/reducer/reducer';


@Component({
  selector: 'app-sonan',
  templateUrl: './sonan.component.html',
  styleUrls: ['./sonan.component.scss'],
})
export class SonanComponent implements OnInit {
 
  sonan$: Observable<any> | undefined;
  sonanData: any[] | undefined;
  index: any;

  constructor(private store: Store) {}

 ngOnInit() {
  this.sonan$ = this.store.pipe(select(selectSonanState.dataSelector));
  this.sonan$.subscribe(sonanData => {
    console.log('SonanData from NgRx Store:', sonanData); 
    this.sonanData = sonanData;
  });
}
  
  
}
