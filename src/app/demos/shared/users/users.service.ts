import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from './users.beans';
import { IdResponse } from '../app.beans';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersDomain: string;

  constructor(private http: HttpClient) {
    this.usersDomain = 'https://jsonplaceholder.typicode.com/users';
  }

  /**
   * Retrieves all users
   * @returns An array of all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersDomain);
  }

  /**
   * Retrieve a user specified by ID
   * @param id The ID of the user
   * @returns The user specified by the provided ID
   */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersDomain}/${id}`);
  }

  /**
   * Creates a new user in the DB
   * @param user The user object to persist
   * @returns The ID of the new user
   */
  createUser(user: User): Observable<IdResponse> {
    return this.http.post<IdResponse>(this.usersDomain, JSON.stringify(user));
  }

  /**
   * Overwrite the user at users[ID] with provided user object
   * @param user The user object to update
   * @returns The ID of the object
   */
  updateUser(user: User) : Observable<IdResponse> {
    return this.http.put<IdResponse>(`${this.usersDomain}/${user.id}`, JSON.stringify(user));
  }

  /**
   * Updates the user properties included in the provided user object
   * @param user A partial user object containing at least an ID
   * @returns The newly updated user object
   */
  updateUserPartial(user: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.usersDomain}/${user.id}`, JSON.stringify(user));
  }

  /**
   * Deletes a user from the DB
   * @param id The ID of the user to delete
   * @returns An empty object ( {} )
   */
  deleteUser(id: number): Observable<object> {
    return this.http.delete<object>(`${this.usersDomain}/${id}`);
  }
}
