import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { TaskCard } from '../TaskCard/taskCard';
import { AllTasksService } from '../../services/all-tasks-service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APIservice } from '../../services/apiservice';
import { NotificationService } from '../../services/notification-service';
import { notificationCat } from '../utils/notificationTypes';

@Component({
  templateUrl: './taskList.html',
  styleUrl: './taskList.css',
  selector: 'app-task-list',
  imports: [TaskCard, RouterLink, RouterLinkActive],
})

/* Signals are immutable and cannot be reassigned (must be changed by set, update methods) */
export class TaskList {
  private apiService = inject(APIservice);
  private notificationService = inject(NotificationService);
  cards = inject(AllTasksService);
  filter = input<string>('all');
  sort = signal<'priority' | 'date' | null>(null);


  listToDisplay = computed(() => {
    const curentFilter = this.filter();
    let list = [];
    switch (curentFilter) {
      case 'done':
        list = this.cards.done;
        break;
      case 'todo':
        list = this.cards.todo;
        break;
      default:
        list = this.cards.all;
        break;
    }

    if (this.sort() === 'priority') {
      list = [...list].sort((a, b) => Number(b.priority) - Number(a.priority));
    } else if (this.sort() === 'date') {
      list = [...list].sort((a, b) => {
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();

        return dateA - dateB;
      });
    }
    return list;
  });

  sortByPriority() {
    this.sort.set('priority');
  }
  sortByDate() {
    this.sort.set('date');
  }
}
