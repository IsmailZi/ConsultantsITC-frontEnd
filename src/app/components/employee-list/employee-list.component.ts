import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalConfirmComponent } from '../modals/modal-confirm/modal-confirm.component';
import { ModalEmployeeFormComponent } from '../modals/modal-employee/modal-employee.component';

 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  employeesFiltred: Employee[] = [];

  constructor(private employeeService: EmployeeService, public modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees(){
    this.employeeService.getEmployeeList().subscribe( data => {
      this.employeesFiltred = this.employees = data;
    })
  }

 

  openCreate(){
    const modalRef = this.modalService.open(ModalEmployeeFormComponent);
    modalRef.componentInstance.title = 'Nouveau consultant ITC';

    modalRef.componentInstance.onSubmit.subscribe((employee: Employee) => {
      this.employeeService.saveEmployee(employee).subscribe(() => {
        this.listEmployees();
        modalRef.close();
      })
    });
  }

  openDelete(tempEmployee: Employee){
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.title = 'Supprimer';
    modalRef.componentInstance.employee = tempEmployee;

    modalRef.componentInstance.onSubmit.subscribe(() => {
      this.employeeService.deleteEmployee(tempEmployee.id).subscribe((result) => {
        this.listEmployees();
        modalRef.close();
      })
      
  });

   
  }
  
  searchChanged(event: any){
    this.employeesFiltred = this.employees.filter(employee => {
      return employee.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      employee.email.toLowerCase().includes(event.target.value.toLowerCase()) 
    })
  }
  
}

 