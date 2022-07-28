import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import "./successmodel.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export default function SuccessModel(props) {
  const { open, setOpen } = props
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClearIcon className='clearicon ' onClick={() => { handleClose() }} />
          <Box className='checkicon'>
            <CheckCircleIcon sx={{ color: "#5dcc1a", fontSize: "100px" }} />
          </Box>
          <Box className='title'>
            <h4 className='title'>Purchase successfull</h4>
          </Box>
          <Box className='text_1'>
            <h6 className='text_1'>You Will Get Your Product Soon!</h6>
          </Box>
          <Box className='text_1'>
            <h6 className='text_1'>Get ready to experience the spatial audio with<br />
              Adaptive EQ that tunes music to your ear.</h6>
          </Box>

        </Box>
      </Modal>
    </div>
  );
}