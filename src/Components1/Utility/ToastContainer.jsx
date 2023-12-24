import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
  const handleShowToast = () => {
    // Customized toast at the bottom
    toast.success('This is a custom toast at the bottom', {
      position: 'bottom-center', // or 'bottom-left' or 'bottom-right'
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Custom Toast</button>
    </div>
  );
};

export default ToastContainer;

