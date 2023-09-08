import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIA6MNG6SH2CAAK746U",
        secretAccessKey: "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"
    }
})

async function getObjectURL(key: any) {
    const command = new GetObjectCommand({
        Bucket: "imageeeee",
        Key: key
    })
    const url = await getSignedUrl(s3Client, command)
    return url;
}

async function init() {
    console.log("URL for graphql.jpeg", await getObjectURL("twitter.png"));
}

init()

