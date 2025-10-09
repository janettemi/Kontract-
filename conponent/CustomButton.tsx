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
  // Set default bgColor for rounded buttons if not provided
  const computedBgColor =
    rounded && variant === 'contained' && !bgColor ? '#0718B9' : bgColor;
  const computedTextColor =
    rounded && variant === 'contained' && !textColor ? '#fff' : textColor;

  return (
    <Button
      variant={variant}
      sx={{
        width: { xs: '100%', sm: 124 }, // Full width on mobile, fixed on desktop
        minWidth: 90,
        maxWidth: 300,
        height: { xs: 38, sm: 42 },
        borderRadius: rounded ? '749.25px' : '8px',
        backgroundColor: variant === 'contained' ? computedBgColor : 'transparent',
        color: computedTextColor,
        borderColor: borderColor,
        borderWidth: variant === 'outlined' ? '1px' : 0,
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: { xs: '14px', sm: '15px' },
        py: { xs: 1, sm: 0 },
        px: { xs: 2, sm: 0 },
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