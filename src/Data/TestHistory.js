var TestModulesHistory = {
    m1 : {
        s1 : {
            subjectName : "C/C++",
            entryTest : false,
            exitTest : false,
        },
        s2 : {
            subjectName : "JAVA",
            entryTest : false,
            exitTest : false,
        },
        s3 : {
            subjectName : "OOPS",
            entryTest : false,
            exitTest : false,
        },
        s4 : {
            subjectName : "DSA",
            entryTest : false,
            exitTest : false,
        }
    },
    m2 : {
        s1 : {
            subjectName : "DBMS",
            entryTest : false,
            exitTest : false,
        },
        s2 : {
            subjectName : "CN",
            entryTest : true,
            exitTest : false,
        },
        s3 : {
            subjectName : "OS",
            entryTest : false,
            exitTest : false,
        },
    }
}


//for rating bar
var TestTotalMarks = {
    m1: {
      "c/c++": {
        datatypes: -1,
        functions: -1,
        switch: -1,
        loops: -1,
        pointers: -1,
      },
      java: {
        inheritance: -1,
        polymorphism: -1,
        encapsulation: -1,
        abstraction: -1,
        interfaces: -1,
      },
      oops: {
        classes: -1,
        objects: -1,
        constructors: -1,
        methods: -1,
        inheritance: -1,
      },
      dsa: {
        arrays: -1,
        linkedLists: -1,
        stacks: -1,
        queues: -1,
        trees: -1,
      },
    },
    m2: {
      cn: {
        "Application Level Concepts": -1,
        "Hardware Concepts": -1,
        "Generic Questions": -1,
        "Data Transportation": -1,
        "understanding of Basic terminologies": -1,
      },
      dbms: {
        normalization: -1,
        indexing: -1,
        transactions: -1,
        sql: -1,
        erDiagrams: -1,
      },
      os: {
        processes: -1,
        memoryManagement: -1,
        fileSystems: -1,
        scheduling: -1,
        synchronization: -1,
      },
    },
  };
  




//for graph
var TestTotalMarks = {
    m1 : {
        "C/C++" : 7, 
        "JAVA" : -1,
        "OOPS" : 10,
        "DSA" : 4,
    },
    m2 : {
        "CN" : 0, 
        "DBMS" : 9,
        "OS" : -1,
    },
}

// render image when this happens
// var TestTotalMarks = {
//     m1 : {
//         "C/C++" : -1, 
//         "JAVA" : -1,
//         "OOPS" : -1,
//         "DSA" : -1,
//     },
//     m2 : {
//         "CN" : -1, 
//         "DBMS" : -1,
//         "OS" : -1,
//     },
// };

export {TestModulesHistory,TestTotalMarks}