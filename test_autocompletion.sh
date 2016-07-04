#! /bin/sh
if [[ $1 ]]
then
    if [ "./auto_copy" ]
    then
        rm -rf auto_copy
    fi
    cp -fR $1 auto_copy
    if [ -f "node_modules" ]
    then
        echo "Missing node_module:"
        echo -e "\t\E[1mnpm install\E[0m"
        exit
    else
        ./node_modules/nodeunit/bin/nodeunit tests.js
    fi
else
    echo -e "./test \E[1mpath_to_project_folder\E[0m"
fi
