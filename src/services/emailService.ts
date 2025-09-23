import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_pybn57s';
const TEMPLATE_ID = 'template_1eou2bf';
const PUBLIC_KEY = 'ihS--bbrZD0hmh42r';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Arun Kumar',
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
