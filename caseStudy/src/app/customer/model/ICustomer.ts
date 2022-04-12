import {CustomerType} from './CustomerType';

export class ICustomer{
  private _id: number;
  private _code: string;
  private _name: string;
  private _dayOfBirth: string;
  private _gender: string;
  private _idCard: string;
  private _phone: string;
  private _emails: string;
  private _address: string;
  private _typeCustomer: CustomerType;


  constructor(id: number, code: string, name: string, dayOfBirth: string, gender: string, idCard: string, phone: string, emails: string, address: string, typeCustomer: CustomerType) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._dayOfBirth = dayOfBirth;
    this._gender = gender;
    this._idCard = idCard;
    this._phone = phone;
    this._emails = emails;
    this._address = address;
    this._typeCustomer = typeCustomer;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dayOfBirth(): string {
    return this._dayOfBirth;
  }

  set dayOfBirth(value: string) {
    this._dayOfBirth = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get emails(): string {
    return this._emails;
  }

  set emails(value: string) {
    this._emails = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get typeCustomer(): CustomerType {
    return this._typeCustomer;
  }

  set typeCustomer(value: CustomerType) {
    this._typeCustomer = value;
  }
}
