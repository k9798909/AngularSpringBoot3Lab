import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiService: ApiService = inject(ApiService);

  constructor() {}

  findUndeletedTodos(): Promise<Todo[]> {
    return this.apiService
      .get<Todo[]>('todo/findAllUndeletedTodo')
      .then((res) => {
        return res.body!;
      });
  }

  create(task: string):Promise<void> {
    return this.apiService.post<void>('todo',task).then((res) => res.body!);
  }

  update(todo: Todo):Promise<void> {
    return this.apiService.put<void>('todo/editTask',todo).then((res) => res.body!);
  }

  updateForDelete(id: number):Promise<void> {
    return this.apiService.put<void>('todo/updateForDelete',{id}).then((res) => res.body!);
  }

  complete(id: number):Promise<void> {
    return this.apiService.put<void>('todo/complete',{id}).then((res) => res.body!);
  }
}
