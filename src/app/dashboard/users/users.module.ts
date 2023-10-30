import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';





@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,


  ],

  providers: [UserService],
})
export class UsersModule { }
