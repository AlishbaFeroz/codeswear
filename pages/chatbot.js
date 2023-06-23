import { useState } from "react";

const responses = {
  hi: ["Hello!", "Hi there!", "Hey!"],
  how_are_you: ["I'm doing well, thanks for asking! I'm good, how about you?"],
  i_am_fine: ["great to know! tell me how i can asiste you?"],
  What_date_is_today: ["today is 06-may-2023"],
  i_need_your_help: ["Yes! sure please tell me how i can help you?"],
  tell_me_days_name: [
    "monday, tuesday, wednesday, thursday, friday, saturday, sunday",
  ],
  tell_me_months_name: [
    "january, february, march, april, may, june, july, august, september, october, november, december",
  ],
  write_one_to_ten_counting: [
    "one, two, three, four, five, six, seven, eight, nine, ten",
  ],
  default: ["I'm not sure what you mean...", "Can you please rephrase that?"],
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleInput = (e) => {
    if (e.key === "Enter") {
      const input = e.target.value.trim().toLowerCase();
      const possibleResponses = responses[input] || responses.default;
      const randomIndex = Math.floor(Math.random() * possibleResponses.length);
      const chosenResponse = possibleResponses[randomIndex];
      setResponse(chosenResponse);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div>
        {response && <p>{response}</p>}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleInput}
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
}
