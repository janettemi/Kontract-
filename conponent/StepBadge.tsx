import { Box, Typography } from '@mui/material';

type Step = {
  title: string;
  text: string;
};

type StepBadgeProps = {
  steps: Step[];
};

const StepBadge = ({ steps = [] }: StepBadgeProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0,
        position: 'relative',
        pl: 4,
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          {/* Left side: Circle and vertical line */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
            {/* Circle */}
            <Box
              sx={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                border: '1px solid #0718B9',
                zIndex: 1,
              }}
            />

            {/* Full height vertical line connecting to next circle */}
            {index !== steps.length - 1 && (
              <Box
                sx={{
                  width: '2px',
                  height: 100, // this should match the vertical gap between circles
                  backgroundColor: '#0000004D',
                  marginTop: '-1px', // slightly overlap the bottom of the circle
                }}
              />
            )}
          </Box>

          {/* Step text */}
          <Box sx={{ pt: '2px' }}>
            <Typography fontWeight={600} fontSize={16} color="#001C44">
              {step.title}
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              {step.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StepBadge;
