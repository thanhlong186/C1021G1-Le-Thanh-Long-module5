export class DivisionList {
  private _id: number;
  private _nameDivision: string;


  constructor(id: number, nameDivision: string) {
    this._id = id;
    this._nameDivision = nameDivision;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nameDivision(): string {
    return this._nameDivision;
  }

  set nameDivision(value: string) {
    this._nameDivision = value;
  }
}
