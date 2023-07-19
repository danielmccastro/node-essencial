let AWS = require("aws-sdk");
require('dotenv').config();

let accessKey = process.env.ACCESS_KEY;
let secretKey = process.env.SECRET_KEY;
let bucket = process.env.BUCKET;

class S3Helper {
  /**
   * Faz upload
   *
   * @param buffer - buffer binario do arquivo
   * @param path - caminho no qual o arquivo sera salvo no S3
   */
  static upload(buffer, path) {
    AWS.config.update({ accessKeyId: accessKey, secretAccessKey: secretKey });
    let s3 = new AWS.S3();
    s3.putObject(
      {
        Bucket: bucket,
        Key: path,
        Body: buffer,
        ACL: "public-read",
        ContentType: "image/jpeg",
      },
      function (resp) {
        console.log("Arquivo enviado com sucesso.");
      }
    );
  }
}
module.exports = S3Helper;
