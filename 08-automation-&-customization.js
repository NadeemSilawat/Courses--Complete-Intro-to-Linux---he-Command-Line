
            //---------cron------------//
            
//A daemon, which is a program that runs continuously in the background.


// cron      ------> Linux has a feature called cron that will run tasks on a schedule.            

//:~$ cd /etc/cron.

//:~$ ls /etc/cron.hourly/              ------>  # This is where the hourly jobs are kept.

//:~$ ls/etc/cron.monthly/               ------->   # These are the monthly jobs, usually used for things like backups

//:~$ ls/etc/cron.daily/                   ------->   # These are the daily jobs, usually used for things like cleaning up

//:~$ cd my_bin/

//:~/my_bin$ vi make_new_file   

//:~/my_bin$ chmod +x make_new_file

//:~/my_bin$ ls -lsah

//:~/my_bin$ make_new_file  
 
//:~/my_bin$ ls

//:~$ cd temp-files/

//:~/temp-files$ ls

//:~/temp-files$ crontab -e                 ------------>  run this as well as root.


/**
 * * * * * <the command you want to run>

The above five stars would run every minute. Each of those stars represents a frequency. They represent as follows:

<minutes> <hours> <day of the month> <month> <day of the week>
 * ***/


//:~/temp-files$ ls 
    //files-1593631795.txt

//:~/temp-files$ crontab -u ubuntu -e 



                                //------Customize your shell----------//

//:~$ echo $PS1
//  \[\033]0;$TITLEPREFIX:$PWD\007\]\n\[\033[32m\]\u@\h \[\033[35m\]$MSYSTEM \[\033[33m\]\w\[\033[36m\]`__git_ps1`\[\033[0m\]\n$
  
//:~$ PS1="Hello There"
    //  Hello There

//:~$ curl https://raw.githubusercontent.com/riobard/bash-powerline/master/bash-powerline.sh > ~/.bash-powerline.sh

//:~$ cat .bash_powerline

//:~$ vi .bashrc

//:~$ cd ..

//:~/home$ cd ubantu/

//:~$ ls

//:~$  mkdir my-git-project

//:~$ cd my-git-project/

//:~/my-git-project $ git init

//:~/my-git-project master $ git checkout -b another-project

//:~/my-git-project another-project $ touch file1.txt




                        //----------Colors & Awesome Bash--------------//

//:~/my-git-project another-project $ cd .. 

//:~$ /bin/echo

//:~$ /bin/echo -e "hi"
    // hi

//:~$ echo -e "this is you make color \e[32mgreen"
        // this is you make color green

//:~$  /usr/bin/env bash --version          