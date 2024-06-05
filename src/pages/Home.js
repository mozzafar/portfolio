
import dp from '../styles/images/its_me.jpeg';
import '../styles/home.css';
const Home =  () => {
return (
    
    <div className= 'flex justify-center p-12'>
        
            
            <div class='flex bg-black h-[770px] text-white p-4 w-5/6 rounded-lg hover:shadow-amber-500/40 shadow-lg shadow-cyan-500/50 justify-between'>
            <div>
                <img
                src={dp} alt="myimg"
                
                 className='rounded-full h-[370px] w-[370px] object-cover  hover:shadow-amber-500/40 shadow-lg  shadow-indigo-500/50 translate-x-[86px] translate-y-[76px]'
                    />
                </div>
            
                
            
               <div> <h3 className='translate-y-[180px]  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-19 w-74 translate-x-[370px] text-5xl'>Software Devoloper</h3></div>
              <div> <p className='-translate-x-[120px] translate-y-[300px] text-2xl '> "Hi, I'm Md Mozzafar Ahmed, a passionate MERN stack developer with expertise in HTML, CSS, React, TypeScript, EJS, Node. js, Express, and MongoDB." 
 </p>

 
 </div> 



            </div>
        
        
    </div>
    
);
};
export default Home;