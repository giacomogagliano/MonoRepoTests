#!/bin/bash

package=$1

bolt add $package &&
  bolt w next_app add -D $package
