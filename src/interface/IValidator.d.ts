interface IValidator {
    isUpperCase(value:any, requirement:any, attribute:string):boolean;
    isLowerCase(value:any, requirement:any, attribute:string):boolean;
    validate(data:any,rules:any):boolean|Object
}
