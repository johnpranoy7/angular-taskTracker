import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  remainder: boolean = false;

  toggleAddTaskUI: boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (res)=> this.toggleAddTaskUI = res
    );
  }

  ngOnInit(): void {}

  addTask() {
    if (!this.text) {
      alert('Please add task');
      return;
    }

    const task = {
      text: this.text,
      day: this.day,
      reminder: this.remainder,
    };

    //handle add to backend
    this.onAddTask.emit(task);

    this.text = this.day = '';
    this.remainder = false;
  }
}
