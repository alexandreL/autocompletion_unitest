var testCase = require('nodeunit').testCase;
var exec = require('child_process').exec;
var fs = require('fs');
//var sys = require('sys');

module.exports = testCase({
    'Compile': testCase({
        'base': function(test) {
            exec("make -C ./auto_copy/", function(err, stdout, stderr) {
                if (stderr.length !== 0) {
                    sys.print(stderr);
                    test.ok(false);
                    test.done();
                } else {
                    test.ok(true);
                    test.done();
                }
            })
        }
    }),
    'City': testCase({
        '1A': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1A < ./City/input/1A.in", function(err, stdout, stderr) {
                fs.readFile("./City/output/1A.out", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        '1B': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1B < ./City/input/1B.in", function(err, stdout, stderr) {
                fs.readFile("./City/output/1B.out", 'utf-8', function(err, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        '1C': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1C < ./City/input/1C.in", function(err, stdout, stderr) {
                fs.readFile("./City/output/1C.out", 'utf-8', function(err, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        '1D': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1D < ./City/input/1D.in", function(err, stdout, stderr) {
                fs.readFile("./City/output/1D.out", 'utf-8', function(err, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        }
    }),
    'TestSujet': testCase({
        'test2': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test2", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test2", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test3': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test3", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test3", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test4': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test4", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test4", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test5': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test5", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test5", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test6': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test6", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test6", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test7': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test7", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test7", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test8': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test8", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test8", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        'test9': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test9", function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test9", 'utf-8', function(errfile, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
    })
});
