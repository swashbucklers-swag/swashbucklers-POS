import { location } from "./location";

export interface Customer {
    customerid: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    location: location;
  }