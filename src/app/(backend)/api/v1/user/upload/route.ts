import AWS from 'aws-sdk';

export default async function handler(req: any, res: any) {
    // Initialize AWS S3 with your credentials
    const s3 = new AWS.S3();

    // Define S3 bucket and object key
    const bucketName = 'your-s3-bucket-name';
    const objectKey = 'example.txt'; // Replace with your object key

    try {
        // Use the AWS SDK to perform S3 operations
        const data = await s3.getObject({ Bucket: bucketName, Key: objectKey }).promise();

        // Check if data.Body is defined before accessing it
        if (data.Body) {
            res.status(200).json(data.Body.toString());
        } else {
            res.status(404).json({ error: 'Object not found in S3 bucket' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error retrieving S3 object' });
    }
}
