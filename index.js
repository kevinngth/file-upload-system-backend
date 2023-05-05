const AWS = require("aws-sdk");
const parseMultipart = require("parse-multipart");
const util = require("./util");
import { FILE_UPLOAD_PATH, BUCKET_NAME, S3_SUBFOLDER } from "./config";

const s3 = new AWS.S3();

const extractFile = (event) => {
  const boundary = parseMultipart.getBoundary(event.headers["content-type"]);
  const parts = parseMultipart.Parse(Buffer.from(event.body), boundary);
  // const [{ fileName, data }] = parts;
  console.log(parts);
  return undefined;
};

exports.handler = async (event) => {
  let response;
  switch (true) {
    case event.httpMethod === "POST" && event.path === FILE_UPLOAD_PATH:
      const extracted = extractFile(event);
      // for (const file of formData) {
      //   const params = {
      //     Bucket: BUCKET_NAME,
      //     Key: `${S3_SUBFOLDER}/${fileName}`,
      //     Body: fileContent,
      //   };
      //   await s3.putObject(params).promise();
      // }
      response = util.buildResponse(200);
      break;
    default:
      response = util.buildResponse(404);
  }
  return response;
};
