echo off
set SLACK_API_TOKEN=xoxp-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
set /p SLACK_FILE_DEL_TARGET_CHANNEL=channel名を指定してください。（例：general）:
set /p SLACK_FILE_DEL_TARGET_DATE=何日以前のファイルを削除しますか（例＝＞1：1日前、7：日前）:

node app/index.js
