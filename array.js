var _ = require('lodash');
// _.chunk 数组分块
// const newArr = _.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// console.log('newArr', newArr);

// _.compact 过滤假值
//  
// _.concat 连接，不改变原数组
// const arr = [1, 2, 3]
// const arr2 = [4, 5, [6]]
// const newArr = _.concat(arr, arr2)
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.difference 过滤值 根据后面的值进行过滤
// const newArr = _.difference([1, 2, 3, 4], [1, 2])
// console.log('newArr', newArr);
// const newArr1 = _.difference([1, 2, 3, 4], [1, 2, 3, 4, 5])
// console.log('newArr1', newArr1);
// const newArr2 = _.difference([1, 2, 3, 4], 1)
// console.log('newArr2', newArr2);
// const newArr3 = _.difference([1, 2, 3, 4], [2, 1])
// console.log('newArr3', newArr3);
// _.differenceBy 过滤值 根据后面的值进行过滤

// const arr = [1.1, 2.2, 3.3, 4.4, 5.6]
// const newArr = _.differenceBy(arr, [2.4, 3.6], (item) => {
//     return Math.floor(item)
// })
// //[1.1, 2.2, 3.3, 4.4, 5.6] => [1,2,3,4,5], [2.4,3.6]=> [2,4] 
// console.log('newArr', newArr);
//
// // 有两组同学，在一组种找出与另一组不同姓的同学
// const arr = [{
//         name: 'zhx'
//     }, {
//         name: 'ql'
//     }, {
//         name: 'zy'
//     },
//     {
//         name: 'wl'
//     }
// ]
// const newArr = _.differenceBy(arr, [{
//     name: 'zjw'
// }, ], (item) => {
//     console.log('item', item)
//     return item.name.includes('z')
// })
// console.log('newArr', newArr);
// _.differenceWith
// const arr = [{
//         name: 'zhx'
//     }, {
//         name: 'ql'
//     }, {
//         name: 'zy'
//     },
//     {
//         name: 'wl'
//     }
// ]
// const newArr = _.differenceWith(arr, [{
//     name: 'zjw'
// }, ], (arrVal, othVal) => {

//     console.log('arrVal: ', arrVal, 'othVal:', othVal)
//     return arrVal.name.slice(0, 1) === othVal.name.slice(0, 1)
// })
// console.log('newArr', newArr);
// _.drop 开头丢掉n个元素
// const newArr = _.drop([1, 2, 3, 4, 5], 2)
// console.log('newArr', newArr)
// _.dropRight 结尾丢掉n个元素
// const newArr = _.dropRight([1, 2, 3, 4, 5], 2)
// console.log('newArr', newArr)
// _.dropRightWhile
// var users = [{
//         'user': 'barney',
//         'active': true
//     },
//     {
//         'user': 'fred',
//         'active': false
//     },
//     {
//         'user': 'pebbles',
//         'deactive': false
//     }
// ];

// const arr = _.dropRightWhile(users, function (item) {
//     console.log('item')
//     console.log(item)
//     return !item.active;
// });
// console.log('arr', arr)
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
// const arr = _.dropRightWhile(users, {
//     'user': 'pebbles',
//     'active': false
// });
// console.log('arr', arr)

// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
// const arr = _.dropRightWhile(users, ['active', false]);
// console.log('arr', arr)
// => objects for ['barney']

// The `_.property` iteratee shorthand.
// const arr = _.dropRightWhile(users, 'deactive');
// console.log('arr', arr)
// => objects for ['barney', 'fred', 'pebbles']

// _.dropWhile 从前往后遍历，去除array中从 predicate 返回假值false开始到尾部的部分
// _.fill
// const arr = [1, 2, 3, 4, 5]
// const newArr = _.fill(arr, '#', 1, 3)
// console.log('newArr', newArr)
// console.log('arr', arr)
// _.findIndex
// const arr = [1, 2, 3, 4, 5]
// const findIndex = _.findIndex(arr, (item) => {
//     return item > 3
// })
// console.log('findIndex', findIndex)
// _.findLastIndex

