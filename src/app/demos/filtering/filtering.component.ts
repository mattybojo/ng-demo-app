import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from '../shared/users/users.beans';
import { UsersService } from '../shared/users/users.service';

@UntilDestroy()
@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  users: User[];
  filteredUsers: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().pipe(untilDestroyed(this)).subscribe(users => this.users = this.filteredUsers = users);
  }

  /**
   * Format the user's name to insert their username into their name
   * @param user The user whose name we want to print
   * @returns A combination of the user's name with their username
   */
  printName(user: User): string {
    let lastSpaceIndex = user.name.lastIndexOf(' ');
    return `${user.name.substring(0, lastSpaceIndex)} (${user.username}) ${user.name.substring(lastSpaceIndex + 1)}`;
  }

  /**
   * Zero pads the user ID to display a total of 3 digits
   * @param id The user's ID to format
   */
  formatEmployeeId(id: number): string {
    return `${id}`.padStart(3, '0');
  }

  /**
   * Filters the list based on the value typed in the filter input
   * @param $event The KeyboardEvent object received from the keyup event
   */
  filterUsers($event: KeyboardEvent): void {
    this.filteredUsers = this.users.filter((user: User) => {
      return this.printName(user).toLowerCase().includes(($event.target as HTMLInputElement).value.toLowerCase());
    });
  }

  /**
   * Deletes the user specified by ID
   * @param id The ID of the user to delete
   */
  deleteUser(id: number): void {
    this.usersService.deleteUser(id).pipe(untilDestroyed(this)).subscribe((resp: object) => {
      this.users.splice(id, 1);
    });
  }
}
