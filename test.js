const vision = require('@google-cloud/vision');

const CREDENTIALS = JSON.parse(
  JSON.stringify({
    type: "service_account",
    project_id: "potent-terminal-380815",
    private_key_id: "789bee45a615ad350818c5b261d51fa3e0911ee4",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCXazYeKvYALzK0\nOIsv/e9XIJR/gex1CUPzl4VmKq6BMinwDNFAevAaPxjtDRmS73Ta5747BLG1JBDr\nQ5YqzoqfeWwVW+sq0SjGfptTCUUII0FE6MH4XHy516GmeqMjN6++hWevfBzjZU/g\nFTR/7hgmM8LRtfmO31JKc5QNR4CzleTAARph3NlfbOrXYaNgs9J5xWrmMsNJ5vow\nDqlZMT8W1MFZMpfGeddPUw3kSiI3gAp3UZXCg0E15haalb+QQYZoowxe55CukQ1k\nh+CNYP33/Oc0qhRu+RfnwU65APJMpEoq7SJr4nthbnDcoSUUT9fsMj5825PMV09s\nWn4a9YvpAgMBAAECggEAAUB3sbzSTH8z1y9LTYNrJyx4jwFOdIRb3ucNmekvwbOu\nlENLA0jm1bYMWcfgy+o5VJ073JrAjYH5O3bq81AqyZf+UWQSq4n818GiWbJkjTqi\nbIFiCzjTfKIjVeDAkXxNOYsni0rKBJL19dVNkKmjg8S/CoHqYGBXUAJ7yvlZbtuH\niAVw3koFFfW8o9ZWZHuSAcZeTnS9JfwPzWJm6VIBxlI4hOo68fCOPWNDmEaNK0iW\nQuSrj+Zfg/xfYIlvkyhrrwOWUtm5+AzPtcObqaS8EAYjja9z7gv9qtR9RTCimBWy\nv925jJfsySgIzLua5U7c6h0WkZPlg1DcJnmUh+ypvQKBgQDSoftJrFLw7XMWw9Jz\nx7cXyIfinWUe6bHSPRDTgA8LTL95Ttbn3x6lqzxZvyE3J9J4E4MyZuO6xRduInBN\n3wvboEj6qIfWbfioZObwgmxfULhWT02KyAbGXONeqWOEKNQU2ny0Yk6UCYcMGxTQ\nog7UcJk4TIne0VjL+0shtCmTQwKBgQC4CD+8/gWcFkZeI3oc7FHgv4SBwKdCmMoJ\nkbzlHc4f9wYh3MkOF9sQu9MucGiUy/ccGAxdu9S4RGBcwb//0pDYJVsrbB4RObMF\nBZ7mCWcioEcgyi6J0YrxseMEh4f5D4iFbDbaUFlhl2O2kjaZsqTCsXo3uuw8sZCt\nKOEkW3PzYwKBgDmXPnzrWBY15lTgH+e2QJKJKtZEUMS+AvfH6JTbm8FsL6I8czgc\n4mVLx4mGX8+T3NEmDKY4SaXkg76CPhCcnsJjNfELKXDwyp9IT3iNQJJjILPApSQA\nAxIzjZtxVxtoimxVPOmZQ4DohftCYFOXK9TcIJirHLtGpC/JusYxW3i/AoGAGNzU\nb54J9/pya0lzt/CdZzW4mycB8ddehEhyMqoCLQNcirqfVw4WBH67myyIlIGx0tPU\n59z2ciaati1e2RsDgpAZbxZeQYmADA+kVgOzMVRiB6YI/4mVse2MdBIzZoyYrx3d\nk0UDrlGboRDD26Ps6ni7wEe6nsCGgT5inFzWn20CgYBCHSEDM9mGIEeAnCGRud0p\nZagfHD+TfGR8vivi+U0J4Lnl9bW4TdJGuyDvAG7CBikLYyanKq8LU3n2uAJpRR70\nYHuclNW9Pp0txhCgTi/vnz8/Il6KJXENc03RwTK3GI5Ys/Tiw+UI1OG4I9Lkpyu3\ntddJWzvUofzEr3wKMjlKRg==\n-----END PRIVATE KEY-----\n",
    client_email: "mytest1@potent-terminal-380815.iam.gserviceaccount.com",
    client_id: "112683652531337382651",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/mytest1%40potent-terminal-380815.iam.gserviceaccount.com",
  })
);

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandmark = async(file_path) => {
    let [result] = await client.landmarkDetection('');
    console.log(result);
};

detectLandmark();