// _.first - > head
// const ele = _.first([4, 5, 6])
// console.log('ele', ele)
// _.flatten
// const arr = _.flatten([1, 2, 3, [4, 5, [6, 7, 8]]])
// console.log('arr', arr);
// _.flattenDeep
// const arr = _.flattenDeep([1, 2, 3, [4, 5, [6, 7, 8]]])
// console.log('arr', arr);
// _.flattenDepth
// const arr = _.flattenDepth([1, 2, 3, [4, 5, [6, 7, [8]]]], 2)
// console.log('arr', arr);
// _.fromPairs
// const arr2obj = _.fromPairs([
//     ['fred', 20],
//     ['barney', 40]
// ])
// console.log('arr2obj', arr2obj);
// =>  arr2obj { 'fred': 30, 'barney': 40 }
// _.head
// _.indexOf
// _.initial
// const arr = [1, 2, 3, 4, 5]
// const newArr = _.initial(arr)
// console.log('arr', arr)
// console.log('newArr', newArr)

// _.intersection
// const arr1=[1,2,3,4,5,6]
// const arr2=[2,3,4,5,6,7]
// const arr3=[3,4,5,6,7,8]
// const newArr=_.intersection(arr1,arr2,arr3)
// console.log('newArr',newArr)
// _.intersectionBy
// const arr1 = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]
// const arr2 = [2.2, 3.3, 4.4, 5.5, 6.6, 7.7]
// const arr3 = [3.3, 4.4, 5.5, 6.6, 7.7, 8.8]
// const newArr = _.intersectionBy(arr1, arr2, arr3, (item) => {
//     let newItem = Math.floor(item)
//     console.log('item: ', item, 'newItem: ', newItem)
//     return Math.floor(item)
// })
// console.log('newArr', newArr)

// _.intersectionWith
// const arr1 = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]
// const arr2 = [2.3, 3.4, 4.5, 5.6, 6.7, 7.8]

// const newArr = _.intersectionWith(arr1, arr2, (arrVal, othVal) => {
//     console.log('arrVal: ', arrVal, 'othVal:', othVal)
//     return Math.floor(arrVal) === Math.floor(othVal)
// })
// console.log('newArr', newArr)
// _.join
// const arr = [1, 2, 3, 4, 5]
// const str = _.join(arr, '~')
// console.log('str', str);
// _.last
// const arr = [1, 2, 3, 4, 5]
// const el = _.last(arr)
// console.log('el', el);
// _.lastIndexOf
// _.nth
// _.pull 删除数组中的元素
// const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
// const newArr = _.pull(arr, )
// console.log('arr', arr);
// console.log('newArr', newArr);
// 在数组中移除一个同学
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     }
// ]
// _.pull(arr, {
//     'name': 'zhx'
// }, )
// console.log('arr', arr);
// _.pullAll
// const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
// const newArr = _.pullAll(arr, [1, 2, 3])
// console.log('arr', arr);
// console.log('newArr', newArr);
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     }
// ]
// const newArr = _.pull(arr, [{
//     'name': 'zhx'
// }, ])
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.pullAllBy
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     }
// ]
// const newArr = _.differenceBy(arr, [{
//     'name': 'zhx'
// }], (item) => {
//     console.log('item', item)
//     return item.name

// })
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.pullAllWith
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     }
// ]
// const newArr = _.pullAllWith(arr, [{
//     'name': 'zhx'
// }], (arrVal, othVal) => {
//     console.log('arrVal : ', arrVal, 'othVal :', othVal)
//     return arrVal.name === othVal.name

