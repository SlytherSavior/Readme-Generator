


const getStackSource = (techstackInput) => `https://skillicons.dev/icons?i=${techstackInput}`;

const getAnimatedTyping = (data) => {
    const encodedData = encodeURIComponent(data) // using regex to search
        .replace(/%20/g, "+")
        .replace(/(?:\+%3B\+|\+%3B|%3B\+|%3B) ?/g, ';') //match various occurences of these pattern
    return `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=22&duration=1500&pause=200&color=F7B733&center=true&vCenter=true&multiline=true&width=750&height=60&lines=${encodedData}`;
}

const getAchievements = (username) => {
    return `https://github-profile-trophy.vercel.app/?username=${username}&theme=onedark`
}

