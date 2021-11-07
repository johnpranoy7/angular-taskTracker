import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task?:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();  
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();  

  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }
  
  toggleRemainder(task){
    this.onToggleTask.emit(task);
  }

}
