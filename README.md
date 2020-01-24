# object-validation

**This library validates objects only.**

## Installation and Usage

Install the library with `npm install validator`

const val = require('object-validations')

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

let result = validate(data);
console.log('result: ', result);


### Result
    result:  [
        { name: 'name is invalid' },
        { age: 'age is invalid' },
        { languages: 'languages is invalid' },
        { z: 'z is invalid' },
        { v: 'v is invalid' }
    ]