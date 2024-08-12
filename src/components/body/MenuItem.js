import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

//2.through the props, I a able to receive the data from Menu.js
//3. But Using props, we have to write sevral identical lines : props.item.name, props.item.price.
//4. But we have already stored things in 'item' in  return <MenuItem item={dish} key={dish.id}/>; in Menu.js
//5. check on Menu.js
const MenuItem = ({item,onSelectDish}) => { //7.As params after taking item. Now, onSelectDish has also been appeared.
    
    //console.log(dishes);
  return (
    
    <div>                                       
    <Card inverse style={{padding:10, margin:10, cursor:'pointer'}} onClick={()=>onSelectDish(item)}>  {/*8. onClick={()=>onSelectDish(item)} */}
        <CardImg
        alt={item.name}      //For 9 go Menu.js
        src={item.image}
        style={{
            height: 270,
            opacity: 0.7
        }}
        width="100%"
        />
        <CardImgOverlay>
        <CardTitle tag="h5" style={{fontSize:25, fontWeight:'bold', color:'#000'}}>
            {item.name}
        </CardTitle>
        
        </CardImgOverlay>
    </Card>
</div>
  )
}

export default MenuItem