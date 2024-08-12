import React from 'react'

const LoadComments = ({comments}) => {
  return (
  <div>
  {
        comments.map((c)=>{  //STEP. 14. Mapping the comments as it was an array. 
            return(               //For 15. Go to App.js cause <BrowserRouter></BrowserRouter> er moddeh MainComponent rakhbo
            <div key={c.id}>      {/*Cause router add korbo*/}
                <h5>{c.author}</h5>
                <p>{c.comment}</p>
            </div>
            );

        })
    }
       
    </div>
  );
};

export default LoadComments