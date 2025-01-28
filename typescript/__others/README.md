### 1. 陣列操作 (Array)
- find / findIndex / indexOf
- filter / map / reduce / forEach
- some / every
- includes
- slice / splice
- concat
- push / pop
- shift / unshift
- sort
- reverse

### 2. 字串操作 (String)
- split / join
- slice / substring / substr
- replace / replaceAll
- indexOf / lastIndexOf
- includes
- startsWith / endsWith
- trim / trimStart / trimEnd
- toLowerCase / toUpperCase
- padStart / padEnd
- match / search

### 3. 物件操作 (Object)
- Object.keys
- Object.values
- Object.entries
- Object.assign
- Object.freeze
- Object.seal
- Object.create
- Object.defineProperty
- Object.hasOwn
- Object.is

### 4. 數字操作 (Number)
- parseInt / parseFloat
- toFixed
- toString
- isInteger
- isNaN
- Math.round
- Math.floor
- Math.ceil
- Math.abs
- Math.max / Math.min

### 5. 日期操作 (Date)
- getDate / getDay / getMonth / getYear
- setDate / setMonth / setYear
- getTime / setTime
- getHours / getMinutes / getSeconds
- toISOString
- toLocaleString
- toLocaleDateString
- toLocaleTimeString
- getTimezoneOffset
- now

### 6. JSON操作
- JSON.parse
- JSON.stringify
- JSON.clone

### 7. 型別檢查/轉換
- typeof
- instanceof
- Array.isArray
- Boolean()
- Number()
- String()
- parseInt()
- parseFloat()

### 8. Promise操作
- Promise.all
- Promise.race
- Promise.any
- Promise.allSettled
- Promise.resolve
- Promise.reject
- then
- catch
- finally

### ES6

- 解構賦值 (Destructuring)
	- 陣列解構: const [a, b] = array
	- 物件解構: const {name, age} = object
	- 重命名: const {name: title} = object
	- 預設值: const {name = 'default'} = object

- 展開/其餘運算符 (Spread/Rest)
	- 展開陣列: [...array]
	- 展開物件: {...object}
	- 其餘參數: function(...args)
	- 合併: const merged = [...arr1, ...arr2]