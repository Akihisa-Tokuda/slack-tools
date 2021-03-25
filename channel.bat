echo off
set SLACK_API_TOKEN=xoxp-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
set /p SLACK_FILE_DEL_TARGET_CHANNEL=channel名を指定してください。（例：general）:
set /p SLACK_FILE_DEL_TARGET_DATE=この日より前を削除：YYYY-MM-DDフォーマット（例＝＞2021-03-31）:

node app/index.js
