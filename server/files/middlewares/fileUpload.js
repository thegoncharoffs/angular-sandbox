app.use(express.static('documents'));

app.post('/upload-files', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let documents = req.files.documents;
        

            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];
                
                //move photo to documents directory
                photo.mv('./documents/' + photo.name);

                //push file details
                data.push({
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            });

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: data
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});