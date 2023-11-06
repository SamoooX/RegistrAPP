import { User } from './../models/user.model';
import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  // -------- Autenticación --------

  getAuth(){
    return getAuth();
  }

  // -------- Acceder ---------

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // -------- Register --------
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //-------- Actualizar Usuario --------

  updateUser(displayName : string){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  //-------- recuperar contraseña --------

  sendRecoveryEmail(email :string){
    return sendPasswordResetEmail(getAuth(),email);
  }


  //-------- Cerrar Sesion --------

  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/login');
  }

  //---------------- Base de datos ---------------- 

  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path),data); 
  }


  // Obtener un documento

  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }

  // Agregar Documento 
  addDocument(path: string, data: any){
    return addDoc(collection(getFirestore(),path),data);
  }

}
