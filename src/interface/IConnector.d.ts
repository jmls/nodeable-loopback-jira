interface IConnector {
    resource: any;
    baseUrl: string;

    login(...args: any[]);
    logout(username: string, callback: Function);
    makeRequest(requestOptions: any, callback?: Function): Promise<any>;
}
