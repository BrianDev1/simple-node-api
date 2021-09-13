const DefaultPosts = require("../utils/DummyData");

exports.getPosts = (req, res, next) => {
    res.status(200).json({posts: DefaultPosts.DefaultPostsData})
};