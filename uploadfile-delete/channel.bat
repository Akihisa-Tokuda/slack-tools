echo off

set SLACK_FILE_DEL_TARGET_CHANNEL=%1
set SLACK_FILE_DEL_TARGET_DATE=%2

if "%~1"=="" (
    set /p SLACK_FILE_DEL_TARGET_CHANNEL=channel�����w�肵�Ă��������B�i��Fgeneral�j:   
)
if "%~2"=="" (
    set /p SLACK_FILE_DEL_TARGET_DATE=�����ȑO�̃t�@�C�����폜���܂����i�၁��1�F1���O�A7�F���O�j:
)

cmd.bat
