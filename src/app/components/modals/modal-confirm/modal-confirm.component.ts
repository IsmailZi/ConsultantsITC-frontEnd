import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/common/employee';


@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
  providers: [NgbModal]
})
export class ModalConfirmComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<string>();

  @Input() title!: string;
  @Input() employee!: Employee;
  constructor( public activeModal: NgbActiveModal, private modalService: NgbModal) {
    
  }
 
  ngOnInit(): void {
  }

  confirmDelete(){
    this.onSubmit.emit('delete');
  }

}
