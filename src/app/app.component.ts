// Importing necessary modules and services
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SseService } from './sse.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit, OnDestroy{
  private sseSubscription!: Subscription; // Subscription to the SSE service via the obserable to ensure disposing of resource
  public sseResponse:string = '';
  public message: string[] = [];
  constructor(private _sseService: SseService){

  }

  ngOnInit(): void {
    const url: string = 'http://localhost:5000/openai';
     // Subscribing to the SSE service
    this.sseSubscription = this._sseService.getServerEvents(url).subscribe((event) => {
      this.sseResponse += event.data; // append the data to the sseResponse string
      console.log(this.sseResponse)
    } );
   
  }

  ngOnDestroy(): void {
    this.sseSubscription.unsubscribe(); // Unsubscribing from the SSE service
  }
}
