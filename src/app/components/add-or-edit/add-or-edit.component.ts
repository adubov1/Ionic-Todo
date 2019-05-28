import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Task } from '../../task';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss'],
})
export class AddOrEditComponent implements OnInit {

  preTask = this.navParams.get('task');
  preDate = this.navParams.get('date');
  tasks = new Task('');
  constructor(public modalCtrl: ModalController, public navParams: NavParams) { }

  ngOnInit() {}

  returnTask() {
    const task = {
      task: this.tasks.name,
      date: this.tasks.datetime,
    };
    this.modalCtrl.dismiss(task);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
