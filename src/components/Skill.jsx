import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faReact,faPython,faSquareJs} from '@fortawesome/free-brands-svg-icons';


const Skill = ()=>
{
    return(
        <div className='bg-white bg-opacity-5 rounded-3xl m-16' id='Skills'>
        <div className='text-white text-4xl font-bold nunito py-4'>Current Skills</div>
        <div className="flex flex-col md:flex-row items-center ">
      <div className="w-1/5 fas fa-3x  text-center w-screen p-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300  "><FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#ffffff",}} /></div>
      <div className="w-1/5 fas fa-3x text-center w-screen p-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300" ><FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#ffffff",}} /></div>
      <div className="w-1/5 fas fa-3x text-center w-screen  p-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 "><FontAwesomeIcon icon={faSquareJs} size="2xl" style={{color: "#ffffff",}} /></div>
      <div className="w-1/5 fas fa-3x text-center w-screen  p-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 "><FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#fafafa",}} /></div>
      <div className="w-1/5 fas fa-3x text-center w-screen  p-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 "><FontAwesomeIcon icon={faPython} size="2xl" style={{color: "#ffffff",}} /></div>
    </div>
    </div>
    );
}

export default Skill