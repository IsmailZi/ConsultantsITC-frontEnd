import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalEmployeeFormComponent } from '../modals/modal-employee/modal-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService, private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees(){
    this.employeeService.getEmployeeList().subscribe( data => {
      this.employees = data;
      console.log('data:', data)
    })
  }

  openCreate(){
    const modalRef = this.modalService.open(ModalEmployeeFormComponent);
    modalRef.componentInstance.title = 'New Employee';

    modalRef.componentInstance.onSubmit.subscribe((employee: Employee) => {
      console.log('employee:', employee)
      modalRef.close();
    });
  }

}
