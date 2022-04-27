import {BenhAn} from './BenhAn';


export class BenhNhan {
  private _id: number;// ma benh nhanD
  private _maBenhNhan: string;
  private _name: string;
  private _dayIn: string;
  private _dayOut: string;
  private _lyDo: string;
  private _phuongPhapDieuTri: string;
  private _bacSiDieuTri: string;
  private _maBenhAn: BenhAn;


  constructor(id: number, maBenhNhan: string, name: string, dayIn: string, dayOut: string, lyDo: string, phuongPhapDieuTri: string, bacSiDieuTri: string, maBenhAn: BenhAn) {
    this._id = id;
    this._maBenhNhan = maBenhNhan;
    this._name = name;
    this._dayIn = dayIn;
    this._dayOut = dayOut;
    this._lyDo = lyDo;
    this._phuongPhapDieuTri = phuongPhapDieuTri;
    this._bacSiDieuTri = bacSiDieuTri;
    this._maBenhAn = maBenhAn;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get maBenhNhan(): string {
    return this._maBenhNhan;
  }

  set maBenhNhan(value: string) {
    this._maBenhNhan = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dayIn(): string {
    return this._dayIn;
  }

  set dayIn(value: string) {
    this._dayIn = value;
  }

  get dayOut(): string {
    return this._dayOut;
  }

  set dayOut(value: string) {
    this._dayOut = value;
  }

  get lyDo(): string {
    return this._lyDo;
  }

  set lyDo(value: string) {
    this._lyDo = value;
  }

  get phuongPhapDieuTri(): string {
    return this._phuongPhapDieuTri;
  }

  set phuongPhapDieuTri(value: string) {
    this._phuongPhapDieuTri = value;
  }

  get bacSiDieuTri(): string {
    return this._bacSiDieuTri;
  }

  set bacSiDieuTri(value: string) {
    this._bacSiDieuTri = value;
  }

  get maBenhAn(): BenhAn {
    return this._maBenhAn;
  }

  set maBenhAn(value: BenhAn) {
    this._maBenhAn = value;
  }

// constructor(id: number, name: string, point: number, hobby: string, subject: BenhAn) {
  //   this._id = id;
  //   this._name = name;
  //   this._point = point;
  //   this._hobby = hobby;
  //   this._subject = subject;
  // }
  //
  // get id(): number {
  //   return this._id;
  // }
  //
  // set id(value: number) {
  //   this._id = value;
  // }
  //
  // get name(): string {
  //   return this._name;
  // }
  //
  // set name(value: string) {
  //   this._name = value;
  // }
  //
  // get point(): number {
  //   return this._point;
  // }
  //
  // set point(value: number) {
  //   this._point = value;
  // }
  //
  // get hobby(): string {
  //   return this._hobby;
  // }
  //
  // set hobby(value: string) {
  //   this._hobby = value;
  // }
  //
  //
  // get subject(): BenhAn {
  //   return this._subject;
  // }
  //
  // set subject(value: BenhAn) {
  //   this._subject = value;
  // }
}
