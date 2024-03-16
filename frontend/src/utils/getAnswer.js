export const getAnswer = async (question) => {
    try {
        const response = await fetch("http://localhost:5000/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: question }), // Wrap the question in an object and convert to JSON
        });
        const data = await response.json(); // Parse the response body as JSON
        return data.answer
    } catch(err){
        console.log(err)
    }
};
