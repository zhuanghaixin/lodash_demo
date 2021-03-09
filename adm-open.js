// Load the full build.
var _ = require('lodash');

// 集合遍历

// _.each([1, 2], (value, key, collection) => {
//     console.log('value', value);
//     console.log('key', key);
//     console.log('collection', collection);
// })

// _.each({
//     a: 1,
//     b: 2
// }, (value, key, collection) => {
//     console.log('value', value);
//     console.log('key', key);
//     console.log('collection', collection);
// })

// _.cloneDeep

// var objects = [{
//     'a': 1
// }, {
//     'b': 2
// }];

// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);



// _.get

// var obj = {
//     a: {
//         b: {
//             c: {
//                 d: {
//                     e: {
//                         f: 1
//                     }
//                 }
//             }
//         }
//     }
// }

// var v = _.get(obj, 'a.b.c.d.e')
// console.log('value', v);

// var v2 = _.get(obj, 'a.b.c.f', 0)
// console.log('value2', v2)
// _.isString

// var isString1 = _.isString('abc');
// console.log('isString1', isString1);
// // => true

// var isString2 = _.isString(1);
// console.log('isString2', isString2)
// // => false

// _.has

// var obj = {
//     'a': 1
// }

// console.log("_.has(obj, 'a')", _.has(obj, 'a'))
// console.log("_.has(obj, 'b')", _.has(obj, 'b'))

// _.forIn

function f() {
    this.a = 1;
    this.b = 2;
}

let o = new f(); // {a: 1, b: 2}

// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

console.log('_.forIn -----------------------------')
_.forIn(o, (value, key) => {
    console.log('value', value);
    console.log('key', key);
})

console.log('_.each ------------------------------')

_.each(o, (value, key) => {
    console.log('value', value);
    console.log('key', key);
})

// _.debounce
// _.chain
// _.split
// _.map
// _.fromParis
// _.value
// _.delay
// _.isArray
// _.extend
// _.find
// _.isString