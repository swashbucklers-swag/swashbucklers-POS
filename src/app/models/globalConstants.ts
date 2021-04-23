//todo change base url to aws once backend is deployed

import { Subject } from "rxjs";
import { Employee } from "../common/employee";

//Base url for api
export const BASE_API_URL:string = 'http://127.0.0.1:9090';

//this is the current logged in user's jwt when sending requests include a header with this jwt
  //Authorization: Bearer [header].[payload].[signature]
  //Authorization: Bearer JWT.currentJWT
export class CurrentEmployee {
    public static currentJWT:string = '';
    public static employeeLoggedIn: Subject<Employee> = new Subject<Employee>();
}
