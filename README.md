# Zappy Application


There are 2 ways to run this Zappy APP:

FirstOne:
----------
1-  download { mongodb , node , angular/cli }
2-  clone the project
3- run mongo on your Machine {path: "C:\Program Files\MongoDB\Server\version folder\bin"}
4-  in Directory Zappy/Server :
      a)run npm install command to install require dependencies
      b)use "npm start"command to run the server on port 3100
5- in Directory Zappy/ZApp :
      a)run npm install command to install require dependencies for client side
      b)use "npm start"command to run the client on port 4200
===========================================================================================================================================
SecondOne:
----------
using Docker file : you should ensure docker is installed on you machine


build docker-compose File using the below commands:
                    1) docker-compose build
                    2) docker-compose up


To download Compose, run the below set of commands.
                  1) sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
                  2) sudo chmod +x /usr/local/bin/docker-compose
===========================================================================================================================================
Accounts that connected to the app
===================================
Slack Account :
        1) ZAPPY_APP => Listen on "go" word on team members conversation
        2)  if you create a new channel , you have to add zappy as a member in the channel to be able to read members messages
        3) Sign in to _FictionFone : {
                                    email : task.hammerhead@gmail.com,
                                    password : task15963.
                                   }


Twitter Account :
      1) ZAPPY_APP -> fetch tweets form FictionFone account on Twitter
      2) Sign in to _FictionFone : {
                                      userName:  @_FictionFone,
                                      password: T15963.
                                   }
==================================================================================================================================