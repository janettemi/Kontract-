import CustomButton from "@/conponent/CustomButton";
import { Box, Divider, Typography, Switch, FormControlLabel } from "@mui/material"
import { useState } from "react";

const Notification = () => {
  const [enabled, setEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);
  return (
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
        SYSTEM NOTIFICATIONS
      </Typography>
      <Divider sx={{ my: 1, borderColor: '#E0E0E0' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2, maxWidth: 400}}>
        <Typography fontWeight={500} fontSize="14px" color="#001C44">
          Turn on notification
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              color="primary"
            />
          }
          label=""
        />
      </Box>
      <Typography fontSize="12px" fontWeight={400} color="#808DA1" sx={{ maxWidth: 400 }}>
        Enable alerts to stay informed about important updates, messages, and activity on your account.
      </Typography>
      {enabled && (
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
          {/* Email Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography fontWeight={500} fontSize="14px" color="#001C44">Email</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={emailEnabled}
                  onChange={() => setEmailEnabled(!emailEnabled)}
                  color="primary"
                />
              }
              label=''
            />
          </Box>
          {emailEnabled && (
              <Box sx={{
                mt: 1,
                columnGap: '16px',
                ml: 3,
                width: '740px',
                height: '224px',
                opacity: 1,
                background: 'transparent',
                borderRadius: 0,
                boxSizing: 'border-box',
                alignItems: 'flex-start',
              }}>
              {/* New bids */}
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1,}}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">New bids</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Get notified by email when new bids are available for your contracts.
                </Typography>
              </Box>

              {/* News & Updates */}
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">News & Updates</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by email.
                </Typography>
              </Box>

              {/* Other News */}
             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">News & Updates</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by email.
                </Typography>
              </Box>
              </Box>


                {/* Other News */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">News & Updates</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by email.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">News & Updates</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by email.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <Box sx={{display:"flex", gap:1}}>
                 <Typography fontSize="14px" color="#001C44">News & Updates</Typography>
                <FormControlLabel
                  label=""
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  labelPlacement="start"
                />
                </Box>
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by email.
                </Typography>
              </Box>
             </Box>
            </Box>
          )}

          {/* SMS Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography fontWeight={500} fontSize="14px" color="#001C44">SMS</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={smsEnabled}
                  onChange={() => setSmsEnabled(!smsEnabled)}
                  color="primary"
                />
              }
              label=""
            />
          </Box>
          {smsEnabled && (
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'row', columnGap: 4, ml: 3, width: '100%' }}>
              {/* New bids */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">New bids</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Get notified by SMS when new bids are available for your contracts.
                </Typography>
              </Box>
              {/* News & Updates */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">News & Updates</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by SMS.
                </Typography>
              </Box>
              {/* Other News */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">Other News</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Get other important updates by SMS.
                </Typography>
              </Box>
            </Box>
          )}
          {/* WhatsApp Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography fontWeight={500} fontSize="14px" color="#001C44">WhatsApp</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={whatsappEnabled}
                  onChange={() => setWhatsappEnabled(!whatsappEnabled)}
                  color="primary"
                />
              }
              label=""
            />
          </Box>
          {whatsappEnabled && (
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'row', columnGap: 4, ml: 3, width: '100%' }}>
              {/* New bids */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">New bids</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Get notified by WhatsApp when new bids are available for your contracts.
                </Typography>
              </Box>
              {/* News & Updates */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">News & Updates</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Receive news, feature releases, and platform updates by WhatsApp.
                </Typography>
              </Box>
              {/* Other News */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 180 }}>
                <FormControlLabel
                  control={<input type="checkbox" style={{ accentColor: '#0718B9' }} />}
                  label={<Typography fontSize="14px" color="#001C44">Other News</Typography>}
                  labelPlacement="end"
                />
                <Typography fontSize="12px" color="#808DA1">
                  Get other important updates by WhatsApp.
                </Typography>
              </Box>
            </Box>
          )}
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <CustomButton
              variant="contained"
              style={{ background: '#0718B9', color: '#fff', minWidth: 100 }}>
              Save
            </CustomButton>
            <CustomButton
              variant="outlined"
              style={{ borderColor: '#0718B9', color: '#0718B9', minWidth: 100 }}
              onClick={() => {
                setEmailEnabled(true);
                setSmsEnabled(false);
                setWhatsappEnabled(false);
                setEnabled(false);
              }}
            >
              Cancel
            </CustomButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Notification