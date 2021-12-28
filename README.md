| Company   | Product    |
| --------- | ---------- |
| Google    | Angular    |
| Facebook  | React      |
| Evan You (ex-angularjs) | Vue        |
| Microsoft | Typescript |
| Microsoft | Github     |
| Github    | Electron   |
| Ryan Dahl | Deno       |
| Ryan Dahl | nodeJS     |
| Microsoft | npm        |  
 
&nbsp;  
&nbsp;  
-------
Batch script to backup project files :

```js
@ECHO OFF
CLS

cd /d  C:\Program Files (x86)\WinRAR


::---------------- https://stackoverflow.com/a/1445724
SET HOUR=%time:~0,2%
SET dtStamp9=%date:~-4%%date:~4,2%%date:~7,2%_0%time:~1,1%%time:~3,2%%time:~6,2% 
SET dtStamp24=%date:~-4%%date:~4,2%%date:~7,2%_%time:~0,2%%time:~3,2%%time:~6,2%

if "%HOUR:~0,1%" == " " (SET dtStamp=%dtStamp9%) else (SET dtStamp=%dtStamp24%)
::----------------
 
::
RAR.exe a -x*\bin -x*\obj -x*\packages -x*\node_modules -x*.rar -x*.zip -x*.7z -x*.exe -ep1 "C:\projects\SupermanBackup\%dtStamp%.rar" -s "C:\projects\Superman"

::dbase schema only
cd /d  c:\xampp\mysql\bin
mysqldump --no-data -u root -ppassword amigaDB > C:\projects\SupermanBackup\%dtStamp%.sql

pause
```
