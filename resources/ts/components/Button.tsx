import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a href={href} className="c-button">
      {text}
    </a>
  );
}

export default Button;
