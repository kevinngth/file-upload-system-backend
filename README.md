# File Upload System Backend

## Set-up

### Layer

1. Run `npm i` from the directory `layer/nodejs`. Compress the `nodejs` directory into a .zip file
1. Go to AWS Lambda layers and create a new layer
1. Upload the .zip file to the layer

### Function

1. Create a new AWS Lambda function
1. Create a `config.js` file that looks like this:

   ```js
   module.exports = {
     FILE_UPLOAD_PATH: "/your-endpoint",
     BUCKET_NAME: "your-aws-s3-bucket-name",
     S3_SUBFOLDER: "your-subfolder",
   };
   ```

1. Compress the directory into a .zip file. You don't need to include the `layer` subdirectory. Upload the .zip file to AWS Lambda function
1. Add a layer that you just created to the Lambda function
