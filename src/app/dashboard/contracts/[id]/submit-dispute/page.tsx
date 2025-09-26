'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ReusableInput from '@/conponent/ReusableInput';
import CustomButton from '@/conponent/CustomButton';
import { useState } from 'react';
import BreadcrumbHeader from '@/conponent/BreadcrumbHeader';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SubmitDispute = () => {
  const params = useParams();
  const contractId = params?.id;
  const router = useRouter();

  //const theme = useTheme();
//  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [title, setTitle] = useState('');
  const [contractorName, setContractorName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'video/mp4'];
    const maxSize = 50 * 1024 * 1024; // 50MB

    if (!validTypes.includes(selectedFile.type)) {
      alert("Invalid file type. Only JPEG, PNG, PDF, and MP4 are allowed.");
      return;
    }

    if (selectedFile.size > maxSize) {
      alert("File too large. Maximum size is 50MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = () => {
    console.log("Dispute submitted for contract:", contractId);
    setShowSuccess(true);

    // You can also redirect after a timeout if needed
    // setTimeout(() => {
    //   router.push('/dashboard/contracts');
    // }, 3000);
  };

  const onBack = () => router.push('/dashboard/contracts');

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: 700,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* Breadcrumb */}
      <BreadcrumbHeader
        items={[
          { label: 'Contracts', onClick: onBack },
          { label: 'Submit a Dispute', isActive: true },
        ]}
      />

      {/* ✅ Success Box */}
      {showSuccess && (
        <Box
          sx={{
            width: 390,
            height: 126,
            borderRadius: 2,
            border: '1px solid #E0E0E0',
            backgroundColor: '#F3FCF4',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            mt: 2,
            mb: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <CheckCircleOutlineIcon sx={{ color: '#34C759' }} />
            <Typography fontWeight={600} color="#2B4263">
              You have successfully submitted a dispute.
            </Typography>
          </Box>
          <Typography fontSize={14} color="#6B7280">
            You will get a feedback from us within 48 hours.
          </Typography>
        </Box>
      )}

      <Typography
        variant="h5"
        fontWeight={600}
        fontSize={{ xs: 20, md: 24 }}
        color="#001C44"
      >
        Submit a Dispute
      </Typography>

      {/* Dispute Skill */}
      <Box>
        <Typography mb={1}>Dispute Skill</Typography>
        <ReusableInput
          placeholder="Brief title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      {/* Contractor Name */}
      <Box>
        <Typography mb={1}>Name of Contractor</Typography>
        <ReusableInput
          placeholder="Enter contractor’s name"
          value={contractorName}
          onChange={(e) => setContractorName(e.target.value)}
        />
      </Box>

      {/* Description */}
      <Box>
        <Typography mb={1}>Description</Typography>
        <textarea
          placeholder="Describe the issue in detail..."
          rows={6}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: 14,
            borderRadius: 8,
            border: '1px solid #ccc',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>

      {/* File Upload */}
      <Box>
        <Typography fontSize={14} fontWeight={500} mb={1}>
          Attach File
        </Typography>

        <label
          htmlFor="file-upload"
          style={{
            display: 'block',
            border: '1px dashed #A1A1A1',
            borderRadius: 8,
            padding: '24px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#F9FAFB',
          }}
        >
          <Typography fontSize={14} color="#6B7280">
            Choose a file or drag & drop it here.
          </Typography>
          <Typography fontSize={12} color="#9CA3AF">
            JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              textTransform: 'none',
              borderRadius: 2,
              px: 3,
            }}
          >
            Browse File
          </Button>
        </label>

        <input
          id="file-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf,.mp4"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {file && (
          <Typography fontSize={13} mt={1} color="#001C44">
            Selected: <strong>{file.name}</strong>
          </Typography>
        )}
      </Box>

      {/* Submit Button */}
      <Box>
        <CustomButton
          bgColor="#0718B9"
          textColor="#fff"
          type="button"
          sx={{
            border: '1px solid #0718B9',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#0718B9',
            cursor: 'pointer',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#0718B9',
            },
          }}
          onClick={handleSubmit}
        >
          Submit Dispute
        </CustomButton>
      </Box>
    </Box>
  );
};

export default SubmitDispute;
