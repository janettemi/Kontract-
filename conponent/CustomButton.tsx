'use client';

import { Button, ButtonProps } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

type CustomButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  variant?: ButtonProps['variant'];
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  style?: CSSProperties;
} & Omit<ButtonProps, 'variant'>;

export default function CustomButton({
  children,
  rounded = false,
  variant = 'contained',
  bgColor,
  textColor,
  borderColor,
  style,
  ...rest
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      sx={{
        width: 124,
        height: 42,
        borderRadius: rounded ? '749.25px' : '8px',
        backgroundColor: variant === 'contained' ? bgColor : 'transparent',
        color: textColor,
        borderColor: borderColor,
        borderWidth: variant === 'outlined' ? '1px' : 0,
        textTransform: 'none',
        boxShadow: 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
//  <div style={{ display: 'flex', gap: '12px' }}>
//       {/* Rounded Solid Button */}
//       <CustomButton
//         rounded
//         bgColor="#0718B9"
//         textColor="#fff"
//       >
//         Solid
//       </CustomButton>

//       {/* Rounded Outlined Button */}
//       <CustomButton
//         rounded
//         variant="outlined"
//         textColor="#0718B9"
//         borderColor="#0718B9"
//       >
//         Border
//       </CustomButton>

//       {/* Rounded Light Background Button */}
//       <CustomButton
//         rounded
//         bgColor="#EEF0FF"
//         textColor="#0718B9"
//       >
//         Light BG
//       </CustomButton>

//       {/* Not Rounded Button with Custom Size */}
//       <CustomButton
//         style={{ width: 180 }}
//         bgColor="#F4E041"
//         textColor="#000"
//       >
//         Rectangle
//       </CustomButton>
//     </div>