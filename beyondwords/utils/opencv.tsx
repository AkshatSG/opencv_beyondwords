export const OpenCVGrayScale = async(image) => {
    try {
      console.log('inside');
      const response = await fetch('https://10.0.2.2:5000/convert_to_grayscale', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: image,
        }),
      });
      console.log('inside-inside');

      if (!response.ok) {
        // Handle API error, e.g., response.status contains the HTTP status code
        console.error('API error:', response.status);
        return 'ERROR';
      }

      const data = await response.json();

      // Set the summary received from the API
      return (data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
