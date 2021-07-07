const express = require("express");
const router = express.Router();

// Asset Model
const Asset = require("../../models/Asset");

// @route GET api/assets
// @desc Get All assets
// @access Public
router.get("/get-assets/", (req, res) => {
  Asset.find()
    .sort({ createdDate: -1 })
    .then((assets) => res.json(assets));
});

// @route POST api/assets
// @desc Create new Asset
// @access Public
router.post("/create-asset/", (req, res) => {
  if(!req.body.type || !req.body.name) {
    res.json({success: false, message: "Type and name are required fields."})
  }
  else {
  const newAsset = new Asset({
    type: req.body.type,
    name: req.body.name,
    desc: req.body.desc,
    filepath: "https://www.dropbox.com/s/wb99qtqvydapqu9/batyr.png?dl=0",
    // TODO:
    // when passing the file and saving to server need to store it to the filepath
    // for now going to point to an img in the internet
  });

  newAsset.save().then((asset) => res.json({success: true, data: asset}));
}
});

// @route DELETE api/delete-asset/:id
// @desc Delete an Asset
// @access Public
router.delete("/delete-asset/:id", (req, res) => {
  Asset.findById(req.params.id)
    .then((asset) => asset.remove().then(() => res.json({ success: true })))
    .catch((err) => res.json({success: false, message: `No asset found with id ${req.params.id}`}));
});

module.exports = router;
