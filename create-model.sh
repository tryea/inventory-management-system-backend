#!/bin/bash

# check if model name is supplied
if [ -z "$1" ]
then
  echo "No model name supplied."
  exit 1
fi

# store the model name in a variable
MODEL_NAME=$1

# create the necessary directories and files
mkdir -p src/contexts/${MODEL_NAME}
touch src/contexts/${MODEL_NAME}/${MODEL_NAME}.controller.ts
touch src/contexts/${MODEL_NAME}/${MODEL_NAME}.service.ts
touch src/contexts/${MODEL_NAME}/${MODEL_NAME}.model.ts
touch src/contexts/${MODEL_NAME}/${MODEL_NAME}.dto.ts
touch src/contexts/${MODEL_NAME}/${MODEL_NAME}.test.ts
