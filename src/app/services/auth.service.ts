import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { IUser } from '../types/user.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }

  async googleSignin(): Promise<auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async githubSignin(): Promise<auth.UserCredential> {
    const provider = new auth.GithubAuthProvider();
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async microsoftSignin(): Promise<auth.UserCredential> {
    const provider = new auth.OAuthProvider('microsoft.com');
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async signOut(): Promise<boolean> {
    await this.afAuth.signOut();
    return this.router.navigate(['/home/signin']);
  }




  updateUserData(user): Promise<void> {
    // TODO

    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.id}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }
}
