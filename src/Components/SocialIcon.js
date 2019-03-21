import React from 'react';
import facebook_icon from '../Images/social_svg/facebook.svg';
import twitter_icon from '../Images/social_svg/twitter.svg';
import whatsapp_icon from '../Images/social_svg/whatsapp.svg';
import '../Styles/SocialIcon.css';

const iconsType = {
  facebook: facebook_icon,
  twitter: twitter_icon,
  whatsapp: whatsapp_icon
}


export default function SocialIcon(props){
  return(
    <div
      style={{
        WebkitMask: `url("${iconsType[props.type]}") 50% 50% no-repeat`
      }}
      onClick={props.onClick}
      className={`social-icon ${props.className || ''}`}>
    </div>
  )
}

export function SocialIconLink(props){
  return(
    <a
      target={`${props.target || ''}`}
      style={{
        WebkitMask: `url("${iconsType[props.type]}") 50% 50% no-repeat`
      }}
      href={props.href}
      className={`social-icon ${props.className || ''}`}>
    </a>
  )
}
