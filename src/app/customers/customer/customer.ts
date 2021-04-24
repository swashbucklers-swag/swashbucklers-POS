import { Location } from "../../models/location";

export interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    location: Location;
  }