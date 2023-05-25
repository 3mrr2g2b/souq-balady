import avatar from "../../imgs/images.png";
import PageLoader from '../pageLoader/pageLoader'
import { useState, useEffect } from "react"
import Axios from "axios";
import Login from "../login";

const AboutMe = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://3mrr2g2b.github.io/MyJason/json.json')
      .then(res => {
        setData(res.data); // Fix: set data state with res.data
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const githubClicker = () =>{
      const link = document.createElement('a');
      link.href = 'https://github.com/3mrr2g2b';
      document.body.appendChild(link);
  }
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        data.map((element, key) => (
          <div className='allBoxes' key={key}>
            <div className="box about-data">
              <div className="container">
                <div className='content'>
                  <div className='overly'></div>
                  <img src={element.img} alt="Avatar" /> {/* Add alt attribute */}
                </div>
                <p className='title'>{element.name}</p>
                <div className='desc'>{element.description}</div>
                <div className='content-'>
                    <div className='content contain'>
                        <p>{element.mobile}</p>
                        <span><i className='fas fa-mobile-alt'></i></span>
                    </div>
                    <div className='content contain'>
                        <p>{element.phone}</p>
                        <span><i className='fas fa-phone-alt'></i></span>
                    </div>
                </div>
                <div className='content-'>
                <div className='content contain' onClick={githubClicker}>
                  <p>{element.github}</p>
                  <span><i className='fab fa-github'></i></span>
                </div>
                <div className='content contain'>
                
                  <p>{element.linkedIn}</p>
                  <span><i className='fab fa-linkedin'></i></span>
                
                </div>
                </div>
                <div className='content-'>
                <a href={element.portfolio}>
                <div className='content contain'>
                  <p>{element.portfolio}</p>
                  <span><i className='fas fa-laptop-house'></i></span>
                </div>
                </a >
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default AboutMe;
