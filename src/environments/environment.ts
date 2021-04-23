// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:9090'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// todo change base url to aws once backend is deployed
// Base url for api
export const BASE_API_URL = 'http://127.0.0.1:9090';

// this is the current logged in user's jwt when sending requests include a header with this jwt
  // Authorization: Bearer [header].[payload].[signature]
  // Authorization: Bearer JWT.currentJWT
export class JWT {
    public static currentJWT = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MTQxNTA3LCJleHAiOjE2MTkxNzc1MDd9.7RtLgbt8ImbzAsb_pHfamBfsQ6rSJxk5jDEDu7s8s58';
}
