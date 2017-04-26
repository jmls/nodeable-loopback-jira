interface IConnector {
    resource: any;
    baseUrl:string;

    login(...args : any[]):Promise<String>
    logout(username:string, callback:Function)
    makeRequest (requestOptions:any, callback?:Function):Promise<any>
}
