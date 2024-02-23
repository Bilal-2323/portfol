import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Fooer = ()=>
{
    return(
        <div className="flex bg-white bg-opacity-5 rounded-2xl py-5 justify-center items-center">
        <div className=" w-1/3"><h2 className="text-xl text-white nunito">Designed and Developed by Bilal</h2></div>
        <div className=" w-1/3"><h2 className="text-xl text-white">Copyright © 2024</h2></div>
        <div className=" w-1/3 flex justify-center items-center">
        <div className="w-1/3 p-4 "><a href='https://github.com/Bilal-2323' target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} /></a></div>
        <div className="w-1/3 p-4 "><a href='https://www.linkedin.com/in/bilal-mohammed-jameel-a1380b227/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} /></a></div>
        <div className="w-1/3 p-4 "><a href='https://www.instagram.com/__bilal____32/' target="_blank" ><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} /></a></div>
        </div>
        </div>
    );
}
export default Fooer