

        // --------Environment--------- //

// :~$ printenv             //long list of environmental variables.                             

// :~$ echo $USER

// :~$  USER=brian         //set the value of an environment variable.

// :~$ echo Hello My Name is  $USER    //prints "Hello My Name is brian"

// :~$ echo $GREETING $USER, How are you ?   //prints "Hello My Name is brian, How are you ?"

// :~$ GREETING="Hello"         

// :~$ echo $GREETING $USER, How are you ?     // prints "Hello Brian, How are

// :~$ sudo vi /etc/environment 
            /*Exit vim :  type ':qa!'[ENTER]**/

// :~$ echo $TEST_THINK

// :~$ sudo vi /etc/environment 

// :~$ exit

// :~$ echo $TEST_THINK
            //blah blah

// :~$ su brian
    /*Password:*/

// $ echo $TEST_THINK           //blah blah

// $ vi ~/.bash_rc.        /*add export TEST_THINK=blah blah [ENTER], then type ':wq' to save and quit * /

// $ exit

// :~$ vi ~/.bashrc               //open up bash run

 // :~$ echo $ANOTHER_VARIABLE

 // :~$ vi ~/.bashrc
 
 // :~$ source ~/.bashrc                 //reload .bashrc file so that changes take effect immediately.

 // :~$ echo $ANOTHER_VARIABLE
                //something cool

// :~$ vi .bash_profile
    /*Add the following line at the end of the file:*
    export PATH=$PATH:/usr/local/bin */





                //-------Processes----------//

// :~$ ps                           // shows all processes with process name in them.

// :~$ sleep 1

// :~$ sleep 2

// :~$ sleep 10 &                   //runs sleep command as a background process, returns its PID (process ID)

// :~$ ps

// :~$ ps

// :~$ sleep 100 &                  

// :~$ ps aux        

// :~$ ps

// :~$ kill -SIGKILL 1783           

// :~$ ps aux 

// :~$ ps aux | less

// :~$ ps aux | grep "ps"

// :~$ jobs         

// :~$ bg 1                 

// :~$  



// :~$ kill -9 <sleep-process-id>      //kills a specific process, identified by






                     

