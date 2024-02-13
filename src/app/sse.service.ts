import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SseService {

    // Injecting NgZone service to handle operations outside of Angular's zone
  constructor(private _ngZone:NgZone) {}

      // Method to get server events
  getServerEvents(url: string): Observable<any> {

    // Creating and returning an Observable
    return new Observable<any>((observer) => {
       
       // Creating a new EventSource with the provided URL
      const eventSource = new EventSource(url);
         // Checking if the connection is being established
      if (eventSource.readyState === 0) {
        console.log('connecting');
      }

      // Checking if the connection is established
      if (eventSource.readyState === 1) {
        console.log('connected');
      }

       // Handling incoming messages from the server
      eventSource.onmessage = (event) => {
         // Running the following code inside Angular's zone to ensure change detection
       this._ngZone.run( () => {
        // Sending the event data to the observer
        observer.next(event);
       });
      };

      // Handling errors
      eventSource.onerror = () => {
        // If the connection is closed
        if (eventSource.readyState === 0) {
          // Completing the observer
          observer.complete();
          console.log('in complete');
        } else {
           // If there's an error, sending an error to the observer
          observer.error('EventSource failed');
        }
      };

       // Returning a function that closes the EventSource when the observer is unsubscribed
      return () => {
        eventSource.close();
      };
    });
  }
}
