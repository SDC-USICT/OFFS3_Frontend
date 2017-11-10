#!/bin/sh
echo "enter file name"
read file
if [ -r $file ]
then "file has read access"
else
echo "file does not have read access"
fi

if [ -w $file ]
then
echo "file has write permission"
else
echo "file does not have write permission"
fi

if [ -x $file ]
then
echo "file has execute permission"
else
echo "file does not have execute permission"
fi
