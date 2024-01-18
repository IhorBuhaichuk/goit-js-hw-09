document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
  
    const saveFormData = () => {
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };
  
    const restoreFormData = () => {
      const savedFormData = localStorage.getItem('feedback-form-state');
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        feedbackForm.elements.email.value = parsedData.email;
        feedbackForm.elements.message.value = parsedData.message;
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };
  
      if (formData.email && formData.message) {
        console.log(formData);
      }
  
      localStorage.removeItem('feedback-form-state');
      feedbackForm.reset();
    };
  
    const handleInput = () => {
      saveFormData();
    };
  
    feedbackForm.addEventListener('input', handleInput);
    feedbackForm.addEventListener('submit', handleSubmit);
  
    restoreFormData();
  });
  