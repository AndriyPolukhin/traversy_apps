export class Person {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(data?: any) {
    this.firstName = data.firstName || 'Andriy';
    this.lastName = data.lastName || 'Polukhin';
    this.middleName = data.middleName;
  }
}