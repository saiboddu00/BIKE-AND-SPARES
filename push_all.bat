@echo off
cd /d "c:\Users\Admin\Desktop\Auto moblie"
echo Starting... > push_log.txt
git init >> push_log.txt 2>&1
echo git init done >> push_log.txt
git add . >> push_log.txt 2>&1
echo git add done >> push_log.txt
git commit -m "Auto-commit" >> push_log.txt 2>&1
echo git commit done >> push_log.txt
git branch -M main >> push_log.txt 2>&1
echo git branch done >> push_log.txt
git remote remove origin >> push_log.txt 2>&1
echo git remote remove done >> push_log.txt
git remote add origin https://github.com/saiboddu00/BIKE-AND-SPARES.git >> push_log.txt 2>&1
echo git remote add done >> push_log.txt
git push -u origin main >> push_log.txt 2>&1
echo git push done >> push_log.txt
echo Done >> push_log.txt
