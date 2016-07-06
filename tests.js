var testCase = require('nodeunit').testCase;
var exec = require('child_process').exec;
var fs = require('fs');
var execParam = {
    encoding: 'utf8',
    timeout: 10000,
    killSignal: 'SIGTERM',
}

module.exports = testCase({
    'Compile': testCase({
        'base': function(test) {
            exec("make -C ./auto_copy/", execParam, function(err, stdout, stderr) {
                if (stderr.length !== 0) {
                    console.log(stderr);
                    test.ok(false);
                    test.done();
                } else {
                    test.ok(true);
                    test.done();
                }
            })
        }
    }),
    'City Simple': testCase({
        '1A': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1A < ./City/input/1A.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/1A.out", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'droit': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/droit < ./City/input/droit.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/droit.out", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i], 'si 1A passe c\'est que vous cassez sur les droit de fichier en read-Only');
                    }
                    test.done();
                });
            })
        },
        '1B': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1B < ./City/input/1B.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/1B.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        '1C': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1C < ./City/input/1C.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/1C.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        '1D': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/1D < ./City/input/1D.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/1D.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        }
    }),
    'City normal': testCase({
        '2A': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/2A < ./City/input/2A.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/2A.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'Big': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/Big < ./City/input/Big.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/Big.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        }

    }),
    'City hard': testCase({
        '3A': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/3A < ./City/input/3A.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/3A.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        '3B': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/3B < ./City/input/3B.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/3B.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        }
    }),
    'General Adress': testCase({
        '4A': function(test) {
            exec("./auto_copy/autoCompletion ./City/Dico/4A < ./City/input/4A.in", execParam, function(err, stdout, stderr) {
                fs.readFile("./City/output/4A.out", 'utf-8', function(err, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        }
    }),
    'TestSujet': testCase({
        'test2': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test2", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test2", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test3': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test3", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test3", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test4': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test4", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test4", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test5': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test5", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test5", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test6': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test6", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test6", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test7': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test7", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test7", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test8': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test8", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test8", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
        'test9': function(test) {
            exec("./auto_copy/autoCompletion ./Sujet/Dico/dico < ./Sujet/input/test9", execParam, function(err, stdout, stderr) {
                fs.readFile("./Sujet/output/test9", 'utf-8', function(errfile, data) {
                    var s1 = stdout.split('\n')
                    var s2 = data.split('\n')
                    for (var i = 0; i < s1.length && i < s2.length; i++) {
                        test.equal(s1[i], s2[i]);
                    }
                    test.done();
                });
            })
        },
    })
});
