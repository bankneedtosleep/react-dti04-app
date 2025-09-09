import React from 'react';

export default function HeaderCal({ titleName, imgName }) {
  return (
    <div style={{ textAlign: 'center', color: '#000000ff' , marginTop:'50px',textShadow:"1px 1px 2px black",fontFamily:"Trirong" }}>
     {titleName}
        <h1>
          <img style={{ display: 'block', margin: '0 auto', width: '150px' }} src={imgName} alt="" />
        </h1>
    </div>
  );
}
