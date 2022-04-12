export class EducationDegreeList {
  private _id: number;
  private _nameEducation: string;

  constructor(id: number, nameEducation: string) {
    this._id = id;
    this._nameEducation = nameEducation;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nameEducation(): string {
    return this._nameEducation;
  }

  set nameEducation(value: string) {
    this._nameEducation = value;
  }
}
