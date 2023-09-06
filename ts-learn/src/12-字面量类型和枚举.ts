{
  // 字面量类型  + 联合类型
  type direction = '上'|'下'  // 此时direction 就是一个单独特定 字面量类型
  // const move:direction= 2349  不能将不符合上述定义的字面量类型 分配给 move

  const move:direction = '上'
  console.log(move);
  
  // 枚举实现原理 ：类似 字面量类型 + 联合类型

  enum dire {
    up = '上',
    down = '下'
  }
  console.log(dire.down);
  
  
}