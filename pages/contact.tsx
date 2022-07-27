import { FormEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from '../styles/pages/Contact.module.css'
import emailjs from '@emailjs/browser';
import { ImSpinner2 } from 'react-icons/im';
import { BsCheck2Circle } from 'react-icons/bs';
import { TbFaceIdError } from 'react-icons/tb';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { NextSeo } from 'next-seo';
export default function Contact() {
  const [sendingMessage, setSendingMessage] = useState(false)
  const [sent, setSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formComplete, setFormComplete] = useState(false)
  const form = useRef<HTMLInputElement | any>();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSendingMessage(true)
    setFormComplete(true);
    emailjs.sendForm(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_KEY as string, process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_KEY as string, form.current, process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setSendingMessage(false)
        setSent(true)
        console.log('dsadsa')
      }, (error) => {
        setSendingMessage(false)
        setIsError(true)
      });
  };

  const links = [
    { title: "LinkedIn", icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ashton-pierce/' },
    { title: "Github", icon: <FiGithub />, url: 'https://github.com/apierce17' }
  ];

  return (
    <>
      <NextSeo
        title="Contact"
      />
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail} className={`${styles[formComplete ? 'sending' : '']} ${'slideIn'}`}>
          <h1>Let's Connect</h1>
          <div className={styles.topRow}>
            <div className={styles.inputWrapper}>
              <label> Name</label>
              <input id='from_name' name='from_name' required />
            </div>
            <div className={styles.inputWrapper}>
              <label>Email</label>
              <input id='reply_to' name='reply_to' type='email' required />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>Message</label>
            <textarea id='message' name='message' required />
          </div>
          <button className='button'>Send Message</button>
        </form>
        {formComplete &&
          <div className={styles.messageState}>
            {sendingMessage &&
              <>
                <ImSpinner2 className={styles.spinner} />
                <p>Sending Message</p>
              </>
            }
            {sent &&
              <><BsCheck2Circle /> <p>Message Sent!</p></>}
            {isError && <>
              <TbFaceIdError />
              <p>Oops! There was an issue sending the message, but you can still reach me on any of the platforms below!</p>
            </>
            }
          </div>
        }
        <div className={`${styles.links} ${'slideIn'}`}>
          {links.map((link, idx) => {
            return (
              <a href={link.url} target="_blank" key={idx} rel="noreferrer">
                <span title={link.title}>{link.icon}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  )
}
