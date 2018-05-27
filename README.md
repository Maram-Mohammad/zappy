# Zappy Application


There are 2 ways to run this Zappy APP:

FirstOne:
----------
download { mongodb , node , angular/cli }
clone the project
run mongo on your Machine {path: "C:\Program Files\MongoDB\Server\version folder\bin"}
in Directory Zappy/Server :
            run npm install command to install require dependencies
            use "npm start"command to run the server on port 3100
in Directory Zappy/ZApp :
      run npm install command to install require dependencies for client side
      use "npm start"command to run the client on port 4200
===========================================================================================================================================
SecondOne:
----------
using Docker file : you should ensure docker is installed on you machine


build docker-compose File using the below commands:{ docker-compose build, docker-compose up}

To download Compose, run the below set of commands.
                  sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
                  sudo chmod +x /usr/local/bin/docker-compose
===========================================================================================================================================
Accounts that connected to the app
===================================
Slack Account :
        ZAPPY_APP => Listen on "go" word on team members conversation
        if you create a new channel , you have to add zappy as a member in the channel to be able to read members messages
        Sign in to _FictionFone : {
                                    email : task.hammerhead@gmail.com,
                                    password : task15963.
                                   }


Twitter Account :
      ZAPPY_APP -> fetch tweets form FictionFone account on Twitter
      Sign in to _FictionFone : {
                                      userName:  @_FictionFone,
                                      password: T15963.
                                   }
