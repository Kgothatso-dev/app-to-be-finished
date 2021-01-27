import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

    setLocal(key: string, value: any) {
      return localStorage.setItem(key, JSON.stringify(value));
  }

  getLocal(key: string) {
      return JSON.parse(localStorage.getItem(key));
  }

  clear(key){
    
    localStorage.removeItem(key);
  }
}


