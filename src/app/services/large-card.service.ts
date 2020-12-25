import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LargeCardService {

  head: string;
  tail: string;

  getHead(): string{
    return this.head;
  }

  getTail(): string{
    return this.tail;
  }

  setHead(value){
    this.head = value;
  }

  setTail(value) {
    this.tail = value;
  }

}
