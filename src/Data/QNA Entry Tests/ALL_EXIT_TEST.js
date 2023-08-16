const cnExitTest = [
    {
        question: "Explain the role of cookies in web applications and discuss their benefits and drawbacks.",
        user_answer: "",
        expected_answer: `Cookies are small pieces of data stored on a user's device by a web browser. They are used to remember user preferences and login sessions. However, they can also be used for tracking and privacy concerns.`,
        sub_topic: "Application Level Concepts",
    },

    {
        question: "What is HTTPS, and why is it important for secure communication on the web?",
        user_answer: "",
        expected_answer: `HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that uses encryption to protect data transmitted between a user's browser and the web server. It's essential for secure communication, especially when handling sensitive information like passwords and payment details.`,
        sub_topic: "Application Level Concepts",
    },
  
    {
      question: "Is both Internet and Web Same ?",
      user_answer: "",
      expected_answer: `The internet and the web are often used interchangeably,
      but they are not the same thing.
      The internet is a global network of computers,
      while the web is a way of accessing information on the internet.
  `,
      sub_topic: "Application Level Concepts",
    },
  
    {
      question:
        "what is network topology and what topology does college labs use in common  to connect with each other",
      user_answer: "",
      expected_answer: `Network topology refers to the physical or logical arrangement of devices, nodes, and links within a computer network.
      It defines how devices are interconnected and how data flows between them.
      One of the more common topologies used in such environments is likely the star topology.
      `,
      sub_topic: "Hardware Concepts",
    },
  
    {
      question: "what is a Proxy Server , does it provide Anonymity and Privacy",
      user_answer: "",
      expected_answer: `A proxy server is an intermediate server that sits between a client device and a destination server. It acts as a gateway,
      forwarding client requests to the destination server and potentially providing caching,
      filtering, and anonymity services. Proxy servers can act as intermediaries between users and the internet, making the user's IP address and identity hidden from the websites they visit.
      This enhances user privacy and helps protect sensitive information.
      `,
      sub_topic: "Hardware Concepts",
    },
  
    {
      question: "Does a router contain switch inside it",
      user_answer: "",
      expected_answer: `Yes, most routers contain a switch inside it.
      The switch is used to connect the different ports on the router together,
      so that devices on the same network can communicate with each other.
      The router also contains a routing engine, which is responsible for routing data packets between different networks.
      In some cases, a router may not have a built-in switch. This is usually the case with high-end routers that are designed for use in large networks.
      These routers typically have more ports than a typical home router, and they may also need to support more advanced routing protocols.
      In these cases, the router will typically have a separate switch that is connected to the router.`,
      sub_topic: "Hardware Concepts",
    },
  
    {
      question: "What is Peer to Peer Systems and is BitTorrent Peer to Peer?",
      user_answer: "",
      expected_answer: `
      Peer-to-peer is a networking model in which each computer in the network acts as both a client and a server.
      This means that each computer can both send and receive data from other computers on the network.
      BitTorrent: BitTorrent is a popular file-sharing system that uses P2P technology.
      In BitTorrent, users share files with each other directly, without the need for a central server.
      `,
      sub_topic: "Generic Questions",
    },
  
    {
      question: "What is load balancing ?",
      user_answer: "",
      expected_answer: `Load balancing is a technique that distributes traffic across multiple servers. This helps to improve performance and reliability by preventing any single server from becoming overloaded.
      Load balancing is often used for web servers, but it can also be used for other types of servers, such as database servers and application servers.`,
      sub_topic: "Generic Questions",
    },
  
    {
      question:
        "Is it possible to share data between systems without web ? If Yes then mention few ways to do it.",
      user_answer: "",
      expected_answer: `
      Yes, it is possible to share data between systems without the web.
      Peer to Peer file sharing, Direct file sharing, Shared Network File Sharing
      `,
      sub_topic: "Generic Questions",
    },
  
    {
      question: "what is udp and how it improves your online gaming performance?",
      user_answer: "",
      expected_answer: `User Datagram Protocol, is a transport protocol used in computer networking for sending data between devices over a network.
      UDP provides a more lightweight and connectionless approach to data transmission.
      UDP improves online gaming performance primarily due to its characteristics:
      1.Low Latency
      2.Faster Data Transmission
      3.Reduced Congestion
      `,
      sub_topic: "Data Transportation",
    },
  
    {
      question:
        "What are the names that are used to depict data in different OSI layers",
      user_answer: "",
      expected_answer: "Bit, Frame, Packet, Segment",
      sub_topic: "Data Transportation",
    },
  
    {
      question: "Explain the concept of caching in data transport.",
      user_answer: "",
      expected_answer: `Caching involves storing copies of web resources locally, either in the browser or on intermediary servers.
      This reduces the need to fetch resources from the original server, improving page load times.`,
      sub_topic: "Data Transportation",
    },
  
    {
      question:
        "What is Bandwidth ? Does Higher bandwidth promise faster data seed",
      user_answer: "",
      expected_answer: `Bandwidth refers to the maximum amount of data that can be transmitted over a network connection in a given period of time.
      Higher bandwidth does not always guarantee faster data speed, although it can contribute to it under certain conditions.`,
      sub_topic: "understanding of Basic terminologies",
    },
    {
      question: "What is ping ? is Higher ping prefered over Lower ping ?",
      user_answer: "",
      expected_answer: `
      "Ping" is a network utility used to test the reachability of a host (usually a computer or server) on an Internet Protocol (IP) network and to measure the round-trip time it takes for data packets to travel from the source to the destination and back.
      No lower the ping better the speed is`,
      sub_topic: "understanding of Basic terminologies",
    },
    {
      question: "Is OSI model actually implemented in real life? If yes where",
      user_answer: "",
      expected_answer: `No the OSI model is just a reference model. It is not implemented anywhere but rather used as a reference for building other models`,
      sub_topic: "understanding of Basic terminologies",
    },
  ];
  
  export {cnExitTest}
  