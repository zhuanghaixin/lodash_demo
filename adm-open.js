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

// function f() {
//     this.a = 1;
//     this.b = 2;
// }

// let o = new f(); // {a: 1, b: 2}

// // 在f函数的原型上定义属性
// f.prototype.b = 3;
// f.prototype.c = 4;

// console.log('_.forIn -----------------------------')
// _.forIn(o, (value, key) => {
//     console.log('value', value);
//     console.log('key', key);
// })

// console.log('_.each ------------------------------')

// _.each(o, (value, key) => {
//     console.log('value', value);
//     console.log('key', key);
// })

// _.debounce

// _.chain
// var users = [{
//         'user': 'barney',
//         'age': 36
//     },
//     {
//         'user': 'fred',
//         'age': 40
//     },
//     {
//         'user': 'pebbles',
//         'age': 1
//     }, {
//         'user': 'tom',
//         'age': 16
//     }
// ];

// var youngest = _
//     .chain(users)
//     .sortBy('age')
//     .map(function (o) {
//         return o.user + ' is ' + o.age;
//     })
//     .head()
//     .value();

// console.log(youngest);   // pebbles is 1
// => 'pebbles is 1'

// _.split
// var strArr = _.split('a-b-c-d', '-', 2) // string,separator,limit

// console.log('strArr', strArr); // ['a','b']

// _.map
// function n100(n) {
//     return n * 100
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var newArr = _.map(arr, n100)
// console.log('newArr', newArr);

// var arr2 = [{
//         'name': 'zhx',
//         'age': 23
//     },
//     {
//         'name': 'tom',
//         'age': 20
//     }
// ]
// var newArr2 = _.map(arr2, 'name')
// console.log('newArr2', newArr2);

// _.fromParis
// var arr2obj = _.fromPairs([
//     ['fred', 20],
//     ['barney', 40]
// ])
// console.log('arr2obj', arr2obj);
// // =>  arr2obj { 'fred': 30, 'barney': 40 }

// // _.toParis

// var obj2arr = _.toPairs({
//     fred: 30,
//     barney: 40
// })
// console.log('obj2arr', obj2arr)

// => obj2arr [ [ 'fred', 30 ], [ 'barney', 40 ] ]
// _.delay


// _.delay((text) => {
//     console.log('三秒后输出')
//     console.log(text)
// }, 3000, 'later')


// _.isArray

// _.isArray([1, 2, 3]);
// // => true

// _.isArray(document.body.children);
// // => false

// _.isArray('abc');
// // => false

// _.isArray(_.noop);
// => false

// _.extend

// function Foo() {
//     this.a = 1
// }

// function Bar() {
//     this.b = 2
// }
// Foo.prototype.c = 3
// Bar.prototype.d = 4

// var newObj = _.extend({
//     a: 'a'
// }, new Foo, new Bar)
// console.log('newObj', newObj);   //  newObj { a: 1, c: 3, b: 2, d: 4 }
// _.find

var users = [{
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'pebbles',
        'age': 1,
        'active': true
    }
];

var findUsers1 = _.find(users, function (o) {
    return o.age < 40;
});
console.log('findUsers1', findUsers1);
// => object for 'barney'

// The `_.matches` iteratee shorthand.
var findUsers2 = _.find(users, {
    'age': 1,
    'active': true
});
// => object for 'pebbles'
console.log('findUsers2', findUsers2);

// The `_.matchesProperty` iteratee shorthand.
var findUsers3 = _.find(users, ['active', false]);
console.log('findUser3', findUsers3);
// => object for 'fred'

// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'


// var firstValue = _.head([1, 2, 3]);
// // => 1

// console.log('firstValue', firstValue);

// var firstValue2 = _.head([]);
// // => undefined

// console.log('firstVale2', firstValue2);