// })
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.pullAt
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     },
//     {
//         'name': 'wl'
//     },
//     {
//         'name': 'wh'
//     }
// ]
// const newArr = _.pullAt(arr, [2, 3])
// console.log('arr', arr);
// console.log('newArr', newArr)
// _.remove
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     },
//     {
//         'name': 'wl'
//     },
//     {
//         'name': 'wh'
//     }
// ]
// const newArr = _.remove(arr, (item) => {
//     return _.includes(item.name, 'z')
// })
// console.log('arr', arr);
// console.log('newArr', newArr)
// _.reverse
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     },
//     {
//         'name': 'wl'
//     },
//     {
//         'name': 'wh'
//     }
// ]
// _.reverse(arr)
// console.log('arr', arr)
// _.slice
// const arr = [{
//         'name': 'zhx'
//     },
//     {
//         'name': 'ql'
//     },
//     {
//         'name': 'zy'
//     },
//     {
//         'name': 'wl'
//     },
//     {
//         'name': 'wh'
//     }
// ]
// const newArr = _.slice(arr, 2, 3)
// console.log('arr', arr);
// console.log('newArr', newArr)
// _.sortedIndex
// const arr = [1, 2, 3, 4, 5, 6]
// const index = _.sortedIndex(arr, '3')
// console.log('index', index);
// const arr2 = ['a', 'b', 'c', 'd']
// const index2 = _.sortedIndex(arr2, 'g')
// console.log('index2', index2);
// _.sortedIndexBy
// const arr = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'zy',
//         'age': 20
//     },
//     {
//         'name': 'wl',
//         'age': 21
//     },
//     {
//         'name': 'wh',
//         'age': 22
//     }
// ]
// const index = _.sortedIndexBy(arr, {
//     'name': 'lm',
//     'age': 20
// }, function (item) {
//     console.log('item', item)
//     return item.age
// })
// console.log('index', index);
// _.sortedIndexOf
// _.sortedLastIndex
// _.sortedLastIndexBy
// _.sortedLastIndexOf
// _.sortedUniq
// const arr = [3, 2, 1, 3, 2, 1, 3, 2, 1, 6, 6, 6, 5, 5, 5, 4, 4, 4]
// const newArr = _.sortedUniq(arr)
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.sortedUniqBy
// const arr = [3.3, 2.2, 1.1, 3.4, 2.4, 1.4, 3.5, 2.5, 1.6, 6.1, 6.2, 6.3, 5.1, 5.2, 5.3, 4.1, 4.2, 4.3]
// const newArr = _.sortedUniqBy(arr, Math.floor)
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.tail
// const arr = [1, 2, 3]
// const newArr = _.tail(arr)
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.take
// const arr = [1, 2, 3, 4]
// const newArr = _.take(arr, 2)
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.takeRight
// const arr = [1, 2, 3, 4]
// const newArr = _.takeRight(arr, 2)
// console.log('arr', arr)
// console.log('newArr', newArr);
// _.takeRightWhile
// _.takeWhile
// _.union
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'zy',
//         'age': 20
//     },
//     {
//         'name': 'wl',
//         'age': 21
//     },
//     {
//         'name': 'wh',
//         'age': 22
//     }
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'ly',
//         'age': 15
//     }
// ]
// const newArr = _.union(arrA, arrB)
// console.log('newArr', newArr);
// _.unionBy
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'ly',
//         'age': 18
//     }
// ]
// const newArr = _.unionBy(arrA, arrB, (item) => {
//     console.log('item', item)
//     return item.age === 18
// })
// console.log('newArr', newArr);
// _.unionWith
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ly',
//         'age': 18
//     }
// ]
// const newArr = _.unionWith(arrA, arrB, (arrVal, othVal) => {
//     console.log('arrVal: ', arrVal, 'othVal:', othVal)
//     return arrVal.name === othVal.name
// })
// console.log('newArr', newArr);
// _.uniq
// const arr = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
//     {
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'zhx',
//         'age': 18
//     },
// ]
// const newArr = _.uniq(arr)
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.uniqBy
// const arr = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
// ]
// const newArr = _.uniqBy(arr, (item) => {
//     console.log('item', item)
//     return item.name
// })
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.uniqWith
// const arr = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
// ]
// const newArr = _.uniqWith(arr, (arrVal, othVal) => {
//     console.log('arrVal: ', arrVal, 'othVal:', othVal)
//     return arrVal.age === othVal.age

