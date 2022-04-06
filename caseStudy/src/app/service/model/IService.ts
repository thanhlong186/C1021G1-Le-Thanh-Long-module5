export class IService {
  id: number;
  name: string;
  area: number;
  img: string;

  constructor(id: number, name: string, area: number, img: string) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.img = img;
  }
}
