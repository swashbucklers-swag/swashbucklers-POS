import { location } from "./location";

export interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    location: location;
  }