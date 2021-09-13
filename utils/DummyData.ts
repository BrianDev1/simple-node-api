

const determineFavRatio = (likes: number) => {
    const v = 0.33;
    return Math.round(likes*v);
}

type Post = {
    title: string;
    content: string;
    likes: number;
    favourites: number;

}

export const DefaultPostsData: readonly Post[] = [{
    title: "Joke - Day 1",
    content: "What do you call an alligator detective? An investi-gator.",
    likes: 7,
    favourites: determineFavRatio(7),
},{
    title: "Joke of the Day",
    content: "What do you call a fish without eyes? Fsh.",
    likes: 20,
    favourites: determineFavRatio(20),
},{
    title: "Just another Joke",
    content: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    likes: 14,
    favourites: determineFavRatio(14),
}]