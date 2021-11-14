const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
//Get All
router.get("/CurrentCharges", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//Get Specific
router.get("/CurrentCharges/:postId", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.postId);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post a JSON object
router.post("/", async (req, res) => {
  const Data = req.body;

  const post = new Post({
    Price: Data.Price,
    Currency: Data.Currency,
    Distance: Data.Distance,
    Time: Data.Time,
  });
  try {
    const SavedPost = await post.save();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a speific post
router.delete("/delete/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch("/update/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          Price: req.body.Price,
          Currency: req.body.Currency,
          Distance: req.body.Distance,
          Time: req.body.Time,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
