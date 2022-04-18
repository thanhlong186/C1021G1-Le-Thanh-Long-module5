export class Contract {
  codeContract: number;//mã hợp đồng
  startDate: string;
  endDate: string;
  advanceDepositAmount: number; //số tiền đặth cọc trước
  totalPaymentAmount: number; //tổng số tiền thanh toán


  constructor(codeContract: number, startDate: string, endDate: string, advanceDepositAmount: number, totalPaymentAmount: number) {
    this.codeContract = codeContract;
    this.startDate = startDate;
    this.endDate = endDate;
    this.advanceDepositAmount = advanceDepositAmount;
    this.totalPaymentAmount = totalPaymentAmount;
  }
}
