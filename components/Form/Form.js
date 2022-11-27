import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../Layout/Button';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const captchaRef = useRef(null);
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = async (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    Object.values(input)
      .map((i) => i.split('').length > 1)
      .reduce((a, b) => a && b)
      ? setIsDisabled(false)
      : setIsDisabled(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (isDisabled) return;
    if (token === '') {
      alert(`Please click "I'm not a robot" to send the message`);
      return;
    }
    await fetch('api/recaptcha', { method: 'POST', body: token }).then(
      (response) => {
        if (response.status === 401) {
          return;
        }
        if (!input.name || !input.email || !input.message) {
          alert('Please, fill the fields to send the message');
          return;
        } else {
          setIsLoading(true);
          setIsDisabled(true);
          fetch('/api/mailer', {
            method: 'post',
            body: JSON.stringify(input),
          }).then((response) => {
            setIsLoading(false);
            if (response.ok) {
              setInput({
                name: '',
                email: '',
                message: '',
              });
              alert('I received your message successfully');
            } else {
              alert('I did not receive your message');
            }
          });
        }
      }
    );
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
        type={'text'}
        name='message'
        value={input.message}
        placeholder='Wanna say something?'
      />
      <div className='recaptcha'>
        <ReCAPTCHA size='normal' sitekey={sitekey} ref={captchaRef} hl='en' />
      </div>
      <Button content={'Send'} isLoading={isLoading} isDisabled={isDisabled} />
      <style jsx>{`
        form {
          width: 400px;
          padding: 1rem;
          max-width: 100%;
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
        }
        form textarea {
          border: 1px solid var(--textColor);
          max-width: 100%;
          min-width: 100%;
          min-height: 5rem;
          max-height: 50vh;
          color: var(--textColor);
        }
        form input:focus,
        form textarea:focus {
          background: #d3d3d3d3;
        }
        .recaptcha {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </form>
  );
};

export default Form;
