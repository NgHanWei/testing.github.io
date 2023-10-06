// Initialize Firebase
const firebaseConfig = {
    // apiKey: 'YOUR_API_KEY',
    // authDomain: 'YOUR_AUTH_DOMAIN',
    // projectId: 'YOUR_PROJECT_ID',
    apiKey: "AIzaSyC0TKsUEySiG7W5jugKqIk8jk-tFdRfUcI",
    authDomain: "sharing-links-16bba.firebaseapp.com",
    projectId: "sharing-links-16bba",
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Function to save text data to Firestore
  function saveData() {
    const dataInput = document.getElementById('dataInput').value;
  
    if (!dataInput) {
      alert('Please enter text data.');
      return;
    }
  
    db.collection('textData').add({
      text: dataInput
    })
    .then(() => {
      console.log('Text data saved to Firestore.');
      document.getElementById('dataInput').value = '';
    })
    .catch((error) => {
      console.error('Error saving text data:', error);
    });
  }
  
  // Function to load text data from Firestore
  function loadData() {
    const displayData = document.getElementById('displayData');
    displayData.innerHTML = '';
  
    db.collection('textData').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const text = doc.data().text;
          displayData.innerHTML += `<p>${text}</p>`;
        });
      })
      .catch((error) => {
        console.error('Error loading text data:', error);
      });
  }
  