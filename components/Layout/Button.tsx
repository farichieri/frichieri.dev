const Button = ({
  content,
  isLoading,
  isDisabled,
}: {
  content: string;
  isLoading: boolean;
  isDisabled: boolean;
}) => {
  return (
    <button disabled={isDisabled}>
      {isLoading ? <span>Loading...</span> : <span>{content}</span>}
      <style jsx>{`
        button {
          cursor: pointer;
          background: transparent;
          box-shadow: 0 0 6px 1px green;
          border: none;
          border-radius: 4px;
          transition: 0.3s;
          color: white;
        }
        button:hover {
          filter: brightness(1.5);
        }
        button:active {
          box-shadow: 0 0 20px 1px var(--box-shadow);
        }
        button:disabled {
          background: var(--bg-color);
          color: var(--text-color);
          box-shadow: none;
          border: 1px solid gray;
        }
        button:disabled:hover {
          filter: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
