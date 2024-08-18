import { supabaseClient } from './supabaseClient.js';

const sendButton = document.getElementById('submit');

const getData = async () => {
  const adultName = document.getElementById('adult-name').value;
  const childName = document.getElementById('child-name').value;
  const phoneNumber = document.getElementById('phone').value;
  const otherInfo = document.getElementById('aditional-requirements').value;

  const { data, error } = await supabaseClient
    .from('attendees')
    .insert([
      { 
        adult_name: adultName, 
        child_name: childName, 
        phone: phoneNumber, 
        additional_requirements: otherInfo 
      }
    ]);

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success:', data);
    alert('¡Gracias por confirmar tu asistencia!');
  }
};

sendButton.addEventListener('click', getData);
