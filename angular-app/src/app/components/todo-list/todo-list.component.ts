import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Todo, TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  providers: [provideNativeDateAdapter()],
})
export class TodoListComponent {
  todoService: TodoService = inject(TodoService);
  isEdit: boolean = false;
  editId: number = -1;
  todos: Todo[] = [];

  taskForm: FormGroup = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.todoService
      .findUndeletedTodos()
      .then((todos) => {
        this.todos = todos;
      })
      .catch((e) => console.error(e));
  }

  onAddClick() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    this.todoService
      .create(this.taskForm.value)
      .then(() => {
        this.taskForm.reset();
        this.ngOnInit();
      })
      .catch((e) => console.error(e));
  }

  onDeleteClick(id: number) {
    this.todoService
      .updateForDelete(id)
      .then(() => {
        this.taskForm.reset();
        this.ngOnInit();
      })
      .catch((e) => console.error(e));
  }

  onCompleteClick(id: number) {
    this.todoService
      .complete(id)
      .then(() => {
        this.taskForm.reset();
        this.ngOnInit();
      })
      .catch((e) => console.error(e));
  }

  onEditClick(id: number, task: string) {
    this.isEdit = true;
    this.editId = id;
    this.taskForm.setValue({ task });
  }

  onUpdateClick() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    this.todoService
      .update({
        task: this.taskForm.value.task,
        id: this.editId,
        completed: false,
      })
      .then(() => {
        this.taskForm.reset();
        this.ngOnInit();
      })
      .catch((e) => console.error(e));
      this.isEdit = false;
  }
}
