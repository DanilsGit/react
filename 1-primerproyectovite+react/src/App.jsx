import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'Google', 
        nameBd: "Google", 
        following: false
    },
    {
        userName: 'git', 
        nameBd: "Git", 
        following: true
    },
    {
        userName: 'github', 
        nameBd: "Git", 
        following: true
    },
    {
        userName: 'Twitter', 
        nameBd: "X", 
        following: false
    },
    {
        userName: 'Facebook', 
        nameBd: "Meta", 
        following: false
    },
];

export function App () {
    const format = (user) => `@${user}`
    return (
        <section className="App">
            {
                users.map(user=>{
                    const {userName, nameBd, following} = user;
                    return (
                        <TwitterFollowCard key={userName} userName={userName} formatUserName={format} initialIsFollowing={following}>
                            {nameBd}
                        </TwitterFollowCard>
                    );
                })
            }
        </section>
    );
}