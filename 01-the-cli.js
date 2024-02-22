// ========== Anatomy of the command line Interface ==========// 

// pwd

// pwd  //Path

// pwd--help

// clear

// // ------------------------

// cd / home

// pwd

// cd / home / nadeem

// cd..

// pwd

// cd / home / nadeem

// cd../..

// pwd

// pwd

// pwd 

// cd home

// cd nadeem

// cd..

// cd../ nadeem

// cd../ nadeem /../ nadeem

// cd../ nadeem /../ nadeem

/*********************************************/
/*            CLI Directories & Arguments               */


// ls

// cd .. 
// pwd

// ls


// pwd

// ls home

// ls --help

// ---- Usage: ls [OPTION]... [FILE]...
// 
// clear



/************************************/
// echo

// echo hy  //"hy" is a parameter

//echo Welcome to frontend master

// echo "Welcome to frontend master"


// which ls 

//cd /bin /ls 

//cd /bin       //-bin directories
//ls

//cd /home 
//pwd           //--/home

//clear

/****************************************/

/*            Flags               */

// pwd --help

// clear

// ---------

// echo --help

// man echo

// echo --help

// clear


//----------------

// /home$ ls 

// /home$ ls -l

// /home$ ls -l

// /home$ ls -l -a

// /home$ touch .hidden-file

// /home$ cd nadeem/

// /home$ touch .hidden-file

// /home$ ls -l -a

// /home$ ls -l

// /home$ clear


//  -------------\\

// /home$ ls -h

// /home$ ls -- help

// /home$ ls -- all

// /home$ ls -- all -a

// /home$ ls -a

// /home$ ls -l -a

// /home$ ls -al

// /home$ ls -la

// /home$ ls --all -l

// clear

// -----------------------

// :~$ ls

// :~$ ls --ignore=snap

// :~$ ls --ignore snape
// :~$ ls --ignore snap

// :~$ ls --ignore=snap --ignore=Home 

// :~$ clear

// ----------------------------

// :~$ ls -lsah

// :~$ ls --help

// :~$ clear 

// --------------------


// :~$ ls --ignore snap

// :~$ ls -I snap

// :~$ ls --help 

// :~$ clear

// --------------------


// :~$ pwd 

// :~$ ls snap/

// :~$ ls -lsah snap

// :~$ ls snap -lash 

// :~$ ls -lash snap

// :~$ clear




/****************************************/

/*            CLI Search               */


// :~$ pwd

// :~$ cd/

// /$ ls

// /$ cd ~ 

// /$ pwd   //Home Directories

// :~$ cd ~/snap

// :~/snap$ pwd
/*
     Output:
        /home/username/snap
        */

// :~/snap$ cd ~

// :~$ cd..

// :~/home$ cd..

// :~$ cd ~

// :~$ cd snap/

// :~/snap$ cd..

// :~$ cd /

// :~$ pwd

//  /

// :~$ cd / \

// :~$ clear

//---------------------

// :/$   ls -lsah snap

// :/$   clear


// ------------------------------



// :/$   cd home/

// :/$   cd ..

// :/$   ls

// :/$   cd home/nadeem/

// :/$   cd home/nadeem/snap/multipass-sshfs/

// :/$   ls

// :/$   py

// :/$   pyth

// :/$   git describe


// ---- if you hit Ctrl+R    ---> ls -lsah snap

// ---- if you hit Ctrl+R    ---> ls snap/


/****************************************/

/*            Bash History               */

// :/$  tail ~/.bash_history       //--history

// :/$ pwd

// :/$ ls -a

// :/$ !! 

// :/$ pwd

//---------------

// :/$ ls -lsah

// :/$  

// :/$ pwd

//---------------


// :/$   ls

// :/$   Ctrt+L   -----> it also does clear.     // ctrl+N -> No idea



// -------> Copy and paste on the command line <-------- //


// ----> Ctrl+Shift+C   $   Ctrl+Shift+V. <---- //



/************************************************/

/*           CLI Shortcuts           */

//   Shortcuts

        //  CTRL + A     // takes you to the beginning of the line
       
        //  CTRL + E     // takes you to the end of the line
       
        //  CTRL + K     // "yank" everything after the cursor
       
        //  CTRL + U     // "yank" everything before the cursor
       
        //  CTRL + Y     // "paste"(paste in quotes because it doesn't actually go into your system clipboard) everything you yanked
       
        //  CTRL + L     // clear the screen
       
        //  CTRL + R     // reverse search through history


/************************************************/
        
        /*           SIGNALS           */

// - Ctrl + C - SIGINT

/* 
 So go type yes into your terminal, You'll find yourself with an infinite wall of 
          ever-spamming y s in front of you. To stop it, hit Ctrl + C and it'll stop immediately. */


// :/$   tail -f .bash_history


// :/$   yes

// - Ctrl + C 

// - Ctrl + D



// PRESS -> Ctrl + D - SIGQUIT


// ---------------------------


// :/$   ps aux

// :/$   ps aux | grep yes

// :/$   clear 

// ---------------------------


// :/$   yes > /dev/null &

// :/$   pas aux | grep yes

// :/$   kill -9 1465

// :/$   kill -l

// :/$   kill -SIGKILL 1467

// :/$   clear

// ----------------------------

// :/$   kill -l








        

        

        

        

        

        