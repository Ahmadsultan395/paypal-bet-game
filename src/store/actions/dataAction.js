import api from '../utils/api'

export const SendFormData = (formData) => async (dispatch) => {
  
    try {
      const res = await api.post("/createOrder", formData);
      console.log("send form data api ",formData);
  
      return res;
    } catch (err) {
      throw err;
    }
  };


  export const SendOrderId = (orderId) => async (dispatch) => {
      console.log('resresdsadsadada',orderId)
    try {
      const res = await api.post(`/capturePayment?orderId=${orderId}`);
      return res;
    } catch (error) {
      console.error('API error:', error.response?.data || error.message); // Log detailed error
      throw error; // Rethrow the error to allow proper handling in the calling component
    }
  };
  