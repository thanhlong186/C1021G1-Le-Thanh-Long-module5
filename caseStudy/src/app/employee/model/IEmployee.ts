import {PositionList} from './PositionList';
import {EducationDegreeList} from './EducationDegreeList';
import {DivisionList} from './DivisionList';

export class IEmployee {
  private _id: number;
  private _name: string;
  private _dayOfBirth: string;
  private _idCard: string;
  private _phone: string;
  private _email: string;
  private _salary: number;
  private _position: PositionList;// vi tri
  private _education: EducationDegreeList; //trinh do
  private _division: DivisionList; //bo phan


  constructor(id: number, name: string, dayOfBirth: string, idCard: string, phone: string, email: string, salary: number, position: PositionList, education: EducationDegreeList, division: DivisionList) {
    this._id = id;
    this._name = name;
    this._dayOfBirth = dayOfBirth;
    this._idCard = idCard;
    this._phone = phone;
    this._email = email;
    this._salary = salary;
    this._position = position;
    this._education = education;
    this._division = division;
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

  get dayOfBirth(): string {
    return this._dayOfBirth;
  }

  set dayOfBirth(value: string) {
    this._dayOfBirth = value;
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get position(): PositionList {
    return this._position;
  }

  set position(value: PositionList) {
    this._position = value;
  }

  get education(): EducationDegreeList {
    return this._education;
  }

  set education(value: EducationDegreeList) {
    this._education = value;
  }

  get division(): DivisionList {
    return this._division;
  }

  set division(value: DivisionList) {
    this._division = value;
  }
}
