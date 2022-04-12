export class PositionList {
  private _id: number;
  private _namePosition: string;


  constructor(id: number, namePosition: string) {
    this._id = id;
    this._namePosition = namePosition;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get namePosition(): string {
    return this._namePosition;
  }

  set namePosition(value: string) {
    this._namePosition = value;
  }
}
