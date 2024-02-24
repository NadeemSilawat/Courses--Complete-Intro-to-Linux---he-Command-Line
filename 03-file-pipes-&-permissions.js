// --------Reading Files--------- //

            //-------LESS-------

// :~$ less textfile.txt

// :~$ ls 
// textfile.txt  test1.c   test2.c   test3.cpp

// :~$  vi textfile.txt

// :~$ less 

// :~$ less textfile.txt

// :~$ more textfile.txt


//-------------man-------------------

// :~$ man less     // --->manual for less.

// :~$ less --help      //-->summary of less Commmand

// :~$ man python3

//-------------cat-------------------


// :~$ cat textfile.txt              //---> cat does is read the entire file and output it

//-------------head/tail-------------------

// :~$ tail textfile.txt             

// :~$ head textfile.txt        

// :~$ tail -n 3 textfile.txt    //--->  just see three lines

// :~$ tail -f textfile.txt   

// :~$ ^c  //--> that 's out of

// open the new terminal

// :~$ echo hi  >> textfile.txt       // --> add something to the end of the file

// :~$ echo hi there >> textfile.txt

// :~$ ^c

// :~$ clear 

//-----------------------------
    //primary Directory

    // /home/username             // home directory

// :~$ ls 

// :~$ pwd

// :~$ mkdir my-new-folder 

// :~$ ls
 
// :~$ cd my-new-folder/

// :~$ /my-new-folder ls

// :~$  pwd

// :~$ mkdir -p hi/my/name/is/brian

// :~$ ls
            //Home hy my-new-folder snap textfile.txt
// :~$ cd hi/

// :~/hi$ ls 
    //my

// :~/hi$ cd my/name/is/brian/

// :~/hi/my/name/is/brian$ ls

// :~/hi/my/name/is/brian$ pwd


//-----------Creating & Moving Files---------------------//

// Create a new file called "textfile2.txt" in the "/home/username


// :~$ mkdir --help

// :~$ cd ~

// :~$ ls

// :~$ ls -lash

// :~$ touch my-new-file.txt   //change modify time

// :~$ ls -lash

// :~$ touch my-new-file.txt

// :~$ echo "Hello World!" >

//-------------------

        //rm

// :~$ rm my-new-file.txt      // remove the one file

// :~$ ls

// :~$ rm -r my-new-file.txt

// :~$  rm -rf /.           // Never run this command:This is a famous command to run that will 
                            // start deleting your whole system including the critical system files. 
    // trash-cli

// :~$ rash-put file.txt
//-------------------

// :~$ cp source-file.txt destination-file.txt

// :~$ cp textfile.txt destination-file.txt

// :~$ ls
        /*Home   destination-file.txt  hi  snap textfile.txt */

// cp -R source-directory destination-directory

// :~$ cp -R hi bye   

// :~$ ls

// :~$ cd bye

// :~/bye$ ls

/* Home  there  you */

// :~/bye$ cd there

// :~/bye/there$ ls

/* Home  me  you */



//-------------------

//:~$ mv                //(move) the file

// :~$ touch file.txt   //then

// :~$ mv file.txt new-name.txt

// :~$ ls

//-------------------
        //tar           //Zip File is initialy Compress

        
// :~$ mkdir folder1

// :~$ cd folder1/       //Go to that Directory

// :~/folder1$ touch file1.txt file2.txt file3.txt file4.txt

// :~/folder1$ ls

// :~/folder1$ cd..

// :~$ ls

// :~$ tar -cf archive.tar textfile.txt folder1

// :~$ ls -lash

// :~$ tar -cf archive.tar.gz textfile.txt folder1

// :~$ mkdir destination-folder

// :~$tar -xzf archive.tar.gz -C destination-folder/


    //------Wildcards & Replacement----------//


// :~$ 









