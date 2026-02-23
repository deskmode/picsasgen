async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const model = document.getElementById("modelSelect").value;
  const resultImage = document.getElementById("resultImage");
  const loading = document.getElementById("loading");

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  loading.classList.remove("hidden");
  resultImage.classList.add("hidden");

  try {
    const response = await fetch("YOUR_BACKEND_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt,
        model: model
      })
    });

    const data = await response.json();

    if (data.image) {
      resultImage.src = data.image;
      resultImage.classList.remove("hidden");
    }

  } catch (error) {
    alert("Error generating image");
    console.error(error);
  }

  loading.classList.add("hidden");
}
