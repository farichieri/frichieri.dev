import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../Layout/Button';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const captchaRef = useRef<any>(null);
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setMessage({ text: '', type: '' });
  };

  const MESSAGES = {
    INCOMPLETE: 'Complete all the fields to send the message',
    NOT_ROBOT: `Please verify that you are a human`,
    SUCCESS: 'The message was successfully sent',
    ERROR: 'The message could not be sent',
  };
  const MESSAGE_TYPE = {
    ERROR: 'error',
    SUCCESS: 'success',
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setMessage({ text: '', type: '' });
    event.preventDefault();
    if (captchaRef.current !== null) {
      const token = captchaRef.current.getValue();
      captchaRef.current.reset();

      if (isDisabled) return;
      if (!input.name || !input.email || !input.message) {
        setIsLoading(false);
        setIsDisabled(false);
        setMessage({ text: MESSAGES.INCOMPLETE, type: MESSAGE_TYPE.ERROR });
        return;
      }
      if (token === '') {
        setMessage({ text: MESSAGES.NOT_ROBOT, type: MESSAGE_TYPE.ERROR });
        return;
      }
      setIsLoading(true);
      setIsDisabled(true);
      await fetch('api/recaptcha', { method: 'POST', body: token }).then(
        (response) => {
          if (response.status === 401) {
            setIsLoading(false);
            setIsDisabled(false);
            return;
          } else {
            fetch('/api/mailer', {
              method: 'post',
              body: JSON.stringify(input),
            }).then((response) => {
              if (response.ok) {
                setIsLoading(false);
                setIsDisabled(false);
                setInput({
                  name: '',
                  email: '',
                  message: '',
                });
                setMessage({
                  text: MESSAGES.SUCCESS,
                  type: MESSAGE_TYPE.SUCCESS,
                });
              } else {
                setMessage({ text: MESSAGES.ERROR, type: MESSAGE_TYPE.ERROR });
              }
            });
          }
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type={'text'}
        name='name'
        value={input.name}
        placeholder='Name'
      />
      <input
        onChange={handleChange}
        type={'email'}
        name='email'
        value={input.email}
        placeholder='Email'
      />
      <textarea
        onChange={handleChange}
        name='message'
        value={input.message}
        placeholder='Message'
      />
      <div className='recaptcha'>
        <ReCAPTCHA
          size='normal'
          sitekey={`${sitekey}`}
          ref={captchaRef}
          hl='en'
          theme='dark'
        />
      </div>
      <div className='button-container'>
        <Button
          content={'Send'}
          isLoading={isLoading}
          isDisabled={isDisabled}
          loadingContent={'Sending...'}
        />
      </div>
      <span className={message.type}>{message.text}</span>
      <style jsx>{`
        form {
          max-width: 400px;
          width: 100%;
        }
        form,
        textarea {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        form input,
        form textarea {
          background: transparent;
          border: none;
          outline: none;
          transition: 0.3s;
          border-bottom: 1px solid var(--textColor);
          padding: 0.3rem 0.5rem;
          color: var(--textColor);
          width: 100%;
          display: flex;
        }
        form textarea {
          border: 1px solid var(--textColor);
          max-width: 100%;
          min-width: 100%;
          min-height: 5rem;
          max-height: 50vh;
          color: var(--textColor);
          border-radius: 4px;
          overflow: auto;
        }
        form input:focus,
        form textarea:focus {
          background: #d3d3d3d3;
        }
        .recaptcha {
          min-height: 78px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-transform: scale(0.85);
        }
        .button-container {
          width: 250px;
          margin: auto;
        }
        span {
          min-height: 2rem;
          font-size: 0.8rem;
        }
        span.error {
          color: red;
        }
        span.success {
          color: green;
        }
      `}</style>
    </form>
  );
};

export default Form;
