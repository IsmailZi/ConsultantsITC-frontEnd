import { Component, EventEmitter, Input, OnInit,Output,ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/common/employee';


@Component({
  selector: 'app-modal-employee',
  templateUrl: './modal-employee.component.html',
  styleUrls: ['./modal-employee.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalEmployeeFormComponent implements OnInit {
  @Input() title!: any;
  @Output() onSubmit = new EventEmitter<Employee>();
  submited: boolean = false;
   
  employee!: Employee;
  
  constructor( public activeModal: NgbActiveModal) {
   }
 
  ngOnInit(): void {
    
  }

  confirm(){
    this.employee = new Employee();
    this.onSubmit.emit(this.employee);

  }

 

}
