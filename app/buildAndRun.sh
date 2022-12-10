#!/bin/sh
set -ex

npm ci
wait-for mysql:3306 -- npm start