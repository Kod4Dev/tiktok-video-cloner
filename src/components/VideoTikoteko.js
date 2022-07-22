import video from "../video.mp4"
import img from "../profile.jpeg";
import { AiOutlineUserSwitch, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const VideoTikoteko = (props) => {
    const playVideo = () => {
        let video = document.getElementById("video");
        video.play();
    }
    return(
        <div className='box-video'>
            <div className='title-video'>
                <h3>{props.nome}</h3>
                <p>{props.titulo}</p>
            </div>
            <video id="video" onClick={()=> playVideo()}>
                <source src={video} type="video/mp4" />
            </video>
            <div className='icons-bottom'>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white" }}></AiOutlineUserSwitch>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white" }}></AiOutlineUserSwitch>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white" }}></AiOutlineUserSwitch>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white" }}></AiOutlineUserSwitch>
            </div>
            <div className='icons-right'>
                <div className="profile">
                    <img src={img} width="100%" style={{borderRadius: "50%", width: "100%"}} />
                </div>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white", margin: "8px 0" }}></AiOutlineUserSwitch>
                <AiFillHeart style={{ fontSize: "30px", color: "red", margin: "8px 0" }}></AiFillHeart>
                <FaRegCommentDots style={{ fontSize: "30px", color: "white", margin: "8px 0" }}></FaRegCommentDots>
            </div>
        </div>
    )
}

export default VideoTikoteko;