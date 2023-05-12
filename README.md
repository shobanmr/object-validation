# object-validation

*I have made https://www.npmjs.com/package/object_validations deprecated so instead you can use https://www.npmjs.com/package/nodejs-object-validations*
*You can add your suggesstion by creating a new issue*

## Installation and Usage

Install the library with `npm install validator`

const validation = require('object-validations')

### Sample

```
const valObj = require('object-validations')

let data = {
   name: '',
   age: 0,
   languages: ['tamil', ''],
   test: [
      {
         'a': {
            'z':0,
            'y': [
               {
                  'x': {
                     'v': ['']
                  }
               }
            ]
         }
      }
   ]
}

let result = valObj.validate(data);
console.log('result: ', result);
```


### Result
    result:  [
        { name: 'name is invalid' },
        { age: 'age is invalid' },
        { languages: 'languages is invalid' },
        { z: 'z is invalid' },
        { v: 'v is invalid' }
    ]
