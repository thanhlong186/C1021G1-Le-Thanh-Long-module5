export class IService {
  private _id: number;
  private _name: string;
  private _area: number;
  private _cost: number;
  private _maxPeopleAmount: number;
  private _rentalType: string;
  private _img: string;


  constructor(id: number, name: string, area: number, cost: number, maxPeopleAmount: number, rentalType: string, img: string) {
    this._id = id;
    this._name = name;
    this._area = area;
    this._cost = cost;
    this._maxPeopleAmount = maxPeopleAmount;
    this._rentalType = rentalType;
    this._img = img;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get area(): number {
    return this._area;
  }

  set area(value: number) {
    this._area = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get maxPeopleAmount(): number {
    return this._maxPeopleAmount;
  }

  set maxPeopleAmount(value: number) {
    this._maxPeopleAmount = value;
  }

  get rentalType(): string {
    return this._rentalType;
  }

  set rentalType(value: string) {
    this._rentalType = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }
}
