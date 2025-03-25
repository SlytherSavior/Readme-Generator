const getStackIcons = (techstackInput) => `https://skillicons.dev/icons?i=${techstackInput}`;

const getAnimatedTyping = (data) => {
    const encodedData = encodeURIComponent(data) // using regex to search
        .replace(/%20/g, "+")
        .replace(/(?:\+%3B\+|\+%3B|%3B\+|%3B) ?/g, ';') //match various occurences of these pattern
    return `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=22&duration=1500&pause=200&color=F7B733&center=true&vCenter=true&multiline=true&width=750&height=60&lines=${encodedData}`;
};

const getAchievements = (username) => {
    return `https://github-profile-trophy.vercel.app/?username=${username}&theme=onedark`
};

const getProject = (title, stack, github, description) => {
    const mainString = `### ${title} *(${stack})*
👉 [View on GitHub](${github})
> ${description}`

    return mainString
};

const getGitHubStats = (username) => {
    const stats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=vue-dark&show_icons=true&hide_border=true&count_private=true`;
    const languages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=vue-dark&show_icons=true&hide_border=true&layout=compact`;
    const streak = `https://streak-stats.demolab.com?user=${username}&theme=blood-dark`;
    const activity = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark`;

    return {
        stats,
        languages,
        streak,
        activity
    };
};

