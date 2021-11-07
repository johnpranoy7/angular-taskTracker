import { Injectable } from '@angular/core';
import { TASKS } from '../dummy-tasks';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    // var tasks = of(TASKS);
    // return tasks;
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.http.delete(`${this.apiUrl}/${task.id}`);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post(this.apiUrl, task, httpOptions);
  }
  
}
