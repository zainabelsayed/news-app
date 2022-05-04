const title = document.getElementById("title");
const text = document.getElementById("text");
const createNewsBtn = document.getElementById("createNewsBtn");

async function postNews() {
  await fetch(
    "https://mi-linux.wlv.ac.uk/~2019330/self/public/index.php/home/create",
    {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        body: text.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json()).then((json) => console.log(json));
}

createNewsBtn.addEventListener("click", postNews);
