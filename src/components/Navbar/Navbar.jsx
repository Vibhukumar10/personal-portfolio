import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { BsTwitter } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io5'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <>
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}>
              <span className="span-flex">
                <span className="span-items-container">
                  <a
                    className="span-items"
                    href="https://www.linkedin.com/in/vibhu-kumar-singh/"
                    rel="noreferrer"
                    target="_blank">
                    <IoLogoLinkedin />
                  </a>
                  <a
                    className="span-items"
                    href="https://github.com/Vibhukumar10"
                    rel="noreferrer"
                    target="_blank">
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="span-items"
                    href="https://twitter.com/VibhuKumarSing3"
                    rel="noreferrer"
                    target="_blank">
                    <BsTwitter />
                  </a>
                </span>
                <HiX onClick={() => setToggle(false)} />
              </span>
              <ul>
                {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