// })
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.unzip
// const arr = [
//     ['zhx', 18, true, {
//         a: 1
//     }],
//     ['ql', 19, false, {
//         b: 2
//     }],
//     ['zy', 20, false, {
//         c: 3
//     }],
//     ['wh', 21, true, {
//         d: 4
//     }],
//     ['ly', 22, true, {
//         e: 5
//     }]
// ]
// const newArr = _.unzip(arr)
// console.log('newArr', newArr);
// _.unzipWith
// const arr = [
//     ['zhx', 18, true, {
//         a: 1
//     }],
//     ['ql', 19, false, {
//         b: 2
//     }],
//     ['zy', 20, false, {
//         c: 3
//     }],
//     ['wh', 21, true, {
//         d: 4
//     }],
//     ['ly', 22, true, {
//         e: 5
//     }]
// ]
// const newArr = _.unzipWith(arr, (item) => {
//     console.log('item', item)
//     return '~' + item
// })
// console.log('newArr', newArr);
// _.without
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const arr = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 18
//     },
//     {
//         'name': 'zy',
//         'age': 18
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
//     {
//         'name': 'zhx',
//         'age': 19
//     },
// ]
// const newArr = _.without(arr, {
//     'name': 'zhx',
//     'age': 19
// })
// console.log('arr', arr);
// console.log('newArr', newArr);
// _.xor
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'zy',
//         'age': 20
//     },
//     {
//         'name': 'wl',
//         'age': 21
//     },
//     {
//         'name': 'wh',
//         'age': 22
//     }
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'ly',
//         'age': 15
//     }
// ]
// const newArr = _.xor(arrA, arrB)
// console.log('newArr', newArr);
// _.xorBy
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'zy',
//         'age': 20
//     },
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'ly',
//         'age': 15
//     }
// ]
// const newArr = _.xorBy(arrA, arrB, (item) => {
//     console.log('item', item)
//     return item.name
// })
// console.log('newArr', newArr);
// _.xorWith
// const arrA = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'zy',
//         'age': 20
//     },
// ]
// const arrB = [{
//         'name': 'zhx',
//         'age': 18
//     },
//     {
//         'name': 'ql',
//         'age': 19
//     },
//     {
//         'name': 'ly',
//         'age': 15
//     }
// ]
// const newArr = _.xorWith(arrA, arrB, (arrVal, othVal) => {
//     console.log('arrVal: ', arrVal, 'othVal:', othVal)
//     return arrVal.name === othVal.name
// })
// console.log('newArr', newArr);
// _.zip
// const nameArr = ['zhx', 'ql', 'zy', 'wh', 'ly']
// const ageArr = [18, 19, 20, 21, 22]
// const genderArr = [true, false, false, true, true]
// const xx = [{
//     'a': 1
// }, {
//     'b': 2
// }, {
//     'c': 3
// }, {
//     'd': 4
// }, {
//     'e': 5
// }]
// const newArr = _.zip(nameArr, ageArr, genderArr, xx)
// console.log('newArr', newArr)
// _.zipObject
// const arrA = ['name', 'age']
// const arrB = [1, 2]
// const obj = _.zipObject(arrA, arrB)
// console.log('obj', obj);
// _.zipObjectDeep
// const arrA = ['a.b[0].c', 'a.b[1].d']
// const arrB = [1, 2]
// const newArr = _.zipObjectDeep(arrA, arrB)
// console.log('newArr', newArr)
// _.zipWith
const arrA = [1, 2, 3]
const arrB = [10, 20, 30]
const arrC = [100, 200, 300]
const newArr = _.zipWith(arrA, arrB, arrC, (a, b, c) => {
    console.log('a: ', a, 'b: ', b, 'c: ', c)
    return a + b + c
})