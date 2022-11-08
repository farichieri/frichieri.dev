const Button = ({ content, isLoading }) => {
  return (
    <button>
      {isLoading ? <span>Loading...</span> : <span>{content}</span>}
      <style jsx>{`
        button {
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default Button;
