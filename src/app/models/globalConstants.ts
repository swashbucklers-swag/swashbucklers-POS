//todo change base url to aws once backend is deployed
//Base url for api
export const BASE_API_URL:string = 'http://127.0.0.1:9090';

//this is the current logged in user's jwt when sending requests include a header with this jwt
  //Authorization: Bearer [header].[payload].[signature]
  //Authorization: Bearer JWT.currentJWT
export class JWT {
    public static currentJWT:string = '';
}
