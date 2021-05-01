import { Location } from '../models/location';

export class Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: Location;
  rank: string;
}
