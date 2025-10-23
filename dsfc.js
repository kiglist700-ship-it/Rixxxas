function notifyDiscord(message) {
  fetch(discordWebHook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: message })
  })
  .then(res => {
    if (res.ok) {
      console.log("Message sent to Discord!");
    } else {
      console.error(" Discord response error:", res.status);
    }
  })
  .catch(error => console.error(" Fetch error:", error));
}