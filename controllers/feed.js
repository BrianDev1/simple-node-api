exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
                title: "Joke - Day 1",
                content: "What do you call an alligator detective? An investi-gator.",
                likes: 7,
                favourites: 3,
            }, {
                title: "Joke of the Day",
                content: "What do you call a fish without eyes? Fsh.",
                likes: 20,
                favourites: 10,
            },
            {
                title: "Just another Joke",
                content: "Why did the scarecrow win an award? Because he was outstanding in his field.",
                likes: 14,
                favourites: 7,
            }
        ]
    });
};


exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: "Success!!",
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
};