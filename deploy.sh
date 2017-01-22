#!bin/bash
clear
echo "the scripts starts now"

echo "Hi, $USER!"		# dollar sign is used to get content of variable
echo

echo "I will now fetch you a list of connected users:"
echo							
w				# show who is logged on and
echo				# what they are doing

echo "I'm setting two variables now."
COLOUR="black"					# set a local shell variable
VALUE="9"					# set a local shell variable
echo "This is a string: $COLOUR"		# display content of variable 
echo "And this is a number: $VALUE"		# display content of variable
echo

echo "I'm giving you back your prompt now."
echo
