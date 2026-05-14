import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { generateID } from '../utils/IDgeneration';
import { notificationType } from '../utils/notificationTypes';
import { AllTasksService } from '../../services/all-tasks-service';
import { isDatePassed } from '../utils/formsValidation';
import { priorityType } from '../utils/cardTypes';

@Component({
  templateUrl: './taskInput.html',
  styleUrl: './taskInput.css',
  selector: 'app-task-input',
  imports: [FormsModule, ReactiveFormsModule],
})
export default class TaskInput {
  tasks = inject(AllTasksService);

  priority = priorityType;

  addTaskForm = new FormGroup({
    dueDate: new FormControl('', [Validators.required, isDatePassed]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.addTaskForm.get('title');
  }
  get dueDate() {
    return this.addTaskForm.get('dueDate');
  }
  get desc() {
    return this.addTaskForm.get('description');
  }
  get cat() {
    return this.addTaskForm.get('category');
  }

  sendTask(addTaskForm: FormGroup) {
    /* backend generate unique id automatically */
    const task = { ...addTaskForm.value, id: '', isCompleted: false };

    this.tasks.addTask(task);
    addTaskForm.reset();
  }
}
