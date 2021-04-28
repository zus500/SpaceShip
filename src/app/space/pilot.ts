export class Pilot {

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }

  static defaultImageUrl = '/assets/pilot.png';

  constructor(fullname: string , imageUrl = Pilot.defaultImageUrl ) {
    this.fullName = fullname;
    this.imageUrl = imageUrl;
  }



  firstName: string;
  lastName: string;
  imageUrl: string;
}
