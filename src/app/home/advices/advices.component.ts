import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/shared/home-data.service';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.scss'],
})
export class AdvicesComponent implements OnInit {
  adviceData: any[] = []; // This should be an array now
  loading = true;
  openedAdviceId: number | null = null;

  // Static title and subtitle
  title = "نصائح نبوية للحياة اليومية";
  subtitle = "ستون نصيحة من رسول الله صلى الله عليه وسلم يحتاجها المسلم في اليوم والليلة";

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.loadAdviceData();
  }

  loadAdviceData() {
    this.dataServices.getAdvices().subscribe(
      (data: any[]) => {
        console.log('Advices data from service:', data);
        console.log('Number of advices:', data.length);
        console.log('First advice:', data[0]);
        
        this.adviceData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading advice data:', error);
        this.loading = false;
      }
    );
  }

  toggleAdvice(id: number) {
    if (this.openedAdviceId === id) {
      this.openedAdviceId = null;
    } else {
      this.openedAdviceId = id;
    }
  }

  isAdviceOpen(id: number): boolean {
    return this.openedAdviceId === id;
  }
}