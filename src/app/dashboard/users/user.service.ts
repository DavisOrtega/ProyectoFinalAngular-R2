import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Alumno[] = [];

  getUsers(): Alumno[] {
    return this.users;
  }

  addUser(user: Alumno): void {
    this.users.push(user);
  }
}

export interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
}
