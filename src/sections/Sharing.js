import React from "react";
import { Command } from "../components/ScreenThing";

export const NetworkSharing = () => (
  <>
    <h1>1. File Sharing Overview</h1>
    <p>
      When we want to transfer data from one machine to another, sometimes it
      maybe easier to connect a USB drive and manually copy them. But if you're
      working with machines on the same network, the way to transfer data is
      through network file sharing. We'll go over different methods to copy data
      to and from different machines on your network. Discuss some simple file
      copies, then we'll talk about mounting entire directories on your machine
      that act as a separate drive. The scp command stands for secure copy, it
      works exactly the way the cp command does, but allows you to copy from one
      host over to another host on the same network. It works via ssh so all
      your actions are using the same authentication and security as ssh.
    </p>
    <br />
    <h3>To copy a file over from local host to a remote host</h3>
    <Command>
      $ scp myfile.txt username@remotehost.com:/remote/directory
    </Command>
    <br />
    <h3>To copy a file from a remote host to your local host</h3>
    <Command>
      $ scp username@remotehost.com:/remote/directory/myfile.txt
      /local/directory
    </Command>
    <br />
    <h3>To copy over a directory from your local host to a remote host</h3>
    <Command>$ scp -r mydir username@remotehost.com:/remote/directory</Command>
    <br />
    <h1>2. rsync</h1>
    <p>
      Another tool used to copy data from different hosts is rsync (short for
      remote synchronization). Rsync is very similar to scp, but it does have a
      major difference. Rsync uses a special algorithm that checks in advanced
      if there is already data that you are copying to and will only copy over
      the differences. For example, let's say that you were copying over a file
      and your network got interrupted, therefore your copy stopped midway.
      Instead of re-copying everything from the beginning, rsync will only copy
      over the parts that didn't get copied.
    </p>
    <br />
    <p>Some commonly-used rsync options:</p>
    <ul>
      <li>v - verbose output</li>
      <li>r - recursive into directories</li>
      <li>h - human readable output</li>
      <li>z - compressed for easier transfer, great for slow connections</li>
    </ul>
    <br />
    <h1>3. Simple HTTP Server</h1>
    <p>
      Python has a super useful tool for serving files over HTTP. This is great
      if you just want to create a quick network share that other machines on
      your network can access. To do that just go to the directory you want to
      share and run:
    </p>
    <br />
    <Command>$ python -m SimpleHTTPServer</Command>
    <br />
    <p>
      This sets up a basic webserver that you can access via the localhost
      address. So grab the IP address of the machine you ran this on and then on
      another machine access it in the browser with: http://IP_ADDRESS:8000. On
      your own machine, you can view the files available by typing:
      http://localhost:8000 in your web browser.
    </p>
    <br />
    <p>
      You can also do this with node or if you are running Python 3, the syntax
      will be a little bit different.
    </p>
    <br />
    <h1>4. NFS</h1>
    <p>
      The most standard network file share for Linux is NFS (Network File
      System), NFS allows a server to share directories and files with one or
      more clients over the network.
    </p>
    <br />
    <h3>Setting up NFS client</h3>
    <Command>
      $ sudo service nfsclient start <br />$ sudo mount server:/directory
      /mount_directory
    </Command>
    <br />
    <h3>Automounting</h3>
    <p>
      Let's say you use the NFS server quite often and you want to keep it
      permanently mounted, normally you think you'd edit the /etc/fstab file,
      but you may not always get a connection to the server and that can cause
      issues on bootup. Instead what you want to do is setup automounting so
      that you can connect to the NFS server when you need to. This is done with
      the automount tool or in recent versions of Linux amd. When a file is
      accessed in a specified directory, automount will look up the remote
      server and automatically mount it.
    </p>
    <br />
    <h1>5. Samba</h1>
    <p>
      In the early days of computing, it became necessary for Windows machines
      to share files with Linux machines, thus the Server Message Block (SMB)
      protocol was born. SMB was used for sharing files between Windows
      operating systems (Mac also has file sharing with SMB) and then it was
      later cleaned up and optimized in the form of the Common Internet File
      System (CIFS) protocol.
    </p>

    <br />
    <h3>Install Samba</h3>
    <Command>
      $ sudo apt update <br />$ sudo apt install samba
    </Command>
    <br />
    <h3>Setup smb.conf</h3>
    <Command>$ sudo vi /etc/samba/smb.conf</Command>
    <br />
    <h3>Setup up a password for Samba</h3>
    <Command>$ sudo smbpasswd -a [username]</Command>
    <br />
    <h3>Create a shared directory</h3>
    <Command>$ mkdir /my/directory/to/share</Command>
    <br />
    <h3>Restart the Samba service</h3>
    <Command>$ sudo service smbd restart</Command>
    <br />
    <h3>Attach a Samba share to your system</h3>
    <Command>
      $ sudo mount -t cifs servername:directory mountpount -o
      user=username,pass=password
    </Command>

    {/* v - verbose output
r - recursive into directories
h - human readable output
z - compressed for easier transfer, great for slow connections */}
  </>
);
