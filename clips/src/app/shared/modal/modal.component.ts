import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent {

@Input() modalID = ''

  constructor(public modal: ModalService){
    // console.log(this.modal.visible)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }

}
