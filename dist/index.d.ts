declare type Ialias = {
    alias: any;
    in: {
        object?: object;
    };
    save_origin?: boolean;
};
interface IJsonAliasTemplate extends Ialias {
}
interface IJsonAliasResult {
    alias_result: object;
}
export declare const json_alias: (template: IJsonAliasTemplate) => IJsonAliasResult;
export {};
