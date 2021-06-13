# quick-start-json-alias
 Esse repositório foi feito para auxiliar o desenvolvedor na hora de consumir um objeto json, criando o template final

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