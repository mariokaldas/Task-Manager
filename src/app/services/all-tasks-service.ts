import { computed, inject, Injectable, OnInit, signal, Signal } from '@angular/core';
import { ItaskData } from '../components/utils/cardTypes';
import { NotificationService } from './notification-service';
import { notificationCat } from '../components/utils/notificationTypes';
import { APIservice } from './apiservice';

@Injectable({
  providedIn: 'root',
})
export class AllTasksService {
  notificationService = inject(NotificationService);
  apiService = inject(APIservice);
  allTasks = signal<ItaskData[]>([]);

  constructor() {
    this.apiService.getAllTasks().subscribe({
      next: (tasks: any) => {
        this.tasks = tasks;
      },
      error: (err) => {
        this.notificationService.generateNotification(
          notificationCat.ERROR,
          'Failed to load tasks',
        );
        console.log('ERROR', err);
      },
    });
  }

  set tasks(value: ItaskData[]) {
    this.allTasks.set(value);
  }

  get all() {
    return this.allTasks();
  }

  get done() {
    return this.allTasks().filter((t) => t.isCompleted);
  }
  get todo() {
    return this.allTasks().filter((t) => !t.isCompleted);
  }

  addTask(task: ItaskData) {
    this.allTasks.update((tasks) => [...tasks, task]);
    this.apiService.addTask(task).subscribe({
      next: (createdTask: any) => {
        this.allTasks.update((tasks) => tasks.map((t) => (t.id === task.id ? createdTask : t)));
        this.notificationService.generateNotification(
          notificationCat.SUCCESS,
          'Task added successfully.',
        );
      },
      error: (err) => {
        this.allTasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
        this.notificationService.generateNotification(notificationCat.ERROR, 'Failed to add task');
        console.log('ERROR', err);
      },
    });
  }

  deleteTask(task: ItaskData) {
    this.allTasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
    this.apiService.deleteTask(task).subscribe({
      next: () => {
        this.notificationService.generateNotification(
          notificationCat.SUCCESS,
          'Task deleted successfully.',
        );
      },
      error: () => {
        this.notificationService.generateNotification(
          notificationCat.ERROR,
          'Failed to delete task',
        );
      },
    });
  }

  editTask(task: ItaskData) {
      this.allTasks.update((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
      this.apiService.editTask(task).subscribe({
      next: () => {
        this.notificationService.generateNotification(
          notificationCat.SUCCESS,
          'Task edited successfully.',
        );
      },
      error: () => {
        this.notificationService.generateNotification(
          notificationCat.ERROR,
          'Failed to edit task',
        );
      },
    });
  }
}
