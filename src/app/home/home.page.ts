import { Component, OnInit } from '@angular/core';
import { DataServices } from '../shared/home-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromReducer from '../shared/reducer/reducer'; // Adjust the path

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public homeData$: Observable<any[]> | undefined;
  public sonanDataLength$: Observable<number | null> | undefined;
  public advicesDataLength$: Observable<number | null> | undefined;
  public forgettableSonanDataLength$: Observable<number | null> | undefined;
  public adhkarDataLength$: Observable<number | null> | undefined;
  public wifeSonanDataLength$: Observable<number | null> | undefined;


  homeData: any[] | undefined;

  constructor(
    private dataService: DataServices,
    private router: Router,
    private store: Store
  ) {}

    ngOnInit(): void {
    this.homeData$ = this.dataService.getData();
    this.homeData$.subscribe((data) => {
      console.log('Home Data:', data);
      this.homeData = data;
    });

    // Debug: Check what's in the store for advices
    this.store.pipe(select(fromReducer.selectAdvicesState.dataLengthSelector)).subscribe(advicesData => {
      console.log('Advices Data in Store:', advicesData);
      console.log('Advices Data Type:', typeof advicesData);
      console.log('Is Array:', Array.isArray(advicesData));
      if (advicesData && Array.isArray(advicesData)) {
        console.log('Advices Length:', advicesData.length);
      }
    });

    this.store.pipe(select(fromReducer.selectAdvicesState.dataLengthSelector)).subscribe(length => {
      console.log('Advices Length from Selector:', length);
    });

    // Use the selectors
    this.sonanDataLength$ = this.store.pipe(select(fromReducer.selectSonanState.dataLengthSelector));
    this.advicesDataLength$ = this.store.pipe(select(fromReducer.selectAdvicesState.dataLengthSelector));
    this.forgettableSonanDataLength$ = this.store.pipe(select(fromReducer.selectForgettableSonanState.dataLengthSelector));
    this.adhkarDataLength$ = this.store.pipe(select(fromReducer.selectAdhkarState.dataLengthSelector));
    this.wifeSonanDataLength$ = this.store.pipe(select(fromReducer.selectWifeSonanState.dataLengthSelector));
  }

  navigateToChildPage(childRoute: string): void {
    this.router.navigate(['home', childRoute]);
  }
}
