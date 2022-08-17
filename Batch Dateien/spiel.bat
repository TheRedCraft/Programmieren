@echo off
:anfang
color 0c
echo Hallo %USERNAME% wie geht es dir?
echo Moegliche Antworten: Gut, Schlecht
set /p antwort=
if %antwort%==Gut goto Gut
if %antwort%==Schlecht goto schlecht

:Gut
echo das Freud mich
Pause >nul
goto anfang
:Schlecht
echo Schade
pause >nul
goto anfang