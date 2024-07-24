# Birla My Home Mobile App

Ionic 6 | Angular 15 | Capacitor

Birla Estate My Home is the official app for Birla Estates Homeowners to keep a track of all details of their home.

## Ionic commands

 To Run App In Browser := ionic serve
 To Sync Updated Code In Android And IOS := ionic cap sync
 To Run App In Android Device := ionic capacitor run android
 To Run App In IOS Device := ionic capacitor run ios


 To Create Component := ionic generate component < name >
 To Create Page := ionic generate page < name >
 To Create Module := ionic generate module < name >

 # Build guidelines
Update the build versionCode before deploying app, from android/app/build.gradle and build version from ios plist
Clean gradle before building apk. In android folder enter this command >> .\gradlew clean
To build project use this command in the root folder >> ionic build 
Sync and update the android and ios changes with  >> ionic cap sync
Create unsigned build from android studio/xcode for debug apk
Sign apk using jar signer command,
jar sign command : jarsigner -keystore BirlaKey app-release-birla-myhome-v7.aab birla2022
jar sign password : Birla2022

Create a signed build from android studio/xcode for bundled file and deploy it over playstore and appstore


# Testing Account 
Customer id - 602417
OTP - 123456

# Playstore credentials
Email - birlaestates2018@gmail.com
password - Birl@2016

# IOS appstore credentials :
Email - apple@birlaestates.com
Password - B!rl@*123*&

# Issues and their fixes
- If android resource linking fails try out following steps,

1. run "npm install -g cordova-res"
2. next "cordova-res --skip-config --copy"
3. If issues are related to app icon create new app icon from android studio => right click on "app" folder => click "New" => "Image assets" => configure new app icon with name "appico" (select icon from existing resource folder).
4. sync app and rerun 


- If android colors.xml file not found create file in android > app > src > main > res > values > colors.xml. write below code in it,

<resources>
    <color name="purple_200">#840c6f</color>
    <!-- Add other color definitions here -->
</resources>