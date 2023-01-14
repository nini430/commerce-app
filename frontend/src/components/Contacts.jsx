import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import {MdPhone,MdLocationOn} from "react-icons/md"
import {FaFax} from "react-icons/fa"
import {useMediaQuery} from "react-responsive"
import { SCREENS } from '../utils/screens'

const ContactContainer=styled.div`
margin-top:50px;
    ${tw`
    px-5
     lg:px-40
     flex
     flex-wrap
     justify-center
     gap-3
     lg:gap-6
    
    `}
`

const ContactItem=styled.div`
    width:250px;
    height:300px;
    ${tw`
        flex
        flex-col
        gap-2
        justify-center
        items-center
        shadow-md
    `}
`


const Contacts = () => {
    const isMobile=useMediaQuery({maxWidth:SCREENS.sm})
  return (
    <ContactContainer>
        <ContactItem>
            <MdPhone className="text-green-700 border border-solid rounded-full border-green-700 p-1" size={isMobile?15:30}/>
            <p className='font-bold'>Call us 24/7</p>
            <p>+786 789 689</p>
        </ContactItem>
        <ContactItem>
            <MdLocationOn className='border border-solid border-green-700 p-1 rounded-full text-green-700' size={isMobile?15:30}/>
            <p className='font-bold'>Go to Our Office</p>
            <span>Washington 5</span>
        </ContactItem>
        <ContactItem>
            <FaFax className='border border-solid border-green-700 p-1 rounded-full text-green-700' size={isMobile?15:30}/>
            <p className='font-bold'>Call Fax</p>
            <span>Washington 5</span>
        </ContactItem>

    </ContactContainer>
  )
}

export default Contacts