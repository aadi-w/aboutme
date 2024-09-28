import { useState } from "react";
import myimg from "../assets/myimg.png";
import myself from "../assets/myself.png"

function Home() {
    const [showmyimg, setShowmyimg] = useState('show')
    const [showmyself, setShowmyself] = useState('hide')
    const handleMouseEnter = () => {
        setShowmyimg('hide')
        setShowmyself('show')
    }

    const handleMouseLeave = () => {
        setShowmyimg('show')
        setShowmyself('hide')
    }


    return (
        <div className="home">
            <div className="mess-text">
                <span onMouseEnter={(e) => { handleMouseEnter(e) }} onMouseLeave={(e) => { handleMouseLeave(e) }} className="intro">Hi! I am Aaditya</span>
                <p className={showmyimg}>Glad to meet You🙂</p>
                <p className={showmyself}>minimal design😅</p>
            </div>

            <div  className="myimg-wrapper">
                <img className={showmyimg} src={myimg} />
                <img id="myself" className={showmyself} src={myself} />
            </div>
        </div>
    );
}

export default Home;