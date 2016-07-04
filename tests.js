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
    })
});
