#!/bin/sh
echo "enter a number"
read a
x=$a
i=1
while [ $i -lt 11 ] 
do
val=`expr $x \* $i`
echo "$x * $i" = "$val"
i=`expr $i + 1`
done 



