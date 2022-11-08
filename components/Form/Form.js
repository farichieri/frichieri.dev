import React, { useState } from 'react';
import Button from '../Layout/Button';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDisabled) return;
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
        setIsDisabled(false);
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type={'text'}
        name='name'
        value={input.name}
        placeholder='name'
      />
      <input
        onChange={handleChange}
        type={'email'}
        name='email'
        value={input.email}
        placeholder='email'
      />
      <textarea
        onChange={handleChange}
        type={'text'}
        name='message'
        value={input.message}
        placeholder='Wanna say something?'
      />
      <Button content={'Enviar'} isLoading={isLoading} />
      <style jsx>{`
        form {
          width: 400px;
          padding: 1rem;
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
        }
        form textarea {
          border: 1px solid var(--textColor);
        }
        form input:focus,
        form textarea:focus {
          background: lightgray;
        }
      `}</style>
    </form>
  );
};

export default Form;
