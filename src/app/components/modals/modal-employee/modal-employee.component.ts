import { Component, EventEmitter, Input, OnInit,Output,ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
  formEmployee = this.fb.group({
    lastName: ['', { validators: [Validators.required], updateOn: 'blur' }],
    firstName: ['', { validators: [Validators.required], updateOn: 'blur' }],
    dateStart: [''],
    dcUpdated: [''],
    managerMeeting: [''],
    suiviStatus: [''],
    dept: [''],
    sponsor: [''],
    talent: [''],
    manager: [''],
    domain: [''],
    majDC: [''],
    exp: [''],
    seriousConstraint: [false],
    mobilityFr: [false]
  })

  constructor( public activeModal: NgbActiveModal, private fb: FormBuilder) {
   }
 
  ngOnInit(): void {
    
  }

  confirm(){ 

   let employeeForm: any = this.formEmployee.value;
    this.employee = new Employee();
    this.employee.firstName = employeeForm.firstName
    this.employee.lastName = employeeForm.lastName 
    
    // convert datepicker value to Date
    let dateStart = new Date()
    dateStart.setMonth(employeeForm.dateStart.month-1)
    dateStart.setFullYear(employeeForm.dateStart.year)
    dateStart.setDate(employeeForm.dateStart.day)

    this.employee.dateStart = dateStart 
    this.employee.dcUpdated = employeeForm.dcUpdated  
    this.employee.managerMeeting = employeeForm.managerMeeting  
    this.employee.suiviStatus = employeeForm.suiviStatus  
    this.employee.dept = employeeForm.dept  
    this.employee.sponsor = employeeForm.sponsor  
    this.employee.talent = employeeForm.talent  
    this.employee.manager = employeeForm.manager  
    this.employee.domain = employeeForm.domain  
    this.employee.email = employeeForm.email || ''  
    this.employee.phone = employeeForm.phone || ''  
    this.employee.actions = employeeForm.actions || ''  
    this.employee.competences = employeeForm.competences || ''  
    this.employee.majDC = employeeForm.majDC  
    this.employee.exp = employeeForm.exp  
    this.employee.seriousConstraint = employeeForm.seriousConstraint  
    this.employee.mobilityFr = employeeForm.mobilityFr  
    this.onSubmit.emit(this.employee);
  }

 

}
