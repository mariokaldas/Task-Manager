import { Component, inject, Input } from '@angular/core';
import { ItaskData, priorityType, resetCardData } from '../utils/cardTypes';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllTasksService } from '../../services/all-tasks-service';
import { isDatePassed } from '../utils/formsValidation';


@Component({
  templateUrl: './taskCard.html',
  styleUrl: './taskCard.css',
  selector: 'app-task-card',
  imports: [FormsModule, ReactiveFormsModule],
})
export class TaskCard {
  allCards = inject(AllTasksService);

  priorityType = priorityType

  @Input()
  card: ItaskData = resetCardData();

  editCard: ItaskData = resetCardData();

  dueDate = new FormControl('', {
    validators:[isDatePassed],
    nonNullable:true
  });

  updateStatus() {
    this.card.isCompleted = !this.card.isCompleted
    this.allCards.editTask(this.card)
  }

  deleteTask() {
    this.allCards.deleteTask(this.card);
  }
  loadCurrentCard() {
    this.editCard = { ...this.card };
    this.dueDate.setValue(this.card.dueDate)
  }
  editTask() {
    this.card = { ...this.editCard ,dueDate:this.dueDate.value};
    this.allCards.editTask(this.card);
  }
  
}
