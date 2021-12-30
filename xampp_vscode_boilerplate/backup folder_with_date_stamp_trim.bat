@ECHO OFF
CLS

if [%1]==[] goto usage

::construct backupfolder name - https://stackoverflow.com/a/15568171
set destination_folder=%~dp0+%~n1backup\

::create backup folder if doesnt exist
if NOT exist "%destination_folder%" (
	mkdir "%destination_folder%"
	
	echo %destination_folder% created!
	pause
)

::where winrar exists
cd /d  C:\Program Files (x86)\WinRAR


::---------------- https://stackoverflow.com/a/1445724
SET HOUR=%time:~0,2%
SET dtStamp9=%date:~-4%%date:~4,2%%date:~7,2%_0%time:~1,1%%time:~3,2%%time:~6,2% 
SET dtStamp24=%date:~-4%%date:~4,2%%date:~7,2%_%time:~0,2%%time:~3,2%%time:~6,2%

if "%HOUR:~0,1%" == " " (SET dtStamp=%dtStamp9%) else (SET dtStamp=%dtStamp24%)

call :Trim dtStamp %dtStamp%
::----------------
 
::
RAR.exe a -x*\bin -x*\obj -x*\packages -x*\node_modules -x*.rar -x*.zip -x*.7z -x*.exe -ep1 "%destination_folder%%dtStamp%.rar" -s "%1"
RAR.exe a -x*\bin -x*\obj -x*\packages -x*\node_modules -x*\JSONsamples -x*.rar -x*.zip -x*.7z -x*.exe -x*.png -x*.svg -ep1 "%destination_folder%%dtStamp%api.rar" -s "%~dp0api"

::dbase schema only
cd /d  d:\xampp\mysql\bin
mysqldump --no-data -u root -ppassword sagiko2 > %destination_folder%%dtStamp%.sql

pause

exit

:usage
@echo please drag and drop a folder
pause
exit

:Trim
:: trim https://stackoverflow.com/a/26079981
SetLocal EnableDelayedExpansion
set Params=%*
for /f "tokens=1*" %%a in ("!Params!") do EndLocal & set %1=%%b
goto :EOF