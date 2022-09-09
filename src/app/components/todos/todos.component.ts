import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: ' Second Todo',
        completed: false,
      },
    ];
  }
  toggleDone(id: number): void {
    this.todos?.map((value, index) => {
      if (index == id) {
        value.completed = !value.completed;
      }
    });
  }
  deleteTodo(id: number): void {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }
  addTodo(): void {
    this.todos?.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
