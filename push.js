function router(req, res) {
  var push_data = "";
  req.on("data", function(data) {
    push_data += data;
  });
  req.on("end", function() {
    var params = {
      Bucket: 'code-editor/brosf',
      Key: 'textdoc',
      Body: push_data.toString()
    };
    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Uploaded to: " + params.Key);
        push_data = "";
      }
    });
  });
  res.send("Saved to cloud.");
}

module.export = router;
