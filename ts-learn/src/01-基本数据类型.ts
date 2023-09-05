// console.log("123");
// let age = 18
// age = '12' 
// age = 20
// 类型注解 对类型进行约束
let age:number=18  // 设置类型 number 
// age = '555' // 不能将类型 'string' 分配给 age number类型

let username = '大家/hh'
let ada = username.split('/') // 字符串转数组
console.log(ada);

// 类型注解总结
// 1.不对应的类型值会报错
// 2.会有各种方法 .

// 基本数据类型 number、string、null、undefined、boolean
// let add:undefined = undefined
// add = 23

// 不可将已定义好的数值 再分配其他数据类型