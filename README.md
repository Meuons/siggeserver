# ALL MAKT ÅT SIGGE VÅR BEFRIARE!!!

## API Specs

## Admin credentials

username: admin
password: pass

## Log in

provide

{
"username":(username),
"password":(password)
}

to /users/login

A token will be returned which has to be used for authorizing all user calls to the server except logging in (obviously!)

All actions except logging in and out can only be done by an administrator

## Log out

provide

{
"username":(username),
"token":(token)
}

to /users/logout

## Create user

provide

{
"username":(username),
"token":(token),
"newUsername":(username for the new user),
"newPassword":(password for the new user)
}

to /users/create

## Delete user

provide

{
"username":(username),
"token":(token),
"updateUsername":(username for the user to be deleted)
}

to /users/delete

## Update user

provide

{
"username":(username),
"token":(token),
"updateUsername":(username for the user to be updated)
"newPassword":(the new password fo the user)
}

to /users/update

@%(, ./#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#/,,,**\*\*\*\***\***\*\*\*\***,,,,,,,,,,,...............,/#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@&%######%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#/**\*\*\***//(%&@&%#(((((((/////(((((((((((((/////**\*\*\***,,,,,,.........,,,,_/(#%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#/_.. ._(%&%(/\***\*///(((((###############(((((////\*\***,,,,,,,,,,,,,,,,..,_(#&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%(_. .,_/((########################%%%%#####(((((////**\*\***,,,,,,,,,,,,.,,,,/#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#(/**,,**/(((###############(((((###############(((((/////\***\*\*\*\*\*\*\***,,,,,..,/(####(#%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#/\*//((((((((((((((((((((((((((((((((#########(((((////////////\***\*\*\*\***,,,,.... ,/#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#((((((((////((((((((((((((((((((////////(((((((((((((((((((((((((((//////////////\***\*,,,,**////**\***/(%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%%%%&%#/**\***//////(((((//////////////////**//////////////////(((((((((((((((((((((((((((///////\***,,,... .,/#%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#/\*,\***\*\*\*\*\***///////////////////////**\*\***\***\*\***/////////////////////////((((((((((((((((((((((((((//**,,,.. ...,/#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@&%##########(/\*,,**\*\***\*/////////////////////////**\*\*\*\*****\*\*****\*\*****////////**\*\*\***//////////////(((((((((((((((((///**,,....,_/(((((#%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@&#(_.,,,,,,,,\*\*\***//////////////////////******\*\*\*\*******\*\*******\*\*\*\*******/////**\*\***\*\*\***\*\***//\***\*//////(((((((#######((//**,,.... ,(%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%#(//////\***\*\*\*\*\*\*\***/////((((((((//////////////**\*//**********\*\*\*\*************\*\*************\*\*\*\*************//////(((((#########(((//**\*,,,....,,\*\*\*\***/#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,,,,,**\*\*\***///////////((((((((((((//////////////////////**\*\***/////////******\*\*\*\*******\*\*******\*\*\*\*******//////(((((############(((//\***_,,,,,..... ._(#%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&%(\*,,\*\***/////////////////((((((((((((((((((//(((((((((((///////////////////**\*\***\*\*\*\***\*\***/////////////////(((((((##############((((/////**\***,,,,........,/#@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,,,,**\*/////(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((////**\*\*****\*\*\*****\*\*****//////((((((########%%########(((((///////**\***,,,,,..... .,_/(#&@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%(_,**\***///((((((####((((((((((((((((((########################((((((((((/////****\*\*****\*****\*\*****///((((#######%%%%%%%#####(((((//////////**\***,,,,,,,.... .\*#&@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@&&%#(**\*//(((###############################%%%%%#######%%%%%#######(((((((////\*\***\*\*\*\***\*\***,\*,**\*\***///(((###############(((((//////////////**_,,,,,,,,,... ./#&@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@%#/_//(((######%###########%%#########%%%%%%%%%%%%%%%%%%%%%%########((((////\*\***\***\*\***,,,,,,,,,,\***\*///((((###########((((/////\*\*\*\***//////**_,,,_**,,,,,...,/(#%&@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@%#/_/((####%%###########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#######((((///**\*\*\*\***,,,,,,_,,,,,,,,,\***\*///(((((######((((/////**\*\*\*\*\***\*/////\*\***\*\*\*\*\***\*,,... .\*#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@&#((//**/((########(##########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####((((((////\*\*\***,,,,,,,,,,,,,,,,,,,,,**\*\***////((((###((((////\***_,,,,,,,_**////**\*\*\*\***///**,,.. ._#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,.,,_//((#####(((((((((########%%%%%%%%%%%%%%%%%%%%%###########(((/////\*\*\*\***,,,,,,,,,.......,,,,,,,**\*\*\*\***////((((##((((///**_,,,,,.,,,,,_//////\*\*\***//((/**,,.../#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,.,,**//((((((//////(((((######%%%%%%%%%%%%%%%############(((((///**\*\***,,,,,,,,..............,,,,**\*\*\*\***/////((((#####(((///**,,,,......,**//////\***_//((///_,,.,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,.,**////(/////**\*////((((((####################(((((((///////\*\*\***,,,,,,,............ .....,,,,**\*\*\***/////(((((#######(((//**,,,......,,**///(//**\*//(((//**,.,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#/,,,**//////**\*\*\*\*\***///////(((((((((((((((((((((/////\***\*\*\*\***,,,,,,,,,,..... .....,,,,**\*\***///(((((((((###%####(//\*,,,,......,**///(//\***//(((///_,,,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@%(_,\***\*\*\*\***,,,,,,,**\*\***///////////////////////**\*\*\*\***,,,,,,,,,,,.......... ....,,,,,**\*///(((#############((/**,,.......,**//////\***//(((///**,\*(#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@&&%#(/**\*\***\*,,,,,,,,,,,**\*\***////**\*\*****\*\*\***\*\*\*\***,,,,,,,,,,,,............... ....,,,,**///((#############((//_,,......,,_///\*/\*\***///((((///**\*/#%&&@@@@@@@@@@@@@@@@
@@@@@@@@@&%(/**\*\*\*\*\***\*,,,,,,,,,,****\*\*******\*\*\*\*****\*\*\*\*****,,,,,,,,,,,,,,................ ...,,,**///((########(((((((//**,,.....,**//**\*\*\***\*//(((((//**\*\*\***(#&@@@@@@@@@@@@@@
@@@@@@&%#(//**\***/**\***,,,,,,,,****\*\*\*\*******\*******\*\*******,,,,,,,,,,,,,,,............... ...,,**\*///(((#####(((((((///**,,...,,,**//**\*\*\***\*//((((((//**\*,,,/#&@@@@@@@@@@@@@@
@@@@@&#/,,,\*\***///**\*,,,,,,,,****\*\*\*\*****\*\*\*\*******\*\*******,,,,,,,,,,,,,,,,............... ..,,,**/////(((((((((((((///**,,,,,,,**////\*\*\***,\*//((((((///**,,,/#&@@@@@@@@@@@@@@
@@@@@&#/,,**/////**\*,,,,,,****\*\*\*\*******\*******\*\*\*\*******,,,,,,,,,,,,,,,,,................ ...,,**_///////////////////_**,,,,,,,**/(///\*\*\*\***//((((((///**_,_/#&@@@@@@@@@@@@@@
@@&&%#(/\*\***////\***\*,,,,****\*\*\*\*******\*******\*\*\*\*******,,,,,,,,,,,,,,,,,,................ ...,,\***\*///\*\*\*\***/////////**\*,,,,,,**/((((////**///((((((///\***,\*(#&@@@@@@@@@@@@@@
@&#/,,,,\***\*//\*\*\***,,,,******\*\*******\*\*******\*\*******,,,,,,,,,,,,,,,,,,,,................ ...,,**/////**\*\*\*\*\***\*/////\***\*,,,,**//(#(((////////((((((///**\***(#&@@@@@@@@@@@@@@
@&#/,,,,\***\*/\*\*\***,,,,,****\*\*\*\*******\*\*******\*\*******,,,,,,,,,,,,,,,,,,,................. ..,,,**//////**\*\*\*\*\***\*/////**\*,,,,**//(#((/////\*////////////**\***(#&@@@@@@@@@@@@@@
@&#/,,********\*\*\*\***********\*\*\*\***********\*\***********,,,,,,,,,,,,,,,,,,,................. ...,,**////((//**\*\*\*\*\***\*/////**\*,\*\*\***/((((////**\*////////////\*\***(%&@@@@@@@@@@@@@@
@&#/,**\*////********\*\*********\*\*\*********\*\*\*\*********,,,,,,,,,,,,,,,,,,,.................. ...,,,**//((((//\*\*\***,\***\*\*\*\*\*\***,,,,,**/(((////\*\***///////////**\***(%&@@@@@@@@@@@@@@
%#(/**///////****\*\*******\*\*\*\*******\*\*******,,,,,**\*,,,,,,,,,,,,,,,,,,,,................... ...,,**//(((((//**\***,,\***\*\*\*\*\***,,,,,,\*//((///////////////////**\***/(#%&&@@@@@@@@@@@
,,**\*////////****\*\*******\*\*\*******\*\*******,,,,,,,,,,,,,,,,,,,,,,,,,,...................... ...,,**\*//(((((///\*\***,\***\*\*\*\*\***,,,,,,,\*//(((////////(((((//////**\*\*\*\***(#&@@@@@@@@@@
.,**////////****\*\*\*\*******\*******\*\*\*\*******,,,,,,,,,,,,,,,,,,,.......................... ...,,**///(((((///\*\*\*\***\***\*\*\*\***,,,,,,,**/////////////(((((/////\*\*\***,,,/#&@@@@@@@@@@
,,**////////**\*\*\*\***\*,**\*\*\*\*****\*\*\*****\*\*****,,,,,,,,,,,,,,,.......................... ....,,**///(((((////\*\***\*\*\*\***\*\***,,,,,,,,**\*////////////////////\*\*\*\***,,,/#&@@@@@@@@@@
.,**///////\*\*\*\***,,,,,,,,,**\*\*\*\***\*\*\*\***\*\*\*\***,,,,,,,,,,,,............................. ....,,**\*////////////////**\*\*\***\*,,,,,,,,,,,\***\*/////////////////\*\*\*\***,,,/#&@@@@@@@@@@
.,**//////\*\*\*\***,,,,,,,,,,**\*\*****\*\*\***\*\*\*\***,,,,,,,,,,,,,,,.,,,........................ ....,,\***\*///////////////**\*\***\*,,,,,,,,,,,,,,\*\***\*\*\*\*\***\*///////**\*\***,,,\*/(#%&@@@@@@@
.,**//////\*\***,,,,,,,,,,**\*\*\*\*****\*****\*\*****,,,,,,,,,,,,,,,,,,,,,,,,,................... .....,,,\***\*///////////////\*\*\*\***,,,,,,,,,,,,,,,,,**\*\*\*\***//////////**\*\*\***,,,..\*(%@@@@@@
.,**/////\*\***,,,,,,,,,,******\*\*******\*******\*\*******,,,,,,,,,,,,,,,,,,,,,,,,,,,,.......... .....,,,,\***\*////////////////\*\*\***,,,,,,,,,,,,,,,,,,,,**\***////////////**\*\*\***,,,/(%@@@@@@
.,**//////\***,,,,,,,,\***\*\*\*\*\*\***///////////////****\*\*****\*\*\*****\*\*****,,,,,,,,,,,,,,,,,...... ......,,,,**\***////////////////\***\*,,,,,,,,,,,,,,,,,,,,,**\*\*\***\*//////////**\***,,,/#&@@@@@@
.,**///////**\*\***\*\*\***\*\*\*\***//////////////////////////\***\*\*\*\*\*\***///////////////////\***\*,,,..... .........,,,,\*\*\***/////////////////\***\*,,,,,,,,,,,,,,,,,,,,,,,**\*\*\***\*///////**\*\***,,/#&@@@@@@
,,\*//((((((/////////////////////((((((///////(((((////////////(((((((((##########((((///**\*,,,..... .........,,,,,\*\*\*\***/////////////////**\***,,,,,,,,,,,,,.,,,,,,,,,,,**\***///////**\***,,\*/(#%&&@@
,**/(((##########((((((((((((((((((((((((//((((((((((((((((########%%%%%%&&&&&&%%%###(((//\***,,,...................,,,,,**\*\*\***///\***\*/////////\*\*\***,,,,,,,,......,,,,,,,,,,,**\***//////**\***,,,.. ,(%@@
,\*/((###%%%%%%%%%%%######((((((((((((((((/((((((((###########%%%%%%%%%%%%&&&%%%%%####(((///**\*,,,,,...............,,,,,,**\*\*\*\***\*****\*\*****/////\***\*,,,,,,,,,....,,,,,,,,,,,,,\*\***/////////**_,,.. ,(%@@
,_/((##%%%&&&&&&&&&%%%%%###########(((((///(((((((####%%%%%%%%%%%%%%%&&&%%%%%%%%####(((////\*\*\***,,,,,,,,,,,,,,...,,,,,,,****\*\*****\*****\*\*****/**\*\***,,,,,,,,,,,,,,,,,,,,,,,,,,,**\***///////**_,,. ,/%@@
,_/((##%%%%%&&&&&&&&&&&&%%%%%%%%###((//////////(((((##%%%%&&%%%%%%%%&&&%%%%%%%%####(((////**\*\*\*\*\***\*,,,,,,,,,,,,,,,,,,****\*\*\*\*******\*\*\*******\*\*******,,,**,,,,,,,,,,,\*,,,,,,,,,,,,\*\***//////**,,. ,/%@@
#(((/((###%%%&&&&&&&&&&&&&%%%%%%%%##(/////////////(((##%%%&&&&&&%&%&&&&%%%%%%%%%#####(((///\*\*\***,,,,,,,,,,,,,,,,,,,,,,********\*\*********\*\*\*********\*\*********,,,,,,,,**\*\***,,,,,,,,**\*\***//**,,.. ,/%@@
@&#(**/((##%%%&&&&&&&&&&&&&&&&&%%%##(//\***\*\*\*\*\***///((##%%&&&&&&&&&%%%%%%%&%%%%%%%%%###(((//**\*,,,,,,,,**,,,,,,,,,,,,,,********\*\*********\*\*\*\*********\*\*********,,,,,**\*\***\*\***\*\***,,,,,**\***,,,.. ,/%@@
@&#/,**/((#%&&&&&&&&&&&&&&&&&&&&%%#(/\*\***,,,,,\***\*//((##%%&&&&&&%%%%%&&&&&&&&&&&&&&%%%%##(((//\*\***,,,,,,,,,,,,,,,,,,,,,,**********\*\***********\*\*\***********\*\***********//////**\***,,,,,,,,,..... ,/%@@
@&%(/////(##%&&&&&&&&&&&&&&&&&&%%%#(/**,,,,,,,,\*\***/((##%%&&&&&%%%%%%&&&&&&&&&&&&&&&%%%####((((///**\*,,,,,,,,,,,,,,,,,,,,,******\*\*\*\*********\*\*\*********\*\*\*\*********////////////\***_,,,,,,...... ,/%@@
@@@@@&#(//(#%%%&&&&&&&&&&%&&&&%%##(/_,,,,.,,,,,\*\***/((###%%%%%%%%%%%%&&&&&&&&&&&&&%%%%###########((//**,,,,,,,,,,,,,,,,,,,,,******\*\*********\*\*\*********\*\*********///(((((((/////**\*\***,,,,,,,... ,(%@@
@@@@@&#(**/((##%%&&&&&%%%%%%%%%##(//\*,,,,.,,,,,,\*\***//((###%%%%%%%%%%%%%&&&&&&&%%%%%###(((((((##((((//\***_,,,,_**,,,,,,,,,,,,,,,**,,,,,,,,**\*\*\*\*****\*****\*\*\*\*****////(((/////////**\*\*\***///**_,,.. ,(%@@
@@@@@&#(_**//(##%%%%%%%%%%%%%%##(//\*,,,,,,,,,,,,,,,**\*//(((######%%%%%%%%%%%%%%%%####(((((((((((//////\*\***,,,,\***\*,,,,,......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\*\*\***//////////////////////((((//**,. ,(%@@
@@@@@@@&&%#(//(##%%%%%%%%%%%%%#(//**,,,,,.,,,,,,,,,,,**\*////(((######################((((////\*\***\***\*\***,,,,,,,,,,,,,,................,,,,,,,,,,,,,,,,,,,,,,,,,,,\***\*\*\*\*\***/////**\*\*\***///((///\*,. ,(%@@
@@@@@@@@@&%(///(#######%%%%%###(/**,,,,.....,,,,,,,,,,,\*\***////(((#################(((((///\***\*,,,,,,,,,,,,,,,,,,,,,...... .........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,**\*\***\*/////**\*\*\*\***//(////_,. ,(%@@
@@@@@@@@@&%(/_/((#############((/\*,,,........,,,,,,,,,,,,,**\***///(((((((((((((((((((((///\***\*,,,,...................... ....,,,,,,,,,,,,,,,,,,,,.....,,,,,,\*\***//////**\*\*\*\***///////\*,. ,(%@@
@@@@@@@@@&%(**//((((#########((/**,,,.........,,,,,,,,,,,,,**\*\*\***////(((((((((((((/////**\*\***,,,,,................... ...,,,,,,,,,,,,,,,,.........,,,**\*///////////\*\*\*\***//(///**,. .,_/(
@@@@@@@@@&%(_**//((((######(((//\*,,,,.........,,,,,,,,,,,,\*\***\*\*\*\***\*/////((((/////////**\*\*\*\***,,,,,,........... ...,,,,,,,,,,,,,,,...... ....,,**//((((((//////\*\***//(///\*,,.  
@@@@@@@@@&%(**///((((#####(((//\***,,,,,......,,,,,,,,\*\*\*\***\***\*\***,**\***//////////////////**\*\*\***,,,,,,........ ...,,,,,,,,,,,,,...... ...,**//(((((((((/////**//////**,..  
@@@@@@&%%#(/**//(((((##(((((///**\***,,,,......,,,,,,****\*\*****\*\*****\*\*****//////////////////**\*\***,,,,,........ ...,,,,,,,,,........ ...,**///(((((((((//////////**,,..  
@@@@@&#/,,,**\*//(((((((((((///**\*\*\***\*,,,........,,,,****\*\*******\*\*****\*\*\*\*****/////////////**\***,,,,,,....... ....,,,,......... ...,**///////((((///////\*\*\***,..  
@@@@@&#/,,,**\*//((((((((/////**\*\*\*\*\***\*,,,.........,,\***\*/////////**\*\***\*\***\*\*\*\***/////\***\*\*\*\***,,,,,,,,,,...... ......... ..,**/////////((//////\*\***,,,.. .,/((
@@@@@&%(/**\***//////////////\***\*\*\*\*\*\***,,,,.........,,**\*///((((/////****\*\*******\*******\*\*******,,,,,,,,,,,,..... .. ..,**//((///////////\*\*\***,,,... ..,\*(%@@
@@@@@@@@&%#(**\*///////////////////\*\*\*\***,,,,.........,,,**\*//(((((((//\*\*\*\***\*\*\***\*\*\*\***,,,,,\***\*\*\*\*\*\*\***,,,,,,..... .,\*///((((((((/////\***_,,,... ,/#&&@@@@
@@@@@@@@@&%(_**//////////////////////**\*\***,,,,,,,,,,,,,,**\*/((((##(((///\*\***\*\*\***\*\***,,,,,**\*\***\***\*\***,,,,,,,..... ..,,_///((((((/////\*\*\*\*,,,... .,_/(%&@@@@@@
@@@@@@@@@&%(**\*////////////((((((((/////**\*\*****\*\*****\*\*****/((###%##((////\***\*\*\*\*\*\*\***,**\*\*\*\***\***\*\*\*\***,,,,,,,..... ..,**////////////\*\***,,,... .\*(%@@@@@@@@@@
@@@@@@@@@&%(**\*///////////(((((###(((((////((((((######((((((####%%%###((///////\*\***\***\*\***,\***\*\*\*\*\***,,,,,,,,,,..... ...,,**\*\***\*\***\*\***,,,,.. .,\*(#%&@@@@@@@@@@@
%&&@@@@@@&%(**\*/////////(((((#########(((((###%%%%%%%%%%%######%%%%%%###(((/////////**\*\***\*,,,,,,**\*,,,,,,,,,,,,..... ...,,,,,,,,,,,,**,,,,... ._(&@@@@@@@@@@@@@@
,/#&@@@@@&#(_,**///////((((((####%%##########%%%%%%%%%%%%%%%#############(((((///////\*\*\*\***,,,,,,,,,,,,,,,,,,,,..... ..........,,,,**,,,... ._(&@@@@@@@@@@@@@@
(#%&@@@@@&#(_,**//////(((((((((#####%%%%%%%%%%%%%%%%##########(((########((((((/////\*\***\*\***\*,,,,,,,,,,,,,,,,,...... .... ...,,,,**,,,,.. ._(&@@@@@@@@@@@@@@
@@@@@@@@@&#(_,\***////(((((((((((((###%%%%&&&&%%%%####((((((((//((((((((####((((////\*\***\*\*\*\***\*,,,,,,,,,,,,,,,,....... ....,,,**_,,,.. ._(&@@@@@@@@@@@@@@
@@@@@@@@@&#/,,\***/////(((((((((((/(((###%%%%%%%%###(((///////////////((((((((((//////\*\***\*\*\***\*,,,,,,,,,,,,,,,........ ...,,,,,,,,... .\*(&@@@@@@@@@@@@@@
@@@@@@@@@&#/,,,**/////((((((((/////((((###%%%%%##(((/////\***\*\*\*\*\*\***//////(((((////////\***\*\*\*\***,,,,,,,,,,,,,,,........ . ...,,,,,,.... ._(&@@@@@@@@@@@@@@
@@@@@@@@@&#/,,,\*\*////((((((//////_///(((########((///**\*\*\*\***\*\*\***\*\*\*\***/////////////////**\*\*\*\***,,,,,,,,,,,,,,,........ ...... ........... \*(&@@@@@@@@@@@@@@
@@@@@@@@@&#/,,,**////(((((//////////(((#########((///**\*\***\*,,,,,,,**\*\***/////////////////**\*\*\***,,,,,,,,,,,,,,,........ .. ....,,.. ........ ,\_/(#&@@@@@@@@@@@@@@@
&@@@@@@@@&#/,,,**///((((///////////(((###%%%%####(((//\*\***,,,,,,,,,**\*\*\*\***///////////////**\*\*\*\***,,,,,,,,,,,,,,,....... .... ....,,,,,.. . .\_#&@@@@@@@@@@@@@@@@@@
\*(#&@@@@@&#/,,,**\*//(((//////////(((###%%%%%%%%%####((///**\*\*\*\***\*****\*\*****///////////////**\*\*\***,,,,,,,,,,,,,,........ ..... .... .......,.. ._(&@@@@@@@@@@@@@@@@@@
._/(#%&@@@%#(///**///((///////((((##%%%%%%%%%%%%%%%####((((///////**\*\*\*\*\***\*/////////////////**\*\***,,,,,,,,,,,,,,........ ......... ...... ........ ._#&@@@@@@@@@@@@@@@@@@
.,,,,_(%@@@@@&%(/**////////((((###%%%&&&&&&%%%%%%%%%%%%%%%####(((((///\*\*\*\***//////////////////**\*\*\*\***,,,,,,,,,,,,.......... .................. ._#&@@@@@@@@@@@@@@@@@@
._/(#%&@@@@@@@%(/**///////(((####%%%%&&&&%%&&&&&&&&&&&&&&%%%%%%%####((((///////////////////////**\*\*\*\*\*\***,,,,,,,,,,............................... ._#&@@@@@@@@@@@@@@@@@@
_(#&@@@@@@@@@@%(\***\*/////(((###%%%%%&&&%%%%%&&&&&&&&&&&&&&&&&&&%%%%%#####((((///////////////////**\*\*\*\***\*,,,,,,,,,,,,............................. ._#&@@@@@@@@@@@@@@@@@@
&&@@@@@@@@@@@&%(_,**/////(((##%%%&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%######(((((((((/////////**\*\*\*\*\***,,,,,,,,,,,,.......................... ._#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&%(_,,**///(((###%%%&%%%%%%####%%%%%%%%%############%%%%%%%%%##########((((////////////**\*\*\*\***\*,,,,,,,,,,,,....................... ._#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@&#(_,,**///((####%%%%%%%%###################((((((((((((((((######%#####(((/////////////**\*\*\*\*\***,,,,,,,,,,,,..................... .\*#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@&&%#(/**//((###%################%%#%########(((((///////////((((####%%##((//\*\***///////\***\*\*\*\***,,,,,,,,,,,,,,.................... .\*#&@@@@@@@@@@@@@@@@@@
&&&&&&&&&&&@@@@@@@%(/**/(((##%#############%%%%%%%%%%%#####((((//////\*\***////((###%%##((//**\***///////**\*\*\*\***,,,,,,,,,,,,,,,,.................... .\*#&@@@@@@@@@@@@@@@@@@ \***\*\*\*\***/#%@@@@@@%(\*,**//((#####(#####%%%%%%%%%%%%%%%%%#####((((//////\*\*\***///((#####(((//**\*\*\***/////**\*\*\***,,,,,,,,,,,,,,,,.................... ..... ./#&@@@@@@@@@@@@@@@@@@
(((((((((#%&@@@@@@&%#((//\*/((###((######%%%%%%%%%%%%%%%%%%#####((((/////**\*\***//(((##((((///\***\*\*\*\***////**\***,,,,,,,,,......................... ........ ...,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%#/\*//(##(((((#####%%%%%%%%%%%%%%%%%%#####((((///\***\*\*\*\***///(((((((///\***\*\*\*\***///**\***,,,,,,......................... ......... ...,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@&&%##((((((((((((#######################((((////\***\*\*\*\*\*\*\***///(((((///**\*\*\*\***///**\***,,,,,..................... ......... ..,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@&#(///(((((((((((((((((((((((((((((((((//////**\***,,,,,\***\*//////////**\*\*\***\*/**\***,,,,,,............ ...... .......... ...,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@&#/**//((((((((((((/////////////////////////\*\*\*\***,,,,,,,,,**\*/////////\***\*\*\*\*\*\*\***,,,,,......... ...... ....,,..... ...,/#&@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&%#(((///(((((((((((((((((//////////////\***\*\*\*\*\***,,,,,,,,,\***\*////////**\*\*\*\*\***\*,,,,,........ ....... .....,,... ...,,_/(#%&@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#(_//((((((((((((((((((((((/////////\*\***\*\*\***\*,,,,,,,,,,,**/////////**\*\*\*\***,,,,,,......... ..................,,..... ..,,_,,,_/#%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#(**//((((((((((((##(((((((((((///////////\*\*\***,,,,,,,,,**\*//////////**\*\***\*,,,,,,........... ...........,,,,,,,..... ..,,**,,\*\***/(%&@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#/,**/(((((###############(((((((((/////////\*\***,,,,,,,\***\*//////////**\*\*\***,,,,,,.............. .......,,,,,,,,,,,.... ..,,\***_,,,,,_/#%%%%%%&@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#/,,\*//(((###################((((((((((((////\*\*\*\***,,**\*\***//////////////\***\*,,,,,,....................,,,,,,,,,,,..... ..,,\*\*\***,,,.,,,,,,.._(%@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%#((/_//((########################(((((((/////******\*\*******\*\*\*******\*\*******,,,,,,...............,,,,,,,,,,,,...... ..,,,\***_,,,.........,_/(#
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%#/**//((#######%%%%%%%%###########((((((//////\***\*\*\*\*\***,,,,,,,,,,,,,,,,,,,,,,,,,..........,,,,,,\*,,,,,,..... ..,,,,**\*,,,..............
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#(\*\*\*\***//(((#######%%%%%%################((((((////**\***,,,,,,.....,,,,,,,,,,,,,,,,,.....,,,,**\*\*\***,,,.... ..,,,,,**,,,..............
@@@@@@@@@@@@@@&&%%%%%%%%%%%%%%#(_,,_**///(((((#####%%%%%####################((((///\***\*,,,,,.................,,,,,,,,,,,,**\*\*\*\*\***\*,,... ..,,,,,**,,,,.............
@@@@@@@@@@@@@&#(\*,,,,,,,,,,\*\*\*\***/////((((((((####%%%%%###((((((((###%%%%####((((///**\*,,,,.....................,,,,\*\***///////**\*,... ..,,,,\*\***,,,,,...........
((((((((((((((//\*\*\*\***\***\*\***//////(((((((((#####%%%%%%###((//////(((##########((((////**\*,,,,,..............,,,,,**///////**\*,,,... ..,,,\*\*\***,,,,,,...,,,....
,,,,,**\*\***\*\***\*\***////////////((((((((((((######%%%%%%%##((//**\*////((((#########(((((///\*\*\***,,,,,,,,,,,,,,,\***_///////_**,,.... ..,,,,**\***,,,,,,,,,,,,,,,
**////////////////////////(((((((((((((((((########%%%%%###((/\*\*\*\***/////((((((#########((((((////////////////////////**,,,..... ...,,,\*\***,,,,,,.,.,,,,...
///////////////////////(((((((((((((((((((((#######%%%%%%%##((/**\*\*\*\***////((((############((((((((((((/////////((((//\*\*,,..
