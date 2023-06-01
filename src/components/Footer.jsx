import React from 'react'
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import youtube from "./images/youtube.svg";
import instagram from "./images/instagram.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='container-fluid text-light bg-dark py-5'>
      <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              Pagina react 2023
            </div>

            <div className='col-md-4'>
            <Link to={"https://twitter.com/Nike"} className="text-light me-1"><img src={twitter} alt={"Twitter"} width={32} /></Link>
            <Link to={"https://www.facebook.com/nike"} className="text-light me-1"><img src={facebook} alt={"Facebook"} width={32} /></Link>
            <Link to={"https://www.youtube.com/channel/UCUFgkRb0ZHc4Rpq15VRCICA"} className="text-light me-1"><img src={youtube} alt={"YouTube"} width={32} /></Link>
            <Link to={"https://www.instagram.com/nike/"} className='text-light me-1'><img src={instagram} alt={"instagram"}  width={32}/></Link>
            </div>

      
          </div>

      </div>
      
    </div>
  )
}

export default Footer
