@echo off
git status > status.txt 2>&1
if NOT EXIST status.txt echo git not found or something wrong > status.txt
echo END >> status.txt
