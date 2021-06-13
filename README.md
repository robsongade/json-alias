# quick-start-json-alias
This repository was made to help the developer when consuming a json object, creating the final template

# Example of use
```code
import { json_alias } from 'quick-start-json-alias'
const { alias_result } = json_alias({
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
  save_origin : true
})
console.log(alias_result)
```

## Result example
```json
{
  "contacts": [
    {
      "name": "Robson Gomes",
      "web_site": "https://robsongomes.com.br",
      "cellphone": "+5527981470133",
      "social": {
          "name": "Robson Gomes",
            "web_site": "https://robsongomes.com.br",
            "cellphone": "+5527981470133",
            "social": {
              "linkedin": "https://www.linkedin.com/in/robson-gomesj/"
            }
      }
    }
  ],
  "origin" : "ORIGIN CONTENT OBJECT"
}
```