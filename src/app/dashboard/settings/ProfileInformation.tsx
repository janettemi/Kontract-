import { Box, Typography, Avatar, TextField, Button, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfileInformation() {
  // Example data, replace with real data as needed
  const [editMode, setEditMode] = useState(false);
  const [profEditMode, setProfEditMode] = useState(false);
  const skillOptions = ['Web Development', 'UI/UX Design', 'Data Science', 'Mobile Development'];
  const industryOptions = ['Technology', 'Finance', 'Healthcare', 'Education'];
  const [user, setUser] = useState({
    firstName: 'Abdulhamid',
    lastName: 'Ayo',
    email: 'abdulhamid.ayo@email.com',
    phone: '+234 801 234 5678',
    image: '/image/image (3).png',
    verified: true,
    skill: ['Web Development'], // Now an array
    industry: 'Technology',
    location: 'Lagos, Nigeria',
    bio: 'Passionate web developer with over 5 years of experience in building scalable web applications. Skilled in React, Node.js, and cloud technologies.',
  });
  const [editValues, setEditValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  });
  const [profEditValues, setProfEditValues] = useState({
    skill: user.skill,
    industry: user.industry,
    location: user.location,
    bio: user.bio,
  });
  const handleProfEditClick = () => {
    setProfEditValues({
      skill: user.skill,
      industry: user.industry,
      location: user.location,
      bio: user.bio,
    });
    setProfEditMode(true);
  };

  const handleProfCancel = () => {
    setProfEditMode(false);
  };

  const handleProfSave = () => {
    setUser((prev) => ({ ...prev, ...profEditValues }));
    setProfEditMode(false);
  };


  // Separate handlers for TextField and Select (with multi-select for skill)
  const handleProfTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfSelectChange = (e: SelectChangeEvent<string[] | string>) => {
    const { name, value } = e.target;
    if (name === 'skill') {
      setProfEditValues((prev) => ({ ...prev, skill: typeof value === 'string' ? value.split(',') : value }));
    } else {
      setProfEditValues((prev) => ({ ...prev, [name as string]: value }));
    }
  };

  const handleEditClick = () => {
    setEditValues({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    });
    setEditMode(true);
  };

  
  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, ...editValues }));
    setEditMode(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', alignItems: 'center' }}>
      {/* Personal Details Section */}
      <Box
        sx={{
          width: { xs: '100%', sm: 789 },
          minWidth: 320,
          maxWidth: '100%',
          height: editMode ? 340 : 268,
          transition: 'height 0.2s',
          bgcolor: '#FFFFFF',
          borderRadius: '10px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E0E0E0',
          opacity: 1,
          p: 3,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography fontWeight={600} fontSize="18px" color="#001C44">Personal details</Typography>
          {!editMode && (
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: '#0718B9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                ml: 2,
              }}
              onClick={handleEditClick}
            >
              <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
            </Box>
          )}
        </Box>
        <hr color="#E0E0E0" style={{ margin: 0, marginBottom: 16 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Avatar src={user.image} alt={user.firstName + ' ' + user.lastName} sx={{ width: 70, height: 70 }} />
          {!editMode ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography fontWeight={500} fontSize="12px" color="#808DA1">Full name</Typography>
                <Typography fontWeight={400} fontSize="14px" color="#0A0D14">{user.firstName + ' ' + user.lastName}</Typography>
              </Box>
              <Box>
                <Typography fontSize="12px" fontWeight={500} color="#808DA1">Email address</Typography>
                <Typography fontSize="14px" fontWeight={400} color="#0A0D14">{user.email}</Typography>
              </Box>
              <Box>
                <Typography fontSize="12px" fontWeight={500} color="#808DA1">Phone number</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography fontSize="14px" fontWeight={400} color="#0A0D14">{user.phone}</Typography>
                  {user.verified && <Image src="/image/Top Status [1.0].png" alt="Verified" width={16} height={16} />}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box>
                  <Typography fontWeight={500} fontSize="12px" color="#808DA1">First name</Typography>
                  <TextField
                    size="small"
                    name="firstName"
                    value={editValues.firstName}
                    onChange={handleInputChange}
                    sx={{
                      mt: 0.5,
                      width: 300,
                      height: 40,
                      opacity: 1,
                      '& .MuiInputBase-root': {
                        borderRadius: '10px',
                        height: 40,
                        boxSizing: 'border-box',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 1,
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography fontWeight={500} fontSize="12px" color="#808DA1">Last name</Typography>
                  <TextField
                    size="small"
                    name="lastName"
                    value={editValues.lastName}
                    onChange={handleInputChange}
                    sx={{
                      mt: 0.5,
                      width: 300,
                      height: 40,
                      opacity: 1,
                      '& .MuiInputBase-root': {
                        borderRadius: '10px',
                        height: 40,
                        boxSizing: 'border-box',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 1,
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
              <Box>
                <Typography fontSize="12px" fontWeight={500} color="#808DA1">Email address</Typography>
                <TextField
                  size="small"
                  name="email"
                  value={editValues.email}
                  onChange={handleInputChange}
                  sx={{
                    mt: 0.5,
                    width: 300,
                    height: 40,
                    opacity: 1,
                    '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      height: 40,
                      boxSizing: 'border-box',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderWidth: 1,
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography fontSize="12px" fontWeight={500} color="#808DA1">Phone number</Typography>
                <TextField
                  size="small"
                  name="phone"
                  value={editValues.phone}
                  onChange={handleInputChange}
                  sx={{
                    mt: 0.5,
                    width: 300,
                    height: 40,
                    opacity: 1,
                    '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      height: 40,
                      boxSizing: 'border-box',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderWidth: 1,
                    },
                  }}
                />
              </Box>
             </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSave} sx={{ textTransform: 'none', bgcolor: '#0718B9' }}>
                  Save
                </Button>
                <Button variant="outlined" color="primary" onClick={handleCancel} sx={{ textTransform: 'none', borderColor: '#0718B9', color: '#0718B9' }}>
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>


      {/* Professional Information Section */}
      <Box
        sx={{
          width: { xs: '100%', sm: 789 },
          minWidth: 320,
          maxWidth: '100%',
          height: profEditMode ? 600 : 320,
          transition: 'height 0.2s',
          bgcolor: '#FFFFFF',
          borderRadius: '10px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E0E0E0',
          opacity: 1,
          p: 3,
          boxSizing: 'border-box',
          display: 'flex',      
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography fontWeight={600} fontSize="18px" color="#001C44">Professional Information</Typography>
          {!profEditMode && (
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: '#0718B9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                ml: 2,
              }}
              onClick={handleProfEditClick}
            >
              <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
            </Box>
          )}
        </Box>
        <hr color="#E0E0E0" style={{ margin: 0, marginBottom: 16 }} />
        {!profEditMode ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography fontWeight={500} fontSize="12px" color="#808DA1">Skill</Typography>
              <Typography fontWeight={400} fontSize="14px" color="#0A0D14">{Array.isArray(user.skill) ? user.skill.join(', ') : user.skill}</Typography>
            </Box>
            <Box>
              <Typography fontSize="12px" fontWeight={500} color="#808DA1">Industry</Typography>
              <Typography fontSize="14px" fontWeight={400} color="#0A0D14">{user.industry}</Typography>
            </Box>
            <Box>
              <Typography fontSize="12px" fontWeight={500} color="#808DA1">Location</Typography>
              <Typography fontSize="14px" fontWeight={400} color="#0A0D14">{user.location}</Typography>
            </Box>
            <Box>
              <Typography fontSize="12px" fontWeight={500} color="#808DA1">Short Bio</Typography>
              <Typography fontSize="14px" fontWeight={400} color="#0A0D14">{user.bio}</Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            p: 3,
          }}>
            <FormControl sx={{ width: 300 }} size="small">
              <InputLabel id="skill-label">Skill</InputLabel>
              <Select
                labelId="skill-label"
                name="skill"
                multiple
                value={profEditValues.skill}
                label="Skill"
                onChange={handleProfSelectChange}
                renderValue={(selected) => Array.isArray(selected) ? selected.join(', ') : selected}
                sx={{ borderRadius: '10px', minHeight: 40 }}
              >
                {skillOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: 300 }} size="small">
              <InputLabel id="industry-label">Industry</InputLabel>
              <Select
                labelId="industry-label"
                name="industry"
                value={profEditValues.industry}
                label="Industry"
                onChange={handleProfSelectChange}
                sx={{ borderRadius: '10px', height: 40 }}
              >
                {industryOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              <Typography fontSize="12px" fontWeight={500} color="#808DA1">Location</Typography>
              <TextField
                size="small"
                name="location"
                value={profEditValues.location}
                onChange={handleProfTextInputChange}
                sx={{
                  mt: 0.5,
                  width: 300,
                  height: 40,
                  opacity: 1,
                  '& .MuiInputBase-root': {
                    borderRadius: '10px',
                    height: 40,
                    boxSizing: 'border-box',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 1,
                  },
                }}
              />
            </Box>
            <Box>
              <Typography fontSize="12px" fontWeight={500} color="#808DA1">Short Bio</Typography>
              <TextField
                size="small"
                name="bio"
                value={profEditValues.bio}
                onChange={handleProfTextInputChange}
                multiline
                minRows={2}
                maxRows={4}
                sx={{
                  mt: 0.5,
                  width: 300,
                  borderRadius: '10px',
                  opacity: 1,
                  '& .MuiInputBase-root': {
                    borderRadius: '10px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 1,
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleProfSave} sx={{ textTransform: 'none', bgcolor: '#0718B9' }}>
                Save
              </Button>
              <Button variant="outlined" color="primary" onClick={handleProfCancel} sx={{ textTransform: 'none', borderColor: '#0718B9', color: '#0718B9' }}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
