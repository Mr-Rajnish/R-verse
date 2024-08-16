
const token="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";
const inputText=document.getElementById("input");
const image=document.getElementById("image");
const button=document.getElementById("btn");
async function query() {
    image.src="./loading-effect.gif";
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
        
		{
			headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function(){
    query().then((response) => {
        // Use image
        const objectURL=URL.createObjectURL(response);
        image.src=objectURL;
        image.alt="could not find";
    });
})
