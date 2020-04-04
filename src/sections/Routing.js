import React from "react";
import { Command } from "../components/ScreenThing";

export const Routing = () => (
  <>
    <h1>1. What is a router?</h1>
    <p>
      A router enables machines on a network to communicate with each other as
      well as other networks. On a typical router, you will have LAN ports, that
      allow your machines to connect to the same local area network and you will
      also have an Internet uplink port that connects you to the Internet,
      sometimes you'll see this port being labelled as WAN, because it is
      essentially connecting you to a wider network. When we do any sort of
      networking activity, it has to go through the router. The router decides
      where our network packets go and which ones come in. It routes our packets
      between multiple networks to get from it's source host to it's destination
      host.
    </p>
    <br />
    <h3>How does a router work?</h3>
    <p>
      When we route packets, they use similar address "routes", such as to get
      to network A, send these packets to network B. When we don't have a route
      set for that, we have a default route that our packets will use. These
      routes are set on a routing table that our system uses to navigate us
      across networks.
    </p>
    <br />
    <h3>Hops</h3>
    <p>
      As packets move across networks, they travel in hops, a hop is how we
      roughly measure the distance that the packet must travel to get from the
      source to the destination. Let's say to I have two routers connecting host
      A to host B, so therefore we say there are two hops between host A and
      host B. Each hop is a intermediate device like the routers that we must
      pass through.
    </p>
    <br />
    <h3>
      Understanding the basic difference between Switching, Routing & Flooding?
    </h3>
    <p>
      Packet SWITCHING is basically receiving, processing and forwarding data to
      the destination device. ROUTING is a process of creating the routing
      table, so that we can do SWITCHING better. Before routing, FLOODING was
      used. If a router don't know which way to send a packet than every
      incoming packet is sent through every outgoing link except the one it
      arrived on.
    </p>
    <br />
    <h1>2. Routing Table</h1>
    <p>Look at your machine's routing table:</p>
    <Command>$ sudo route -n</Command>
    <br />
    <h3>Kernel IP Routing Table</h3>
    <table>
      <tr>
        <th>Destination</th>
        <th>Gateway</th>
        <th>Genasmask</th>
        <th>Flags</th>
        <th>Metric</th>
        <th>Ref</th>
        <th>Use</th>
        <th>Iface</th>
      </tr>
      <tr>
        <td>0.0.0.0</td>
        <td>192.168.224</td>
        <td>0.0.0.0</td>
        <td>UG</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>eth0</td>
      </tr>
      <tr>
        <td>192.168.224</td>
        <td>0.0.0.0</td>
        <td>255.255.255.0</td>
        <td>U</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>eth0</td>
      </tr>
    </table>
    <br />
    <h3>Destination</h3>
    <p>
      In the first field, we have a destination IP address of 192.168.224.0,
      this says that any packet that tries to go to this network, goes out
      through my Ethernet cable (eth0). If I was 192.168.224.5 and wanted to get
      to 192.168.224.7, I would just use the network interface eth0 directly.
    </p>
    <br />
    <h3>Gateway</h3>
    <p>
      If we are sending a packet that is not on the same network, it will be
      sent to this Gateway address. Which is aptly named as being a Gateway to
      another network.
    </p>
    <br />
    <h3>Genmask</h3>
    <p>
      This is the subnet mask, used to figure out what IP addresses match what
      destination.
    </p>
    <br />
    <h3>Flags</h3>
    <ul>
      <li>UG - Network is Up and is a Gateway</li>
      <li>U - Network is Up</li>
    </ul>
    <br />
    <h3>Iface</h3>
    <p>
      This is the interface that our packet will be going out of, eth0 usually
      stands for the first Ethernet device on your system.
    </p>
    <br />
    <h1>3. Path of a Packet</h1>
    <h3>Let's look at how a packet travels within its local network</h3>
    <ol>
      <li>
        First the local machine will compare the destination IP address to see
        if it's in the same subnet by looking at its subnet mask.
      </li>
      <li>
        hen packets are sent they need to have a source MAC address, destination
        MAC address, source IP address and destination IP address, at this point
        we do not know the destination MAC address.
      </li>
      <li>
        To get to the destination host, we use ARP to broadcast a request on the
        local network to find the MAC address of the destination host.
      </li>
      <li>Now the packet can be successfully sent!</li>
    </ol>
    <br />
    <h3>Let's see how a packet travels outside its network</h3>
    <ol>
      <li>
        First the local machine will compare the destination IP address, since
        its outside of our network, it does not see the MAC address of the
        destination host. And we can't use ARP because the ARP request is a
        broadcast to locally connected hosts.
      </li>
      <li>
        So our packet now looks at the routing table, it doesn't know the
        address of the destination IP, so it sends it out to the default gateway
        (another router). So now our packet contains our source IP, destination
        IP and source MAC, however we don't have a destination MAC. Remember MAC
        addresses are only reached through the same network. So what does it do?
        It sends an ARP request to get the MAC address of the default gateway.
      </li>
      <li>
        he router looks at the packet and confirms the destination MAC address,
        but it's not the final destination IP address, so it keeps looking at
        the routing table to forward the packet to another IP address that can
        help the packet move along to its destination. Everytime the packet
        moves, it strips the old source and destination MAC address and updates
        the packet with the new source and destination MAC addresses.
      </li>
      <li>
        nce the packet gets forwarded to the same network, we use ARP to find
        the final destination MAC address
      </li>
      <li>
        During this process, our packet doesn't change the source or destination
        IP address.
      </li>
    </ol>
  </>
);
