import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItaskData } from '../components/utils/cardTypes';

@Injectable({
  providedIn: 'root',
})
export class APIservice {
  private http = inject(HttpClient);
  private baseURL = 'http://localhost:3000/';

  getAllTasks() {
    return this.http.get(this.baseURL + 'tasks');
  }

  addTask(task: ItaskData) {
    return this.http.post(this.baseURL + 'tasks', task);
  }

  deleteTask(task: ItaskData) {
    return this.http.delete(`${this.baseURL}tasks/${task.id}`);
  }

  editTask(task: ItaskData) {
    return this.http.put(`${this.baseURL}tasks/${task.id}`, task);
  }
}
