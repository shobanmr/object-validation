function validateObject<T>(obj: T): any {
   let response: any=[];
   for (const prop in obj) {
      if(isEmpty(obj[prop])) {
         response.push({[prop]:`${prop} is null or undefined`});
      } else if (Array.isArray(obj[prop])) {
         let err = validateArray(obj[prop], prop);
         if (err) { response = [...response, ...err] }
      } else if (typeof (obj[prop]) == 'object') {
         let err =  validateObject(obj[prop]);
         if(err) { response = [...response, ...err]; }
      } else if (typeof (obj[prop]) == 'string') {
         let err = validateString(obj[prop], prop);
         if (err) { response.push(err) }
      } else if (typeof (obj[prop]) == 'number') {
         let err = validateNumber(obj[prop], prop);
         if (err) { response.push(err) }
      }
   }
   return response;
}

function validateString(s: any, prop: any) {
   if (!s && s.length <= 0) {
      return {[prop]:`${prop} is invalid`}
   }
}
function validateNumber(no: any, prop: any) {
   if (no <= 0) {
      return {[prop]:`${prop} is invalid`};
   }
}
function validateArray(arr: any, parentProp: any): any {
   let res: any =[]
   for (const prop of arr) {
      if(isEmpty(prop)) {
         res.push({[prop]:`${prop} is null or undefined`});
      } else if (Array.isArray(prop)) {
         let err = validateArray(prop, parentProp);
         if(err) { res = [...res,...err] }
      } else if (typeof (prop) == 'object') {
         let data = validateObject(prop);
         if (data) {
            res= [...res, ...data];
         }
      } else if (typeof (prop) == 'string') {
         let err = validateString(prop, parentProp);
         if (err) {
            res.push(err);
         }
      } else if (typeof (arr[prop]) == 'number') {
         let err = validateNumber(prop, parentProp);
         if (err) {
            res.push(err);
         }
      }
   }
   return res;
}

let data = {
   name: 'shoban',
   age: 23,
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

export function validate(reqData: object) {
   let result = validateObject(reqData);
   if (result.length > 0) {
      return result;
   } else {
      return 'valid';
   }
}

function isEmpty(data:any):boolean {
   if(data === null || data === undefined) {
      return true;
   }
   return false;
}


let result = validate(data);
console.log('result: ', result);
