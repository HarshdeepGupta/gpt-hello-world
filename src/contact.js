const form = document.querySelector("#contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const data = {
    records: [
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ],
  };

  fetch("https://api.airtable.com/v0/process.env.AIRTABLE_BASE_ID/Responses", {
    method: "POST",
    headers: {
      Authorization: "Bearer process.env.AIRTABLE_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Thank you for your message!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Oops! Something went wrong.");
    });
});