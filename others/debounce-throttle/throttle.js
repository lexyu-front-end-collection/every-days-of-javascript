const throttlePrototypeText = document.getElementById("throttle-prototype")
const throttleBetterText = document.getElementById("throttle-better")

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}

function throttle_prototype(cb, delay = 1000) {
    let shouldWait = false

    return (...args) => {
        if (shouldWait) {
            return
        }

        cb(...args)
        shouldWait = true

        setTimeout(() => {
            shouldWait = false
        }, delay)
    }
}


// ------------------------------------>

/**
處理流程:
1. h - 立即執行
   - shouldWait = true
   - 啟動 300ms 計時器
2. e - 因為 shouldWait = true,直接被丟棄
3. l - 因為 shouldWait = true,直接被丟棄
4. l - 因為 shouldWait = true,直接被丟棄
5. o - 因為 shouldWait = true,直接被丟棄
6. XXX ms 後 
   - shouldWait = false
   - 等待新的輸入
最終結果:
- 畫面上只會顯示 "h"
- e, l, l, o 的輸入都被忽略
- 要等到 XXX ms 後的新輸入才會被處理
原始版本在處理持續性輸入時的缺陷 - 會丟失中間過程的所有更新。
 */
const updateThrottlePrototypeText = throttle_prototype(text => {
    throttlePrototypeText.textContent = text
}, 700)


/**
 連續快速輸入 "hello" 的處理流程:
1. h - 立即執行
2. e - 保存參數
3. l - 更新保存的參數  
4. l - 更新保存的參數
5. o - 更新保存的參數
6. XXX ms後 - 執行保存的最後參數 "hello"
 */
const updateThrottleBetterText = throttle(text => {
    throttleBetterText.textContent = text
}, 700)

