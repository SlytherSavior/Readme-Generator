
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

function genReadme() {
    const username = document.getElementById('username').value;
    const animatedText = document.getElementById('animatedText').value;
    const education = document.getElementById('education').value;
    const currGoals = document.getElementById('goals').value;
    const techJourney = document.getElementById('journey');
    const techStack = document.getElementById('techStack').value;
    const projTitle = document.getElementById('projTitle').value;
    const projStack = document.getElementById('projStack').value;
    const projGithub = document.getElementById('projGithub').value;
    const projDesc = document.getElementById('projDesc').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const linkedin = document.getElementById('linkedin').value;
    const twitter = document.getElementById('twitter').value;
    const statsData = getGitHubStats(username);

    const markdownData = `# 🌟 ${username} 🌟

<p align="center">
  <img src="${getAnimatedTyping(animatedText)}" alt="Typing SVG"/>
</p>

---

## 👨‍💻 About Me

🎓 **Education:**${education}  
🌍 **Current Goals:** ${currGoals}  
💡 **Tech Journey:** ${techJourney}

---

## 🚀 My Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=${techStack}" alt="Tech Stack">
</p>


## 🌟 Featured Projects

### ${projTitle} *(${projStack})*
👉 [View on GitHub](${projGithub})
> ${projDesc}

---

## 📊 GitHub Stats

<p align="center">
  <img src="${statsData.stats}" alt="Shrijan's GitHub Stats">
  <img src="${statsData.languages}" alt="Shrijan's Top Languages">
  <a href="https://git.io/streak-stats"><img src="${statsData.streak}" alt="GitHub Streak" /></a>
</p>

![GitHub Activity Graph](${statsData.activity})

---

## 🏆 Achievements & Badges

<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="${getAchievements(username)}" alt="Shrijan's Trophies"></a>
</p>

---

## 📧 Let's Connect!

<p align="left">
  <a href="mailto:${email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
  <a href="${website}"><img src="https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="Website"></a>
  <a href="${linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="${twitter}"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
</p>

⭐️ *Don't forget to star some repos and drop me a message if you'd like to collaborate!* 🚀🔥
`
    

};