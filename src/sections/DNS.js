import React from "react";
import { Command } from "../components/ScreenThing";

export const DNS = () => (
  <>
    <h1>1. What is DNS?</h1>
    <p>
      DNS is fundamentally a distributed database of hostnames to IP addresses,
      we manage our database so people know how to get to our site/domain, and
      somewhere else another person is managing their database so others can get
      to their domain. These domains are then able to talk to each other and
      build a massive contact list of the Internet.
    </p>
    <br />
    <h1>2. DNS Components</h1>
    <p>
      The DNS database of the Internet relies on sites and organizations
      providing part of that database. To do that, they need:
    </p>
    <br />
    <h3>Name Server</h3>
    <p>
      We setup DNS via "name servers", the name servers load up our DNS settings
      and configs and answers any questions from clients or other servers that
      want to know things like "Who is google.com?". If the name server doesn't
      know the answer to that query, it will redirect the request to other name
      servers. Name servers can be "authoritative", meaning they hold the actual
      DNS records that you're looking for, or "recursive" meaning they would ask
      other servers and those servers would ask other servers until they found
      an authoritative server that contained the DNS records.
    </p>
    <br />
    <h3>Zone File</h3>
    <p>
      Inside a name server lives something called zone files. Zone files are how
      the name server stores information about the domain or how to get to the
      domain if it doesn't know.
    </p>
    <br />
    <h3>Resource Records</h3>
    <p>
      A zone file is comprised of entries of resource records. Each line is a
      record and contains information about hosts, nameservers, other resources,
      etc. The fields consist of the following:
    </p>
    <ul>
      <li>Record name</li>
      <li>
        TTL - The time after which we discard the record and obtain a new one,
        in DNS TTL is denoted by time, so records could have a TTL of one hour.
        The reason we do this is because the Internet is constantly changing,
        one minute a host can be mapped to X IP address then next it can be at Y
        IP address
      </li>
      <li>
        Class - Namespace of the record information, most commonly IN is used
        for Internet
      </li>
      <li>
        Type - Type of information stored in the record data. We won't get into
        record types, but you've probably seen common ones like A for address,
        MX or mail exchanger, etc.
      </li>
      <li>
        Data - This field can contain an IP address if it's an A record or
        something else depending on the record type.
      </li>
    </ul>
    <br />
    <h1>3. /etc/hosts</h1>
    <p>
      The /etc/hosts file contains mappings of some hostnames to IP addresses.
      The fields are pretty self explanatory, there is one for the IP address,
      the hostname and then any alias's for the host.
    </p>
    <br />
    <Command>$ cat /etc/hosts</Command>
    <Command>
      127.0.0.1 | localhost <br />
      127.0.1.1 | icebox
    </Command>
    <br />
    <h3>Let's see a fun example of /etc/hosts. Modify and add a line for:</h3>
    <br />
    <Command>123.45.6.7 www.google.com</Command>
    <br />
    <p>
      Save the file and now go to www.google.com. Having issues aren't you? Well
      that's because we just mapped www.google.com to a completely wrong IP
      address. Since our hosts first look locally for IP address mappings, it
      never reaches DNS to find google.com.
    </p>
    <br />
    <h1>4. DNS Tools</h1>
    <h3>nslookup</h3>
    <p>
      The "name server lookup" tool is used to query name servers to find
      information about resource records. Let's find where the name server for
      google.com is:
    </p>
    <br />
    <Command>$ nslookup www.google.com</Command>
    <Command>
      Server: 127.0.1.1 <br />
      Address: 127.0.1.1#53 <br />
      <br />
      Non-authoritative answer: <br />
      Name: www.google.com <br />
      Address: 216.58.192.4
    </Command>
    <br />
    <h3>dig</h3>
    <p>
      Dig (domain information groper) is a powerful tool for getting information
      about DNS name servers, it is more flexible than nslookup and great for
      troubleshooting DNS issues.
    </p>
    <br />
    <Command>$ dig www.google.com</Command>
    <Command>
      ; > DiG 9.9.5-3-Ubuntu > www.google.com <br />
      ;; global options: +cmd <br />
      ;; Got answer: <br />
      ;; ->>HEADER
    </Command>
  </>
);
