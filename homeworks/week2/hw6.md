``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 宣告一個函式名稱為 isValid
2. 最後一行呼叫 isValid 的函式並將陣列 [3, 5, 8, 13, 22, 35] 傳入 arr 參數的引數
3. 執行第二行 - 第一個 for 迴圈
  
  第一圈： 
    i = 0, i < 陣列長度 6, 進入迴圈
    執行第三行, indexOf 0 的數值 3 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第二圈：
    i = 1, i < 陣列長度 6, 進入迴圈 
    執行第三行, indexOf 1 的數值 5 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第三圈：
    i = 2, i < 陣列長度 6, 進入迴圈 
    執行第三行, indexOf 2 的數值 8 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第四圈：
    i = 3, i < 陣列長度 6, 進入迴圈 
    執行第三行, indexOf 3 的數值 13 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第五圈：
    i = 4, i < 陣列長度 6, 進入迴圈 
    執行第三行, indexOf 4 的數值 22 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第六圈：
    i = 5, i < 陣列長度 6, 進入迴圈 
    執行第三行, indexOf 5 的數值 35 不小於 0, 條件不符, 故不回傳'invalid'
    i + 1, 回到第二行

  第七圈：
    i = 6, i 不 < 陣列長度 6, 不進入迴圈, 執行第五行

4. 執行第五行 - 第二個 for 迴圈 

  第一圈：
    i = 2, i < 陣列長度 6, 進入迴圈
    if (arr[i] !== arr[i-1] + arr[i-2]) 
    indexOf 2 的數值 8 與 [8-5]+[8-3] 相等, 故不回傳 'invalid'
    i + 1, 回到第五行

  第二圈：
    i = 3, i < 陣列長度 6, 進入迴圈
    indexOf 3 的數值 13 與 [13-8]+[13-5] 相等, 故不回傳 'invalid'
    i + 1, 回到第五行

  第三圈：
   i = 4, i < 陣列長度 6, 進入迴圈
   indexOf 4 的數值 22 與 [22-13]+[22-8] 不相等, 回傳字串 'invalid'

  5. 函式結束


