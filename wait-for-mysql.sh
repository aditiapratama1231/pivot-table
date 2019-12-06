#!/bin/bash

set -e
set -x

host="$1"
shift
cmd="$@"

while ! mysqladmin ping -h"$DB_HOST" --silent; do
    sleep 1
done

>&2 echo "Mysql is up - executing command"
exec $cmd