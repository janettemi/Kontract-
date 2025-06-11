'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  text: string;
  content: string;
  title: string;
  style?: React.CSSProperties;
  angle?: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, title, content, style, angle = 0 }) => {
  return (
    <div
      style={{
        width: '180px',
        height: '120px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transform: `rotate(${angle}deg)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '0 16px',
        ...style,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
        role="img"
        aria-label={text}
      >
        <Image src={imageSrc} alt={text} fill style={{ objectFit: 'cover' }} priority />
      </div>

      <div
        style={{
          background: '#ACB2E866',
          padding: '4px 12px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '10px',
          marginTop: '-15px',
        }}
      >
        <span
          style={{
            fontSize:"10px",
            lineHeight: '12px',
            textAlign: 'center',
            color: '#303FC5',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {text}
        </span>
      </div>

      <div
        style={{
          textAlign: 'center',
          verticalAlign: 'middle',
          color: '#000',
          fontWeight: 600,
          fontSize: '12px',
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontWeight: 400,
          fontSize: '9px',
          lineHeight: '10px',
          letterSpacing: '-0.32%',
          textAlign: 'center',
          color: '#AAB3C1',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Card;
