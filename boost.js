// 拓展JS原型方法

// 删除数组指定的某个元素
Array.prototype.remove = function(val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

// 去掉数组中的空元素
Array.prototype.removeEmptyArrayEle = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == undefined) {
      this.splice(i, 1)
      i = i - 1
    }
  }
  return this
}

// 删除对象数组的对象：该对象有key的值==val
Array.prototype.removeObj = function(key, val) {
  var index = this.findIndex(item => {
    return item[key] == val
  })
  if (index > -1) {
    this.splice(index, 1)
  }
}

// 删除对象数组中key：所有对象的某个key
Array.prototype.removeKey = function(key) {
  this.forEach(item => {
    delete item[key]
  })
  return this
}

// 删除对象数组中key：key的值全为val（默认删除全为null的项）
Array.prototype.removeAllNull = function(val = null) {
  const keyArr = Object.keys(this[0])
  keyArr.forEach(k => {
    if (this.every(i => i[k] == val)) this.removeKey(k)
  })
  return this
}

// 替换对象数组中：所有对象的key的value值
Array.prototype.replaceKeyVal = function(key, val) {
  this.forEach(item => {
    item[key] = val
  })
  return this
}

// 在数组的指定位置插入一个数组
Array.prototype.insertArr = function(arr1, index, arr2) {
  // 把arr2 变成一个适合splice的数组（包含splice前2个参数的数组）
  arr2.unshift(index, 0)
  // 利用apply把新得到的arr2整个数组做为参数传给arr1
  Array.prototype.splice.apply(arr1, arr2)
}

// 判断两个数组是否存在重叠
Array.prototype.isExitedRepeat = function(arr) {
  if (this.find(item => arr.includes(item))) {
    return true
  } else {
    return false
  }
}

// 返回两个数组的唯一重叠项
Array.prototype.intersection = function(arr) {
  return this.find(item => arr.includes(item))
}

// 返回两个数组的重叠值数组（交集）
Array.prototype.interArr = function(arr) {
  return this.filter(item => arr.includes(item))
}

// 判断数组的值是否全部相同
Array.prototype.isAllEqual = function(arr) {
  if (arr.length > 0) {
    return !arr.some(function(value, index) {
      return value !== arr[0]
    })
  } else {
    return true
  }
}
