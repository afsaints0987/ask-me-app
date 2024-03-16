const environment = process.env.NODE_ENV;
let api_url;
if(environment === "development"){
    api_url = "http://localhost:5000/ask";
} else {
    api_url = "https://ask-me-app-backend.vercel.app/ask";
}

export const getAnswer = async (question) => {
    try {
        const response = await fetch(api_url, {
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
