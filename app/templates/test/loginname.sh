#/!bin/sh
pass="shivaji"
read -p  "enter login name:" login 
if [ "$login" = "$pass" ] 
then
  echo   "login accepted"
    else
    echo  "login entered invalid"
fi

