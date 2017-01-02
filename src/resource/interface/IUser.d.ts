interface IUser extends IResource {
    login(options:any, callback:Function):Promise<String>
    find(options:any, callback:Function):Promise<any>
}
