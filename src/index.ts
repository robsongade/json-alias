type Ialias = { 
    alias : any, 
    in : {
        object ? : object,
    },
    save_origin? : boolean
}

interface IJsonAliasTemplate extends Ialias{}

interface IJsonAliasResult {
    alias_result : object
}


export const  json_alias  = (template : IJsonAliasTemplate) : IJsonAliasResult =>{
  
    const {alias}= template
    const {object}= template.in

    let alias_result : any = {}

    if(object){

        for(let item_alias in alias){
            var get_in_split = alias[item_alias].split(".")
            var has = false
            var concat = ""
            for(var item_split of get_in_split){
               concat += `['${item_split}']`
               if(!eval(`object${concat}`)){
                has = false
                break;
               }
               has = true
            }
    
            if(has){
                alias_result[item_alias] = eval(`object${concat}`)
            }else{
                alias_result[item_alias] = false
            }
            
        }
    }
    if(template.save_origin){
        if(object){
            alias_result['origin'] = object
        }
       
    }
    return {alias_result}
}