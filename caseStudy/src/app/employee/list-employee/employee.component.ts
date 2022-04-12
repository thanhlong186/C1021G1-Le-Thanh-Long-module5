import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../model/IEmployee';
import {EmployeeServiceService} from '../employee-service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: IEmployee[];
  employee: IEmployee;
  p: number = 1;

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
   this.loadData();
  }
  loadData() {
    this.employeeService.getListEmployee().subscribe(data => {
      this.employeeList = data;
      console.log('Đã lấy được data');
    }, error => {
      console.log('có lỗi khi lấy data');
    });
  }
  getInfor(id: number) {
    this.employeeService.getInforEmployee(id).subscribe(data => {
      this.employee = data;
    })
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() =>{
      console.log("Đã xóa dữ liệu");
      this.loadData();
    })
  }

}
