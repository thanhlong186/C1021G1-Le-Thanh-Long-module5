import { Component, OnInit } from '@angular/core';
import {IService} from '../model/IService';
import {FacilityService} from '../facility.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  facilityList: IService[];
  facility: IService;
  p: any;

  constructor(private facilityService: FacilityService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getListFacility();
  }
  getListFacility() {
    this.facilityService.getAllFacility().subscribe(data => {
      this.facilityList = data;
      this.p = 1;
      console.log("Đã lấy được data");
    }, error => {
      console.log("Bị lỗi khi lấy data");
    });
  }

  deleteCard(idCard: any) {
    this.facilityService.findById(idCard).subscribe(data => {
      console.log(this.facilityList);
      this.facility = data;
    });

  }

  confirm(id: any) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      console.log("đã xóa dữ liệu");
      this.snackBar.open("Đã xóa thành công", '', {
        duration:2000
      });
      this.ngOnInit();
    });
  }
}
