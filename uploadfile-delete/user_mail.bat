echo off

set SLACK_FILE_DEL_TARGET_MAIL=%1
set SLACK_FILE_DEL_TARGET_DATE=%2

if "%~1"=="" (
    set /p SLACK_FILE_DEL_TARGET_MAIL=mailアドレスを指定してください。:
)
if "%~2"=="" (
    set /p SLACK_FILE_DEL_TARGET_DATE=何日以前のファイルを削除しますか（例＝＞1：1日前、7：日前）:
)


cmd.bat
