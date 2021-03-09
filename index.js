// Load the full build.
var _ = require('lodash');

// 集合遍历
_.each([1, 2], (value, key, collection) => {
    console.log('value', value);
    console.log('key', key);
    console.log('collection', collection);
})

// _.each({
//     a: 1,
//     b: 2
// }, (value, key, collection) => {
//     console.log('value', value);
//     console.log('key', key);
//     console.log('collection', collection);
// })
// _.cloneDeep
// _.get
// _.isString
// _.has
// _.forin
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