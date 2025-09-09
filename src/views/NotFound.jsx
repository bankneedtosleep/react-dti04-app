import React from 'react';

export default function NotFound() {
    const wow = {
        textAlign:'center',marginTop:'100px',fontFamily:"Trirong",textShadow:"1px 1px 2px black",fontFamily:"Trirong"
    }
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'100px',fontFamily:"Trirong",textShadow:"1px 1px 2px black",fontFamily:"Trirong"}}>
        <hr />
        404 Page Not Found</h1>
      <h1 style={{textAlign:'center',textShadow:"1px 1px 2px black",fontFamily:"Trirong"}}>
        ไม่พบเพจที่คุณต้องการ กรุณาตรวจสอบ URL</h1>
        <hr />
    </div>
  );
}
