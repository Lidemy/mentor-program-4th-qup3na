## 交作業流程

### 檔案下載
先將 Github 上的檔案 clone 到 local 端
    git clone https://github.com/Lidemy/mentor-program-4th-qup3na.git
查看是否成功載下來
    ls
切換到 mentor-program-4th-qup3na 資料夾
    cd mentor-program-4th-qup3na
打開 mentor-program-4th-qup3na 資料夾 
    open .
點擊 week1 開始做功課～


### 作業繳交
1. 新增一個叫做 week1 的 branch 並切換過去
    git branch week1
    git checkout week1

    or

    git checked -b week1

2. 寫好作業後將所有有更動的檔案加入 staging area (staged)
    git add.

3. 將版本 commit 到 Repository
    git commit -m " 本次 commit 的版本描述 "
    ( 每個 commit 有個適當的描述是重要的，要回朔時會較容易查找 )

4. 上傳到 GitHub 
    git push origin hw1

5. 在自己的 GitHub 上發起 pull request
6. 複製 PR 連結，貼到學習系統上繳交作業
7. 待助教批改作業後，GitHub 已顯示 Merged
8. 切到 master 並 pull 下最新版本
    git checjout master
    git pull origin master
9. 刪除已 merge 的  branch
    git branch -d hw1
