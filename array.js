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
var users = [{
        'user': 'barney',
        'active': true
    },
    {
        'user': 'fred',
        'active': false
    },
    {
        'user': 'pebbles',
        'deactive': false
    }
];

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
const arr1 = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]
const arr2 = [2.3, 3.4, 4.5, 5.6, 6.7, 7.8]

const newArr = _.intersectionWith(arr1, arr2, (arrVal, othVal) => {
    console.log('arrVal: ', arrVal, 'othVal:', othVal)
    return Math.floor(arrVal) === Math.floor(othVal)
})
console.log('newArr', newArr)
// _.join
// _.last
// _.lastIndexOf
// _.nth
// _.pull
// _.pullAll
// _.pullAllBy
// _.pullAllWith
// _.pullAt
// _.remove
// _.reverse
// _.slice
// _.sortedIndex
// _.sortedIndexBy
// _.sortedIndexOf
// _.sortedLastIndex
// _.sortedLastIndexBy
// _.sortedLastIndexOf
// _.sortedUniq
// _.sortedUniqBy
// _.tail
// _.take
// _.takeRight
// _.takeRightWhile
// _.takeWhile
// _.union
// _.unionBy
// _.unionWith
// _.uniq
// _.uniqBy
// _.uniqWith
// _.unzip
// _.unzipWith
// _.without
// _.xor
// _.xorBy
// _.xorWith
// _.zip
// _.zipObject
// _.zipObjectDeep
// _.zipWith