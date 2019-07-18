import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string;
  getMessage(message: string): void {
    this.message = message;
  }
  constructor() { }
}
