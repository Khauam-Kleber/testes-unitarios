import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

// Fake todos and response object
const todos = [
  'shop groceries',
  'mow the lawn',
  'take the cat to the vet'
];

// JSON.stringify followed by JSON.parse

//fake http response
const okResponse = new Response(JSON.stringify(todos), {
  status: 200,
  statusText: 'OK',
});

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets the to-dos', async () => {
    // Arrange
    spyOn(window, 'fetch').and.returnValue( Promise.resolve(okResponse)); //injetando resposta na função fetch
    const todoService = new TodoService();

    // Act
    const actualTodos = await todoService.getTodos();

    // Assert
    expect(actualTodos).toEqual(todos);
    expect(window.fetch).toHaveBeenCalledWith('/todos');
  });
});
