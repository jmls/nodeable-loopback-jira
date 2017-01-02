interface IResource {
    name: string;
    apiPath:string;
    methods:any;
    modelMethods: any;
    model:any;
    jiraModelName: string;

    register():void;

    // find(option:any,callback:Function);
    // findById(option:any,callback:Function);

}
