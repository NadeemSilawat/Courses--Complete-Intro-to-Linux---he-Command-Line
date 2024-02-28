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


// :~$ cd folder1/

// :~/folder1$ cd..

// :~$ mkdir folder2

// :~$ cd folder2

// :~/folder2$ touch file{1,2,3,4}.txt

// :~/folder2$ ls
    /**Output :
     * file1.txt file2.txt file3.txt file4.txt 
     */

// :~/folder2$ touch file-{mn,wa,mt,ut}.txt

// :~/folder2$ ls

/**
 * Output:
 *  file-mn.txt  file-ut.txt  file1.txt  file3.txt
 * file-mt.txt  file-wa.txt  file2.txt  file4.txt
 */


// :~$ touch file10.txt

// :~$ ls file-*    //Showing Wildcard

// :~$ touch file.txt

// :~$ ls 
    /**file-mn.txt  file-ut.txt  file.tat  file1.txt   file2.txt  file4.txt
file-mt.txt  file-wa.txt  file.txt  file10.txt  file3.txt*/

//:~$ touch file*.txt

//:~$ touch file?.txt

//:~$  ls file*.txt

    /*file-mn.txt  file-ut.txt  file.txt   file10.txt  file3.txt
        file-mt.txt  file-wa.txt  file1.txt  file2.txt   file4.txt
    */

//:~$ ls file?.txt
    
/* file1.txt  file2.txt  file3.txt  file4.txt */

//:~$ folder2 cd.. 

//:~$ mkdir folder3 

//:~$ cd folder3

//:~$ touch file{1..30}.txt

//:~$ ls

//:~$ touch file{a..z}.txt

//:~$ ls
        /***
         * file1.txt   file17.txt  file24.txt  file4.txt  filec.txt  filek.txt  files.txt
            file10.txt  file18.txt  file25.txt  file5.txt  filed.txt  filel.txt  filet.txt
            file11.txt  file19.txt  file26.txt  file6.txt  filee.txt  filem.txt  fileu.txt
            file12.txt  file2.txt   file27.txt  file7.txt  filef.txt  filen.txt  filev.txt
            file13.txt  file20.txt  file28.txt  file8.txt  fileg.txt  fileo.txt  filew.txt
            file14.txt  file21.txt  file29.txt  file9.txt  fileh.txt  filep.txt  filex.txt
            file15.txt  file22.txt  file3.txt   filea.txt  filei.txt  fileq.txt  filey.txt
            file16.txt  file23.txt  file30.txt  fileb.txt  filej.txt  filer.txt  filez.txt

         */

//:~$ echo {a..z}

// a b c d e f g h i j k l m n o p q r s t u v w x y z

//:~$ echo {1..100..10}
// 1 11 21 31 41 51 61 71 81 91

//:~$ echo {0..100..10}
// 0 10 20 30 40 50 60 70 80 90 100

//:~$ echo {A..Z..10}
// A K U

//:~$ echo {a..Z..10}
//a

//:~$ echo {A..z..10}
// A K U _ i s


//:~$ echo {a..z}{1..5}
/*a1 a2 a3 a4 a5 b1 b2 b3 b4 b5 
c1 c2 c3 c4 c5 d1 d2 d3 d4 d5 e1 e2 e3 e4 e5 f1 f2 f3 f4 f5 g1 g2 g3 g4 g5 h1 h2 h3 h4 h5 i1 i2 i3 i4 i5 j1 j2 j3 j4 j5 k1 k2 k3 k4 k5 l1 l2 l3 l4 l5 m1 m2 m3 m4 m5 n1 n2 n3 n4 n5 o1 o2 o3 o4 o5 p1 p2 p3 p4 p5 q1 q2 q3 q4 q5 r1 r2 r3 r4 r5 s1 s2 s3 s4 s5 t1 t2 t3 t4 t5 u1 u2 u3 u4 u5 v1 v2 v3 v4 v5
w1 w2 w3 w4 w5 x1 x2 x3 
 x4 x5 y1 y2 y3 y4 y5 z1 z2 z3 z4 z5*/


//:~$ echo {a..z}{1..5}{1..2}

//:~$ clear

//  =--------------->

//:~$ touch file\f?.txt

//:~$ ls        //listing all the files in the directory


//--------Output Streams-----------//


//:~$ cd..

//:~$ mkdir streams     //create a directory

//:~$ cd streams

//:~$ ls

//:~$ echo "Hello World"

//:~$ echo  "Hello World" 1> hello.txt    

//:~$ cat hello.txt    

//:~$ echo "Hello World"    //  Output :: Hello World

//:~$ cat hello.txt 1> another-file.txt

//:~$ ls 

//:~$ cat another-file.txt

//:~$ cat hello.txt 1>> another-file.txt   //appending to existing file

//:~$  cat another-file.txt
/* Hello World
    Hello World
    */

//:~$  cat hello.txt 1> another-file.txt

//:~$  cat another-file.txt

/*Hello World* */

//:~$ ls -lsah 1> ls.txt

//:~$ ls
    /*another-file.txt  
        hello.txt   
        ls.txt*/

//:~$ cat ls.txt

//:~$ ls -lsah 2> ls-error.txt

//:~$ ls -lsah > ls.txt

//:~$ ls -lsah >> ls.txt

//:~$ ls -lsah 2> /dev/null

//:~$ cat some-file.txt 1> /dev/null

//:~$ cat some-file.txt 2> /dev/null






 


//--------Input Streams----------//


//:~$ grep "ls-error.txt" < ls.txt
    /**  Output:
     * 0 -rw-r--r-- 1 dell 197121  0 Feb 27 19:47 ls-error.txt
     0 -rw-r--r-- 1 dell 197121   0 Feb 27 19:47 ls-error.txt

    */      //the contents of the file to standard input(stdin)
//-----------
    // Using stdin and stdout

//:~$ grep "ls-error.txt" < ls.txt 1> grep.txt 2> /dev/null   

//:~$ cat grep.txt
    /**Output:
     * 0 -rw-r--r-- 1 dell 197121  0 Feb 27 19:47 ls-error.txt
        0 -rw-r--r-- 1 dell 197121   0 Feb 27 19:47 ls-error.txt
     * /

//:~$ grep "ls-error.txt" < ls.txt

     /**Output:
     * 0 -rw-r--r-- 1 dell 197121  0 Feb 27 19:47 ls-error.txt
        0 -rw-r--r-- 1 dell 197121   0 Feb 27 19:47 ls-error.txt
         * /



    //---Pipes----//


//:~$ cat ls.txt | grep "ls-error.txt"   //Concatinate One Prg. to Another

//:~$ echo hello >> ls.txt

//:~$ cat ls.txt
    //hello



//:~$ ps aux    //display information about all running processes on the system

//:~$ ps aux | grep "ps aux "

//:~$ yes > /dev/null &     //[1] 1188

//:~$ ps aux | grep "yes"

//:~$ kill -9 1126









 


 






















