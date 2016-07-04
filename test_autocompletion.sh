#! /bin/bash
if [[ $1 ]]
then
    if [ "./auto_copy" ]
    then
        echo "clean old project"
        rm -rf auto_copy
    fi
    cp -fR $1 auto_copy
    if [ "node_modules" ]
    then
        echo "module Done"
    else
        if npm install
        then
            echo "good"
        else
            echo "Impossible npm"
            exit
        fi
    fi
    ./node_modules/nodeunit/bin/nodeunit tests.js

else
    echo -e "./test \E[1mpath_to_project_folder\E[0m"
fi
