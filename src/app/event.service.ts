import { Injectable, NgZone } from '@angular/core';
import { SseService } from './sse.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private _zone: NgZone, private _sseService: SseService) {}
}
