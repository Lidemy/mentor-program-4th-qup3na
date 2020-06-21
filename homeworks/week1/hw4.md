## 跟你朋友介紹 Git
### 什麼是 Git 與 GitHub?
Git 和 GitHub 是兩個有關連但不同的東西。
    Git 主要功能為版本管理的工具，記錄檔案更動的內容及修改者、留存歷史紀錄以便了解專案的脈絡，以分支、合併等功能達成協作。
    GitHub 則是一個提供免費空間擺放 Source Code 的網站

### Ｇit 為何而生?
就是為了解決混亂的版本管理！
    例如 '1090606.txt' 文檔在進行第一次修改後，為了留存原始版本大多數的方法都是在檔案名稱上進行版本紀錄像是 '1090606_更新版.txt'，若為協作檔案便在檔案名稱加上編輯者的名字 '1090606_更新版_nana.txt'，但是當更新版本越來越多亦是雜亂無章，具體進行了什麼樣的更動也不容易紀錄也可能發生檔案被覆蓋的風險，因此 Git 就這麼誕生啦！

### Git 的作業區塊與狀態
Git 主要三大區塊
    工作目錄 ( Working Directory )
    暫存區 ( Staging Area )
    儲存庫（ Repository ）

檔案的四種狀態
未追蹤 ( untracked ) - 未被 Git 追蹤控管的檔案
已修改 ( modified ) - 檔案已被修改但尚未提交到本地端資料庫
已暫存 ( staged ) - 檔案已被暫存到 Staging Area 等待下一次提交
已提交 ( committed ) - 這檔案己提交到本地端資料庫

區塊之間透過不同指令把檔案移往不同的區域
git add 將檔案從 Working Directory 存入 Staging Area
git commit 把 Staging Area 的內容移至 Repository

### 如何與遠端進行協作?
數據庫分為 本地端數據庫 以及 遠端數據庫
本地端數據庫: 為自己電腦所配置的數據庫
遠端數據庫: 被託管於雲端的數據庫 ( GitHub、GitLab、Bitbucket)

若要將本地端數據庫的修改記錄上傳到遠端數據需要利用 Git 執行 Push 將本地端的修改歷史上傳至遠端，反之欲同步遠端數據庫的修改記錄則利用 Pull 將最新的修改記錄載至本地端資料庫。


### Let's do it! 菜哥的電視笑話冠軍計畫！
1. 在 CLI 上輸入 `git init` 將欲存放笑話集的資料夾進行初始化，之後在本資料夾裡的檔案有任何更動都能被 git 偵測追蹤
2. 隨時都能使用 `git status` 來追蹤檔案的狀態
3. 將 untracked 及 modified 的笑話檔案利用 `git add .` 全部檔案或是 `git add <檔名>` 特定檔案加入 Staging Area 等待 commit 到本地端數據庫進行版本控制
4. 暫存區的檔案需再使用 `git commit` 指令將更新紀錄提交到本地端資料庫， 其中最好利用 `git commit -m <註解>` 進行每次檔案異動說明，此動作除了便於自己釐清專案脈絡外也利於他人快速理解異動原因 
5. 若菜哥想利用不一樣的故事結局試探觀眾的反應好壞，可利用 `git branch <結局名稱>` 開創新分支，待確認最好的反應後再將最好的結局合併到主笑話 ( master ) 上，此過程可以利用 `git branch -v ` 查看目前所有 branch，並以 `git checkout <分支名稱>` 切換到欲修改的 branch上進行修改
6. 完成並 commit 後，就可以回到 master 上利用 `git merge <最棒結局的分支名稱>` 進行合併，而原本用來開發測試的 branch 就可以利用 `git branch -d <分支名稱>` 刪除了

此時此刻的菜哥說他希望能與世界上更多的笑話高手進行多人合作開發天大的笑話，這時候就是 GitHub 出場的時刻了。

1. 首先需要在 GitHub 新建一個程式庫 repo ( repository )，進入 Create a new repository 畫面後需輸入一些建立程式庫的資料，與本地端資料庫起初進行初始化的 `git init` 的檔案一樣，只是這裡是 GitHub 提供了一個網路資料夾
2. 接下來就是在這個網路資料夾加入要版本管理的檔案，因此需要先連接上遠端的位址 `git remote add origin <repository位址>`
3. 接著再利用 `git push origin master` 指令將本地端資料庫的的版本推送到 GitHub
4. 若菜哥在 GitHub 上發現一個不錯的笑話，想要當作參考再讓這個笑話變得無敵霹靂大笑話就能 fork 別人的專案，然後利用 `git clone <repo url>` 複製到本地端資料夾進行編輯，亦能發送 pull request 請求原作者可以把菜哥加入專案名留青史變成無敵霹靂大笑話的專案作者之一


### 其他指令們
查詢版本 
git version
        
查詢設定列表
git config --list
        
輸入姓名
git config --global user.name "你的名字"
        
輸入email
git config --global user.email "你的email"
        
在本地資料夾新增數據庫
git init
        
複製遠端數據庫
git clone 遠端數據庫網址
        
增加檔案進入索引
git add 檔案名稱
        
增加全部檔案進入索引
git add .
        
查詢狀態
git status
        
顯示歷史紀錄
git log
        
將索引提交到數據庫
git commit -m '更新訊息'
message
        
commit 後發現有幾個檔案忘了加入進去，想要補內容進去時
git commit --amend 
        
顯示所有本地分支
git branch
 
新增分支
git branch 分支名稱
 
切換分支
git checkout 分支名稱
 
合併指定分支到目前的分支
git merge 分支名稱
 
刪除分支
git branch -d 分支名稱

複製遠端數據庫
git clone 遠端數據庫網址

將本地分支推送到遠端分支
git push 遠端數據庫名稱 遠端分支名稱
 
將遠端分支拉下來與本地分支進行合併
git pull

