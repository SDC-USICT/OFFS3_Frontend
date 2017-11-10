#!/bin/sh
echo "enter the value"
read value
if [ `expr $value` -eq 1 ]
then  
echo "the 1 is not a prime no."
  exit		
fi
i=2
while [ $i -lt $value ]
do
  if [ `expr $value % $i` -eq 0 ] 








  then
      echo "the $value is not a prime no."
      echo "since $value is divisible by $i"
      exit
    fi
    i=`expr $i + 1`
done
echo "the $value is prime"
