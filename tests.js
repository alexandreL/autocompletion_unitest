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
                fs.readFile("./output/City/1A.out", function(err, data) {
                    test.equal(stdout, data);
                    test.done();
                });
            })
        },
        '1B': function(test) {

            test.done();
        }
    })
});
