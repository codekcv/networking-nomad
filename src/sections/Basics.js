import React from "react";

export const NetworkBasics = () => (
  <>
    <h1>1. Network Basics</h1>
    <p>
      Let's look at a typical home network, you have a few different components.
    </p>
    <br />
    <ul>
      <li>
        ISP - Your internet service provider, the company you pay to get
        Internet at your house.
      </li>
      <li>
        Router - The router allows each machine on your network to connect to
        the Internet. In most modern routers, you can connect via wireless or an
        Ethernet cable.
      </li>
      <li>
        WAN - Wide Area Network, this is what we call the network that
        encompasses everything between your router and a wider network such the
        Internet.
      </li>
      <li>
        LAN - Local Area Network, this is the network between your router and
        any wired devices such as Desktop PCs.
      </li>
      <li>Hosts - Each machine on a network is known as a host.</li>
    </ul>
    <br />
    <p>
      The data and information that gets transmitted through networks are known
      as packets and by the end of the Networking Nomad section, you'll
      understand in detail how a packet travels to and from hosts.
    </p>
    <br />
    <h1>2. OSI Model</h1>
    <p>
      Before we can look at some practical networking stuff, we have to go over
      some boring jargon that you've probably heard of before. The OSI{" "}
      <b>(Open Systems Interconnection)</b> model is a theoretical model of
      networking. This model shows us how a packet traverses through a network
      in seven different layers. I won't get into specifics of this model, since
      most of these networking courses will be focused on the TCP/IP model, but
      it should be mentioned that such a theoretical networking model exists and
      has actually played a large part in the TCP/IP networking model that we
      use today.
    </p>
    <br />
    <h1>3. TCP/IP Model</h1>
    <p>
      The OSI model gave birth to what eventually became the TCP/IP model and
      this model is actually what the Internet is based off of. It is the actual
      implementation of networking. The TCP/IP model uses the TCP/IP protocol
      suite, which we just commonly refer to as TCP/IP. These protocols work
      together to specify how data should be gathered, addressed, transmitted
      and routed through a network. Using the TCP/IP model, we can see how these
      protocols are used to show the breakdown of how a packet travels through
      the network.
    </p>
    <br />
    <ul>
      <li>
        <h2>Application Layer</h2>
        <p>
          The top layer of the TCP/IP model. It determines how your computer's
          programs (such as your web browser) interface with the transport layer
          services to view the data that gets sent or received. It uses:
        </p>
        <br />
        <ol>
          <li>
            HTTP (Hypertext Transfer Protocol) - used for the webpages on the
            Internet.
          </li>
          <li>
            SMTP (Simple Mail Transfer Protocol) - electronic mail (email)
            transmission
          </li>
        </ol>
      </li>
      <br />
      <li>
        <h2>Transport Layer</h2>
        <p>
          How data will be transmitted, includes checking the correct ports, the
          integrity of the data, and basically delivering our packets. It uses:
        </p>
        <br />
        <ol>
          <li>TCP (Transmission Control Protocol) - reliable data delivery</li>
          <li>UDP (User Datagram Protocol) - unreliable data delivery</li>
        </ol>
      </li>
      <br />
      <li>
        <h2>Network Layer</h2>
        <p>
          This layers specifies how to move packets between hosts and across
          networks. It uses:
        </p>
        <br />
        <ol>
          <li>
            IP (Internet Protocol) - Helps route packets from one machine to
            another.
          </li>
          <li>
            ICMP (Internet Control Message Protocol) - Helps tell us what is
            going on, such as error messages and debugging information.
          </li>
        </ol>
      </li>
      <br />
      <li>
        <h2>Link Layer</h2>
        <p>
          This layer specifies how to send data across a physical piece of
          hardware. Such as data travelling through Ethernet, fiber, etc. The
          lists above of protocols each layer uses is not extensive and you'll
          encounter many other protocols that come into play.
        </p>
      </li>
    </ul>
    <br />
    <h1>4. Network Addressing</h1>
    <p>
      Before we jump into seeing how a packet moves across a network, we have to
      familiarize ourselves with some terminology. When you mail a letter, you
      must know who it is being sent to and where it is coming from. Packets
      need the same information, our hosts and other hosts are identified using
      MAC (media access control) addresses and IP addresses, to make it easier
      on us humans we use hostnames to identify a host.
    </p>
    <br />
    <ul>
      <li>
        <h2>MAC Addresses</h2>
        <p>
          A MAC address is a unique identifier used as a hardware address. This
          address will never change. When you want to get access to the
          Internet, your machine needs to have a device called a network
          interface card. This network adapter has its own hardware address
          that's used to identify your machine. A MAC address for an Ethernet
          device looks something like this 00:C4:B5:45:B2:43. MAC addresses are
          given to network adapters when they are manufactured. Each
          manufacturer has an organizationally unique identifier (OUI) to
          identify them as the manufacturer. This OUI is denoted by the first 3
          bytes of the MAC address. For example, Dell has 00-14-22, so a network
          adapter from Dell could have a MAC address like: 00-14-22-34-B2-C2.
        </p>
      </li>
      <br />
      <li>
        <h2> IP Addresses</h2>
        <p>
          An IP Address is used to identify a device on a network, they are
          hardware independent and can vary in syntax depending on if you are
          using IPv4 or IPv6 (more on this later). For now we'll assume you are
          using IPv4, so a typical IP address would look like: 10.24.12.4. IP
          addresses are used with the software side of networking. Anytime a
          system is connected to the Internet it should have an IP address. They
          can also change if your network changes and are unique to the entire
          Internet (this isn't always the case once we learn about NAT).
          Remember it takes both software and hardware to move packets across
          networks, so we have two identifiers for each, MAC (hardware) and IP
          (software).
        </p>
      </li>
      <br />
      <li>
        <h2>Hostnames</h2>
        <p>
          One last way to identify your machines is through hostname. Hostnames
          take your IP address and allow you to tie that address to a human
          readable name. Instead of remembering 192.12.41.4 you can just
          remember myhost.com.
        </p>
      </li>
    </ul>
    <br />
    <h1>5. Application Layer</h1>
    <p>
      Let's say I wanted to send an email to Patty. We'll go through each of the
      TCP/IP layers to see this in action. Remember that packets are used to
      transmit data across networks, a packet consists of a header and payload.
      The header contains information about where the packet is going and where
      it came from. The payload is the actual data that is being transferred. As
      our packet traverses the network, each layer adds a bit of information to
      the header of the packet. Also keep in mind that different layers use a
      different term for our "packet". In the transport layer we essentially
      encapsulate our data in a segment and in the link layer we refer to this
      as a frame, but just know that packet can be used in regards to the same
      thing. First we start off in the application layer. When we send our email
      through our email client, the application layer will encapsulate this
      data. The application layer talks to the transport layer through a
      specified port and through this port it sends its data. We want to send an
      email through the application layer protocol SMTP (simple mail transfer
      protocol). The data is sent through our transport protocol which opens a
      connection to this port (port 25 is used for SMTP), so we get this data
      sent through this port and that data is sent to the Transport layer to be
      encapsulated into segments.
    </p>
    <br />
    <h1>6. Transport Layer</h1>
    <p>
      The transports layer helps us transfer our data in a way networks can read
      it. It breaks our data into chunks that will be transported and put back
      together in the correct order. These chunks are known as segments.
      Segments make it easier to transport data across networks.
    </p>
    <br />
    <ul>
      <li>
        <h2>Ports</h2>
        <p>
          Even though we know where we are sending our data via IP addresses,
          they aren't specific enough to send our data to a certain processes or
          services. Services such as HTTP use a communication channel via ports.
          If we want to send webpage data, we need to send it over the HTTP port
          (port 80). In addition to forming segments, the transport layer will
          also attach the source and destination ports to the segment, so when
          the receiver gets the final packet it will know what port to use.
        </p>
      </li>
      <br />
      <li>
        <h2>UDP</h2>
        <p>
          There are two popular transport protocols UDP and TCP. We'll briefly
          discuss UDP and spend most of our time on TCP, since it's the most
          commonly used. UDP is not a reliable method of transporting data, in
          fact it doesn't really care if you get all of your original data. This
          may sound terrible, but it does have its uses, such as for media
          streaming, it's ok if you lose some frames in return you get your data
          a little faster.
        </p>
      </li>
      <br />
      <li>
        <h2>TCP</h2>
        <p>
          TCP provides a reliable connection-oriented stream of data. TCP uses
          ports to send data to and from hosts. An application opens up a
          connection from one port on its host to another port on a remote host.
          In order to establish the connection, we use the TCP handshake.
        </p>
        <br />
        <ol>
          <li>
            The client (connecting process) sends a SYN segment to the server to
            request a connection
          </li>
          <li>
            Server sends the client a SYN-ACK segment to acknowledge the
            client's connection request
          </li>
          <li>
            Client sends an ACK to the server to acknowledge the server's
            connection request
          </li>
        </ol>
        <br />
        <p>
          Once this connection is established, data can be exchanged over a TCP
          connection. The data is sent over in different segments and are
          tracked with TCP sequence numbers so they can be arranged in the
          correct order when they are delivered. In our email example, the
          transport layer attaches the destination port (25) to the source port
          of the source host.
        </p>
      </li>
    </ul>
    <br />
    <h1>7. Network Layer</h1>
    <p>
      The Network layer determines the routing of our packets from our source
      host to a destination host. Fortunately in our example, our packet is only
      traveling within the same network, but the Internet is made up of many
      networks. These smaller networks that make up the Internet are known as
      subnets. All subnets connect to each other in some way, which is why we
      are able to get to www.google.com even though it's on its own network. I
      won't go into detail as we have a whole course dedicated to subnets, but
      for now in regards to our Network layer, know that the IP addresses define
      the rules to travel to different subnets.
    </p>
    <br />
    <p>
      In the network layer, it receives the segment coming from the transport
      layer and encapsulates this segment in an IP packet then attaches the IP
      address of the source host and the IP address of the destination host to
      the packet header. So at this point, our packet has information about
      where it is going and where it came from. Now it sends our packet to the
      physical hardware layer.
    </p>
    <br />
    <h1>8. Link Layer</h1>
    <p>
      At the bottom of the TCP/IP model sits the Link Layer. This layer is the
      hardware specific layer.
    </p>
    <p>
      In the link layer, our packet is encapsulated once more into something
      called a frame. The frame header attaches the source and destination MAC
      addresses of our hosts, checksums and packet separators so that the
      receiver can tell when a packet ends.{" "}
    </p>
    Fortunately we are on the same network, so our packet won't have to travel
    too far. First, the link layer attaches my source MAC address to the frame
    header, but it needs to know Patty's MAC address as well. How does it know
    that and how do I find it since it's not on the Internet? We use ARP!
  </>
);
