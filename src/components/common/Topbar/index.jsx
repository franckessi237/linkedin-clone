import React from 'react';
import LinkedinLogo from './../../../assets/linkedinLogo.png';
import { HiUsers } from "react-icons/hi";
import { FaHome, FaBriefcase, FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import user from './../../../assets/user.png';
import './index.scss';

export default function Topbar() {
  return (
    <div className="topbar-main">
      <img className="linkedin-Logo" src={LinkedinLogo} alt="Linkedin Logo" />
      <div className='react-icons'>
      <FaSearch size={25} className='react-icon'/>
      <FaHome size={25}className='react-icon'/>
      <HiUsers size={25}className='react-icon'/>
      <FaBriefcase size={25}className='react-icon'/>
      <BiSolidMessageRoundedDetail size={25}className='react-icon'/>
      <IoNotificationsSharp size={25} className='react-icon'/>
      </div>
      <img className="user-Logo" src={user} alt="user" />
    </div>
  );
}
