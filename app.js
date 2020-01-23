"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function validateObject(obj) {
    var _a;
    var response = [];
    for (var prop in obj) {
        if (isEmpty(obj[prop])) {
            response.push((_a = {}, _a[prop] = prop + " is null or undefined", _a));
        }
        else if (Array.isArray(obj[prop])) {
            var err = validateArray(obj[prop], prop);
            if (err) {
                response = __spreadArrays(response, err);
            }
        }
        else if (typeof (obj[prop]) == 'object') {
            var err = validateObject(obj[prop]);
            if (err) {
                response = __spreadArrays(response, err);
            }
        }
        else if (typeof (obj[prop]) == 'string') {
            var err = validateString(obj[prop], prop);
            if (err) {
                response.push(err);
            }
        }
        else if (typeof (obj[prop]) == 'number') {
            var err = validateNumber(obj[prop], prop);
            if (err) {
                response.push(err);
            }
        }
    }
    return response;
}
function validateString(s, prop) {
    var _a;
    if (!s && s.length <= 0) {
        return _a = {}, _a[prop] = prop + " is invalid", _a;
    }
}
function validateNumber(no, prop) {
    var _a;
    if (no <= 0) {
        return _a = {}, _a[prop] = prop + " is invalid", _a;
    }
}
function validateArray(arr, parentProp) {
    var _a;
    var res = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var prop = arr_1[_i];
        if (isEmpty(prop)) {
            res.push((_a = {}, _a[prop] = prop + " is null or undefined", _a));
        }
        else if (Array.isArray(prop)) {
            var err = validateArray(prop, parentProp);
            if (err) {
                res = __spreadArrays(res, err);
            }
        }
        else if (typeof (prop) == 'object') {
            var data_1 = validateObject(prop);
            if (data_1) {
                res = __spreadArrays(res, data_1);
            }
        }
        else if (typeof (prop) == 'string') {
            var err = validateString(prop, parentProp);
            if (err) {
                res.push(err);
            }
        }
        else if (typeof (arr[prop]) == 'number') {
            var err = validateNumber(prop, parentProp);
            if (err) {
                res.push(err);
            }
        }
    }
    return res;
}
var data = {
    name: 'shoban',
    age: 23,
    languages: ['tamil', ''],
    test: [
        {
            'a': {
                'z': 0,
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
};
function validate(reqData) {
    var result = validateObject(reqData);
    if (result.length > 0) {
        return result;
    }
    else {
        return 'valid';
    }
}
exports.validate = validate;
function isEmpty(data) {
    if (data === null || data === undefined) {
        return true;
    }
    return false;
}
var result = validate(data);
console.log('result: ', result);
