"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var alias_result = index_1.json_alias({
    alias: {
        contacts: "my_first_object.contacts"
    },
    in: {
        object: {
            my_first_object: {
                contacts: [
                    {
                        name: "Robson Gomes",
                        web_site: "https://robsongomes.com.br",
                        cellphone: "+5527981470133",
                        social: {
                            linkedin: "https://www.linkedin.com/in/robson-gomesj/"
                        }
                    }
                ]
            }
        }
    },
    save_origin: true
}).alias_result;
console.log(alias_result);
