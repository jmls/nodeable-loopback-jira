interface ISecurity {
    decrypt (data:string,secret?:string):string
    encrypt (data:string,secret?:string):string
    generateToken (data:any, secret?:string):string
    getSessionId(token:any, secret?:string):void
    getToken ():void
    removeToken ():boolean
    setToken (token:string,secret?:string):void
    validateToken (data:any, secret?:string):any

}
