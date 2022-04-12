import {IService} from '../model/IService';

export class BookingService {
  serviceList: IService[] = [
    new IService(1, "OCEAN SUITE", 85.5, "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"),
    new IService(2, "OCEAN STUDIO SUITE", 40.1, "https://dulichso.vn/wp-content/uploads/2019/12/cap-nhat-gi-225-ph-242-ng-furama-resort-224-nang-2019-k-232-m-voucher-uu-227-i-464.jpg"),
    new IService(3, "OCEAN DELUXE", 43.7, "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg"),
    new IService(4, "LANGOON SUPERIOR", 40.1, "https://resortdanang.info/wp-content/uploads/2018/12/twins-bed-lagoon-superior-furama-da-nang-1.jpg"),
    new IService(5, "GARDEN SUPERIOR", 40.1, "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1_M2-1047x563.jpg"),
    new IService(6, "GARDEN DELUXE", 43.7, "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M2-1047x563.jpg")
  ];
}
