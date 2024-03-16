import React,{useState} from 'react'
import { getAnswer } from '../utils/getAnswer'
import '../components/askPrompt.css'
import { useTheme } from '../context/ThemeContext'

const AskPrompt = () => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {theme, toggleTheme} = useTheme()

    const handleChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the default form submission
      setIsLoading(true);
      const answerResponse = await getAnswer(question);
      console.log(answerResponse)
      setAnswer(answerResponse);
      setIsLoading(false); // Move this inside the setTimeout callback if you want to add a delay
    };


  return (
    <div className="container">
      <h4>Ask me a question</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question" className="form-label">
            Question:
          </label>
          <input
            type="text"
            id="question"
            name="question"
            className="form-control"
            value={question}
            onChange={handleChange}
          />
          <button type="submit" className="submit">
            Ask Me!
          </button>
        </div>
      </form>
      <div className="answer">
        <p>{isLoading ? "Thinking..." : answer}</p>
      </div>
      <label class="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default AskPrompt