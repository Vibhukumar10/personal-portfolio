import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io5'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/vibhu-kumar-singh/" style={{ paddingTop: '4px' }}>
        <IoLogoLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Vibhukumar10" style={{ paddingTop: '4px' }}>
        <AiOutlineGithub />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/VibhuKumarSing3" style={{ paddingTop: '4px' }}>
        <BsTwitter />
      </a>
    </div>
  </div>
)

export default SocialMedia
