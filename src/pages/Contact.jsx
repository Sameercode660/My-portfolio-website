import React from 'react'
import ContactCard from '../components/ContactCard'

function Contact() {

  const contactData = [
    {
      link: 'https://github.com/Sameercode660',
      logo: 'fa-brands fa-github text-[50px]'
    }, 
    {
      link: 'https://twitter.com/MohdSameer200',
      logo: 'fa-brands fa-x-twitter text-[50px]'
    },
    {
      link: 'https://www.instagram.com/sameer_789736/',
      logo: 'fa-brands fa-instagram text-[50px]'
    },
    {
      link: 'https://www.linkedin.com/in/sam789',
      logo: 'fa-brands fa-linkedin text-[50px]'
    }
  
  ]
  return (
    <div className='flex justify-center items-center flex-wrap h-[90dvh]'>
      {
        contactData.map((data) => (
          <ContactCard
          logo={data.logo}
          link={data.link}
          ></ContactCard>
        ))
      }
    </div>
  )
}

export default Contact
