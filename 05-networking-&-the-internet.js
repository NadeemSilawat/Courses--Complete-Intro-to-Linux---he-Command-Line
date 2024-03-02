
//-------SSH & Secondary Machine-----------//

/***
 * SSH : Secure Shell or Secure Socket Shell.
 *  It is a protocol in Linux that allows users to
 *  securely connect to a remote server.
 *
 *
 *
 * SSH is One computer to Another computer connection
 *
 * ***/

// :~$ multipass launch --name secondary    ----> start a second Linux VM named secondary.

// :~$ multipass shell secondary        --------->  an example of multipass launch name secondary

// :~$ sudo useradd -s /bin/bash -m -g ubuntu brian            --> create a new user called "brian

// :~$ sudo passwd brian                       --> add the user "brian" and give it access to bash, make home directory



//------Linking two Machines with SSH---------//

/*Two Machine are Connect secondary & Primary*/

// :~$ ssh-keygen -t rsa                              --> generate the RSA type key pair
/***
         * Generating public/private rsa key pair.
        Enter file in which to save the key (/c/Users/dell/.ssh/id_rsa):
        Enter passphrase (empty for no passphrase):
        Enter same passphrase again:
        Your identification has been saved in /c/Users/dell/.ssh/id_rsa
        Your public key has been saved in /c/Users/dell/.ssh/id_rsa.pub
        The key fingerprint is:
        SHA256:y3LSueAK734vO19rvdHfLS8+m5l5kOCPQH/PwJtvnPg dell@DESKTOP-751INM5
        The key's randomart image is:
        +---[RSA 3072]----+
        |                 |
        |                 |
        |                 |
        |          . .    |
        |        S. o o . |
        |       o o. o.*  |
        |  .   + * .o.+oO.|
        |   o .+= o..ooBBO|
        |   o=oo*+.. .oOE*|
        +----[SHA256]-----+

*/

// :~$ cd .ssh/





