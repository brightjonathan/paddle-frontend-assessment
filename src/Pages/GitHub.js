import {useState, useEffect} from 'react'
import axios from 'axios';
import './GitHub.css';

const GitHub = () => {

  //useState to store all our data in an array using useState
  const [alldata, setalldata] = useState([]);

  //url
  const url = 'https://api.github.com/repos/hustvl/YOLOP/subscribers';

  const getRep = () =>{
    axios.get(url).then((res)=>{
       const myRep = res.data;
       //console.log(myRep);
       setalldata(myRep);
       
    })
}

useEffect(()=>{
  getRep();
},[])

  return (
    
    <>
   <div className='github_container' >
    { alldata.map((data, index)=>{
       return(
        <div key={index} className='github_div' >
          <div>
          <img src={data.avatar_url} className='github_left' />
          </div>

          <div className='github_right'>
          <h2>{data.login}</h2>
          <p>{data.gists_url}</p>
          <div>{data.repos_url}</div>
          <div className='jo'>
          <div className='github_issues'>{data.starred_url}</div>
          <div className='github_sub'>{data.subscriptions_url}</div>
          </div>
          </div>

        </div>
       )
    })}
   </div>
    </>
  )
}

export default GitHub

