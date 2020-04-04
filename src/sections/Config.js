import React from "react";
import { Command } from "../components/ScreenThing";

export const Config = () => (
  <>
    <h1>1. Network Interfaces</h1>
    <p>
      A network interface is how the kernel links up the software side of
      networking to the hardware side. We've already seen an example of this:
    </p>
    <br />
    <Command>ifconfig -a</Command>
    <br />
    <Command>
      eth0 Link encap:Ethernet HWaddr 1d:3a:32:24:4d:ce <br />
      inet addr:192.168.1.129 Bcast:192.168.1.255 Mask:255.255.255.0 <br />
      inet6 addr: fd60::21c:29ff:fe63:5cdc/64 Scope:Link
    </Command>
  </>
);
