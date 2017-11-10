#!/bin/sh
echo "enter a number"
read a
echo "enter power"
read b
count=0
ans=1
while [ $b -ne $count ]
do
  ans=`expr $ans \* $a`
  count=`expr $count + 1`
done
echo " $a power of $b is $ans "

