import { useNavigate } from "react-router-dom"

export function Aboutus() {
    const Navigate = useNavigate()
    return (
        <div className="container">
            <h1>Hello Im kowshik varma kucharallpati</h1>
            <h2>Im Kowshik Varma, a committed B.Tech student at Anil Neerukonda Institute of Technology and Sciences, passionately steering my journey towards a career in development and coding.
                My insatiable love for learning drives me to continually acquire new skills and stay at the forefront of industry trends. 
                Armed with a solid technological foundation from my time on my passion, I am eager to apply these insights to real-world scenarios. 
                Thriving on challenges, I firmly believe in the transformative power of innovation to create impactful solutions. 
                As I embark on my professional journey, I welcome collaborations, seek mentorship, 
                and embrace new challenges that contribute to my growth as a developer.
                Best,
                Kowshik Varma
            </h2>
            <button><a style={{textDecoration:"none",color:"whitesmoke"}} href="https://www.linkedin.com/in/kowshik-varma-kucharallapati-9ab927278/">Linkedin</a></button>
            <button onClick={()=>{
                Navigate("/")
            }}>Go Back</button>
        </div>
    )

}