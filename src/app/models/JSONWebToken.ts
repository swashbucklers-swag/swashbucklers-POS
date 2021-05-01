import { Employee } from "../common/employee";

export interface JSONWebToken{
    jwt:string;
    employee:Employee;
}
