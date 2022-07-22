import video from "../video.mp4"
import img from "../profile.jpeg";
import { AiOutlineUserSwitch, AiFillHeart, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi"
import { MdOutlineChat } from "react-icons/md"
import { IoArrowRedoOutline } from "react-icons/io5"

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
                <AiFillHome style={{ fontSize:"30px", color: "white" }}></AiFillHome>
                <AiOutlineSearch style={{ fontSize:"33px", color: "white" }}></AiOutlineSearch>
                <HiPlusSm style={{ fontSize:"30px", color: "black", backgroundColor: "white", borderRadius: "10px", width: "50px" }}></HiPlusSm>
                <MdOutlineChat style={{ fontSize:"29px", color: "white" }}></MdOutlineChat>
                <AiOutlineUserSwitch style={{ fontSize:"30px", color: "white" }}></AiOutlineUserSwitch>
            </div>
            <div className='icons-right'>
                <div className="profile">
                    <img src={img} width="100%" style={{borderRadius: "50%", width: "100%"}} />
                </div>
                <AiFillHeart style={{ fontSize:"30px", color: "red", margin: "10px 0" }}></AiFillHeart>
                <FaRegCommentDots style={{ fontSize: "30px", color: "white", margin: "15px 0" }}></FaRegCommentDots>
                <IoArrowRedoOutline style={{ fontSize: "30px", color: "white", margin: "10px 0" }}></IoArrowRedoOutline>
            </div>
        </div>
    )
}

export default VideoTikoteko;