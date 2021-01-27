import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { IUser } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	user: IUser;
    is_logged_in: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor(
        private fAuth: AngularFireAuth,
        private firestore: AngularFirestore,
        private http: HttpClient,
        private storage: AngularFireStorage)
    {
    }

    getUserID(){
        return this.fAuth.currentUser;
    }

    setIsLoggedIn(status: boolean){
        this.is_logged_in.next(status);
    }

    getIsLoggedIn(){
        return this.is_logged_in;
    }

    getUser(id: string){
        return this.firestore.collection('Users').doc(id).valueChanges();  
    }

    addUser(id: string, user: IUser): void {
        const customer: IUser = {
            id,
            name: user.name,
            phone: user.phone,
            email: user.email
        };
        this.firestore.collection('Users').doc(id).set(user);
    }
}

