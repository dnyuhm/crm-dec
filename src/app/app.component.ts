import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'my crm';
  private obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });
  private subj = new Subject();
  private behave = new BehaviorSubject('toto');
  constructor() {
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.next('toto2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next('toto2');
    // this.behave.next('toto3');
    // this.behave.subscribe((data) => console.log(data));
  }
}
