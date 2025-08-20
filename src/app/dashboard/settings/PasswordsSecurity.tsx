import { Box, Typography, TextField, Divider, Button, Switch, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import CustomButton from '@/conponent/CustomButton';

export default function PasswordsSecurity() {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndLogout = () => {
    // Implement password change and logout logic here
  };

  const handleCancel = () => {
    setValues({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  // State for toggles
  const [securityQOpen, setSecurityQOpen] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [twoFactorText, setTwoFactorText] = useState(false);
  const [twoFactorEmail, setTwoFactorEmail] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [securitySaved, setSecuritySaved] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const securityQuestions = [
    'What is your mother’s maiden name?',
    'What was the name of your first pet?',
    'What was the name of your elementary school?',
    'What is your favorite food?',
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', alignItems: 'center' }}>
      {/* Change Password Section */}
      <Box
        sx={{
          width: { xs: '100%', sm: 789 },
          minWidth: 320,
          maxWidth: '100%',
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
          gap: 3,
          mt: 2,
        }}
      >
        <Typography fontWeight={500} fontSize="12px" color="#001C44">
          Change password
        </Typography>
        <Divider sx={{ my: 1, borderColor: '#E0E0E0' }} />
        <Typography fontSize="14px" color="#808DA1" mb={2}>
          You’ll need to log in on all devices after changing your password.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
          <Box>
            <Typography fontSize="12px" fontWeight={500} color="#808DA1">
              Current password
            </Typography>
            <TextField
              size="small"
              name="currentPassword"
              type="password"
              value={values.currentPassword}
              onChange={handleChange}
              sx={{ mt: 0.5, width: '100%', borderRadius: '10px' }}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Box>
          <Box>
            <Typography fontSize="12px" fontWeight={500} color="#808DA1">
              New password
            </Typography>
            <TextField
              size="small"
              name="newPassword"
              type="password"
              value={values.newPassword}
              onChange={handleChange}
              sx={{ mt: 0.5, width: '100%', borderRadius: '10px' }}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Box>
          <Box>
            <Typography fontSize="12px" fontWeight={500} color="#808DA1">
              Confirm password
            </Typography>
            <TextField
              size="small"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              sx={{ mt: 0.5, width: '100%', borderRadius: '10px' }}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Box>
          <Typography fontSize="12px" color="#808DA1" mt={1}>
            8 characters or longer. Combine upper and lowercase letters and numbers.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <CustomButton
            variant="contained"
            style={{ background: '#0718B9', color: '#fff', minWidth: 160 }}
            onClick={handleSaveAndLogout}
          >
            Save and log out
          </CustomButton>
          <CustomButton
            variant="outlined"
            style={{ borderColor: '#0718B9', color: '#0718B9', minWidth: 120 }}
            onClick={handleCancel}
          >
            Cancel
          </CustomButton>
        </Box>
      </Box>

      {/* Verification Section */}
      <Box
        sx={{
          width: { xs: '100%', sm: 789 },
          minWidth: 320,
          maxWidth: '100%',
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
          gap: 3,
          mt: 2,
        }}
      >
        <Typography fontWeight={500} fontSize="12px" color="#001C44">
          Verification
        </Typography>
        <Divider sx={{ my: 1, borderColor: '#E0E0E0' }} />
        {/* Phone number with verify icon */}
        <Box sx={{ display: 'flex',flexDirection:"column" , gap: 2 }}>
            <Box sx={{ display: 'flex'}}>
                <Typography fontSize="12px" fontWeight={500} color="#808DA1" sx={{ minWidth: 120 }}>
                Phone number
                </Typography>
                <Image src="/image/Top Status [1.0].png" alt="Verified" width={16} height={16} />
            </Box>
          <Typography fontSize="14px" color="#0A0D14">+234 801 234 5678</Typography>
        </Box>

        {/* Email address with verify button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography fontSize="12px" fontWeight={500} color="#808DA1" sx={{ minWidth: 120 }}>
            Email address
          </Typography>
          <Typography fontSize="14px" color="#0A0D14">abdulhamid.ayo@email.com</Typography>
          </Box>
          <Button variant="outlined" size="small" sx={{ borderColor: '#0718B9', color: '#0718B9', textTransform: 'none', ml: 1 }}>
            Verify now
          </Button>
        </Box>

        {/* Security questions with toggle */}
        <Box sx={{display:"flex", flexDirection:"column",gap:1}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography fontSize="12px" fontWeight={500} color="#808DA1" sx={{ minWidth: 120 }}>
              Security questions
            </Typography>
            <Switch
              checked={securityQOpen || securitySaved}
              onChange={() => {
                if (securitySaved) {
                  setUpdateMode(true);
                } else {
                  setSecurityQOpen((v) => !v);
                }
              }}
              color="primary"
            />
          </Box>
          {/* If not saved, show create form */}
          {!securitySaved && (
            <>
              <Typography 
                fontSize="12px"
                color="#808DA1"
                sx={{
                  width: '370px',
                  lineHeight: '20px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.32%',
                  minWidth: 120
                }}
              >
                By creating a security question, you will add an additional layer of protection for changing your password.
              </Typography>
              {securityQOpen && (
                <Box sx={{ mt: 1, mb: 1, pl: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="security-question-label">Select a question</InputLabel>
                    <Select
                      labelId="security-question-label"
                      value={securityQuestion}
                      label="Select a question"
                      onChange={e => setSecurityQuestion(e.target.value)}
                    >
                      {securityQuestions.map((q) => (
                        <MenuItem key={q} value={q}>{q}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    label="Your answer"
                    value={securityAnswer}
                    onChange={e => setSecurityAnswer(e.target.value)}
                    sx={{ borderRadius: '10px' }}
                    InputProps={{ sx: { borderRadius: '10px' } }}
                  />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <CustomButton
                      variant="contained"
                      style={{ background: '#0718B9', color: '#fff', minWidth: 100 }}
                      onClick={() => {
                        setCurrentQuestion(securityQuestion);
                        setCurrentAnswer(securityAnswer);
                        setSecuritySaved(true);
                        setSecurityQOpen(false);
                        setSecurityQuestion('');
                        setSecurityAnswer('');
                      }}
                    >
                      Save
                    </CustomButton>
                    <CustomButton
                      variant="outlined"
                      style={{ borderColor: '#0718B9', color: '#0718B9', minWidth: 100 }}
                      onClick={() => {
                        setSecurityQuestion('');
                        setSecurityAnswer('');
                        setSecurityQOpen(false);
                      }}
                    >
                      Cancel
                    </CustomButton>
                  </Box>
                </Box>
              )}
            </>
          )}
          {/* If saved and not updating, show current and update link */}
          {securitySaved && !updateMode && (
            <Box sx={{ mt: 1, mb: 1, pl: 2, display: 'flex', flexDirection: 'column', gap: 1, maxWidth: 400 }}>
              <Typography fontSize="12px" color="#808DA1" mb={0.5}>
                Current Question
              </Typography>
              <Typography fontSize="13px" color="#0A0D14" fontWeight={500}>
                {currentQuestion}
              </Typography>
              <Typography fontSize="12px" color="#808DA1" mt={1}>
                Answer: <span style={{ color: '#0A0D14' }}>{currentAnswer}</span>
              </Typography>
              <Button
                variant="text"
                sx={{ color: '#0718B9', textTransform: 'none', alignSelf: 'flex-start', pl: 0, mt: 1 ,textDecoration: 'underline'}}
                onClick={() => {
                  setUpdateMode(true);
                  setNewQuestion(currentQuestion);
                  setNewAnswer(currentAnswer);
                }}
              >
                Update question and answer
              </Button>
            </Box>
          )}
          {/* If updating, show update form */}
          {securitySaved && updateMode && (
            <Box sx={{ mt: 1, mb: 1, pl: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
              <Typography fontSize="12px" color="#808DA1">
                Current Question
              </Typography>
              <TextField
                size="small"
                value={currentQuestion}
                disabled
                sx={{ borderRadius: '10px' }}
                InputProps={{ sx: { borderRadius: '10px' } }}
              />
              <Typography fontSize="12px" color="#808DA1">
                Answer
              </Typography>
              <TextField
                size="small"
                value={currentAnswer}
                onChange={e => setCurrentAnswer(e.target.value)}
                sx={{ borderRadius: '10px' }}
                InputProps={{ sx: { borderRadius: '10px' } }}
              />
              <Divider sx={{ my: 1, borderColor: '#E0E0E0' }} />
              <FormControl fullWidth size="small">
                <InputLabel id="new-security-question-label">New question</InputLabel>
                <Select
                  labelId="new-security-question-label"
                  value={newQuestion}
                  label="New question"
                  onChange={e => setNewQuestion(e.target.value)}
                >
                  {securityQuestions.map((q) => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                size="small"
                label="New answer"
                value={newAnswer}
                onChange={e => setNewAnswer(e.target.value)}
                sx={{ borderRadius: '10px' }}
                InputProps={{ sx: { borderRadius: '10px' } }}
              />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CustomButton
                  variant="contained"
                  style={{ background: '#0718B9', color: '#fff', minWidth: 100 }}
                  onClick={() => {
                    setCurrentQuestion(newQuestion);
                    setCurrentAnswer(newAnswer);
                    setUpdateMode(false);
                  }}
                >
                  Save
                </CustomButton>
                <CustomButton
                  variant="outlined"
                  style={{ borderColor: '#0718B9', color: '#0718B9', minWidth: 100 }}
                  onClick={() => {
                    setUpdateMode(false);
                    setNewQuestion(currentQuestion);
                    setNewAnswer(currentAnswer);
                  }}
                >
                  Cancel
                </CustomButton>
              </Box>
            </Box>
          )}
        </Box>


        {/* Two factor authentication with toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography fontSize="12px" fontWeight={500} color="#808DA1" sx={{ minWidth: 120 }}>
            Two factor authentication
          </Typography>
          <Switch
            checked={twoFactorEnabled}
            onChange={() => setTwoFactorEnabled((v) => !v)}
            color="primary"
          />
        </Box>
        <Typography
              fontSize="12px"
              color="#808DA1"
              sx={{
                width: '370px',
                lineHeight: '20px',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.32%',
              }}
            >
              To help keep your account secure, we'll ask you to submit a code when using a new device to log in. We'll send the code via email or text message notification.
            </Typography>
        {twoFactorEnabled && (
          <Box sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography fontSize="12px" color="#808DA1" sx={{ minWidth: 180 }}>
                Receive code via text message
              </Typography>
              <Switch
                checked={twoFactorText}
                onChange={() => setTwoFactorText((v) => !v)}
                sx={{color:"#0718B9"}} 
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography fontSize="12px" color="#808DA1" sx={{ minWidth: 180 }}>
                Receive code via email
              </Typography>
              <Switch
                checked={twoFactorEmail}
                onChange={() => setTwoFactorEmail((v) => !v)}
                sx={{color:"#0718B9"}} 
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
