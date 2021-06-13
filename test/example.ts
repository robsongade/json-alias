import {json_alias} from './../dist'
const {alias_result} = json_alias({
    alias : { 
        "a":"a"
    },
    in:{
    
  object : {
    "a":"b"  
  }
},save_origin:true})

console.log(alias_result)