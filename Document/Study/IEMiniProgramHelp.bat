@echo off
for /f "tokens=3,4" %%a in ('"reg query HKEY_CLASSES_ROOT\http\shell\open\command"') do (set SoftWareRoot=%%a %%b)
::输入地址
set url=https://developers.weixin.qq.com/miniprogram/dev/index.html
::打开网页，之后进行后续操作
start % SoftWareRoot % %url%
