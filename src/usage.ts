import {json_alias} from './index'

const {alias_result} = json_alias({
    alias : {
        contacts : "my_first_object.contacts"
    },
    in : {
        object : {
            my_first_object :  {
                contacts : [
                    {
                        name : "Robson Gomes",
                        web_site : "https://robsongomes.com.br",
                        cellphone : "+5527981470133",
                        social : {
                            linkedin : "https://www.linkedin.com/in/robson-gomesj/"
                        }
                    }
                ]
            }
        }
    },
    save_origin : true
})

console.log(alias_result)