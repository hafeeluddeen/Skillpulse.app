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