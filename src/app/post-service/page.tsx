'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, TextField, Typography, MenuItem, LinearProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const PostService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState('');
  const [contractorCount, setContractorCount] = useState('');
  const [language, setLanguage] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false); // 👈 Loading state

  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categoryOptions = [
    { label: 'Engineering', value: 'engineering' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
  ];

  const skillOptions = [
    { label: 'React', value: 'react' },
    { label: 'Figma', value: 'figma' },
    { label: 'SEO', value: 'seo' },
  ];

  const languageOptions = [
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'Spanish', value: 'spanish' },
  ];

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px',
    },
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleNextClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/post-service/service-location");
    }, 1000); // simulate delay
  };

  return (
    <Box sx={{ display: 'flex', gap: 15, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Left Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#6B7280' }}>1/3</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Create service</Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>Service details</Typography>

        <Typography sx={{ color: '#6B7280', fontSize: 14 }}>
          Contract details include title, description, required<br />
          skills, and professional category for clarity and proper classification.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 300 }}>
        {/* Job Title */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Service title</label>
          <TextField
            fullWidth
            placeholder="Enter service title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={inputStyles}
          />
        </Box>

        {/* Description */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Job description</label>
          <TextField
            fullWidth
            multiline
            minRows={6}
            placeholder="Already have a description? Paste it here."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={inputStyles}
          />
        </Box>

        {/* Categories */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Categories</label>
          <TextField
            select
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={inputStyles}
          >
            {categoryOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Skills */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Skills</label>
          <TextField
            select
            fullWidth
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            sx={inputStyles}
          >
            {skillOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Contractor Count */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>
            How many contractors are you hiring?
          </label>
          <TextField
            fullWidth
            type="number"
            placeholder="Input number of contractors you want to hire"
            value={contractorCount}
            onChange={(e) => setContractorCount(e.target.value)}
            sx={inputStyles}
          />
        </Box>

        {/* Language */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Language (Optional)</label>
          <TextField
            select
            fullWidth
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={inputStyles}
          >
            {languageOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Proficiency (reuses language state for now) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Proficiency</label>
          <TextField
            select
            fullWidth
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={inputStyles}
          >
            {languageOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Attachment */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Attachment (Optional)</label>
          <Box
            sx={{
              border: '1px dashed #ccc',
              p: 2,
              borderRadius: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Typography variant="body2">
              Choose a file or drag & drop it here.
            </Typography>
            <Typography variant="caption">
              JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
            </Typography>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf,.mp4"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <Box
              component="button"
              type="button"
              onClick={handleBrowseClick}
              sx={{
                mt: 1,
                px: 3,
                py: 1,
                borderRadius: '16px',
                border: '1px solid #0718B9',
                backgroundColor: 'white',
                color: '#0718B9',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              Browse File
            </Box>

            {fileName && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Typography variant="caption" sx={{ color: '#4B5563' }}>
                  Selected: {fileName}
                </Typography>
                <DeleteOutlineIcon
                  onClick={() => {
                    setFileName('');
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  sx={{ color: 'red', cursor: 'pointer', fontSize: 20 }}
                  titleAccess="Remove file"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Bottom Navigation Buttons */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          height: '90px',
          mt: 5,
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          backgroundColor: '#fff',
        }}
      >
        <Box
          component="button"
          type="button"
          sx={{
            border: '1px solid #0718B9',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: '#0718B9',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
          onClick={() => router.push('/dashboard/services')}
        >
          Back
        </Box>

        <Box
          component="button"
          type="button"
          onClick={handleNextClick}
          sx={{
            border: 'none',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: 'white',
            backgroundColor: '#0718B9',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#144b2f',
            },
          }}
        >
          Next: Location
        </Box>
      </Box>

      {/* Loading Indicator */}
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Box>
  );
};

export default PostService;
