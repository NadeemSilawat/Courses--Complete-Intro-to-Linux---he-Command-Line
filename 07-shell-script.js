        //-------Writing Script--------//

// :~$ ls

// :~$ vi genfile.sh
            /***
             * mkdir -p ~/temp
                cd ~/temp
                touch file{1..10}.txt
                echo done

             * ***/
// :~$ source genfile.sh
    // done

// :~/temp$ ls

// :~/temp$ cd ..

// :~$ .genfile.sh  
// done

// :~/temp$ cd ..

// :~$ bash gen_file.sh
//done


                    //---------Hashbang-----------//

// :~$ vi genfile.sh
    /**
     * #!/bin/bash

        mkdir -p ~/temp
        cd ~/temp
        touch file{1..10}.txt
        echo done

     * **/


// :~$ chmod +x gen_files                    

// :~$ ls -lsah

// :~$ ./genfile        -----> done

//----------------------------


// :~$ which node                      --> /usr/local/bin/node

// :~$  vi node_test
        /**
         *#! /snap/bin/node
            console.log('this is running from node.js')
         *  **/

// :~$ chmod +x node_test

// :~$ ./node_test               ----> this is running from node.js


                //----------Path & Variable----------------//

// :~$ ls /user/local/sbin
// :~$ ls /user/local/games
// :~$ ls /snap/bin

// :~$ mkdir my_bin

// :~$ m node_test my_bin

// :~$ mv genfile my_bin

// :~$ cd my_bin/

// :~/my_bin$ ls

// :~/my_bin$ cd ..

// :~$ vi .bashrc   
    // # added by me for testing purpose
    // PATH=$PATH:/home/mohit/my_bin

 







            







          