import axios from 'axios';
import { format } from "date-fns";
import { useState } from 'react';
import { formatString } from '../utils/utils';
import { Router } from 'next/router';

const Uploader = () => {
    const [file, setFile] = useState<any>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadUrl, setUploadUrl] = useState(null);

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        var date = new Date();
        var formattedDate = format(date, "yyyy-M-dd");

        // If file selected: load file to AWS
        if (file) {
            // Send file to AWS
            var fileKey = `mydata/date=${formattedDate}/${formatString(file.name)}`;
            var fileType = file.type;

            let { data } = await axios.post("/api/v1/user/upload", {
                file_key: fileKey,
                type: fileType,
            });

            const uploadUrl = await data.url;
            console.log("URL upload: ", uploadUrl, "to upload file: ", file);

            await axios.put(uploadUrl, file, {
                headers: {
                    "Content-type": fileType,
                    "Access-Control-Allow-Origin": "*",
                },
            });

            // Router.reload();

            localStorage.setItem("s3FileKey", fileKey);
            localStorage.setItem("s3FileFormat", fileType);
        };
    }

    return (
        <div>
            <h2>Upload Images and Videos to Amazon S3</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
                <button type="submit" disabled={!file || uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {uploadUrl && <p>File uploaded successfully! <a href={uploadUrl} target="_blank" rel="noopener noreferrer">View File</a></p>}
        </div>
    );
};

export default Uploader
