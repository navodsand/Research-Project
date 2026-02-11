document.getElementById("analyzeBtn").addEventListener("click", analyzeText);

function analyzeText() {
    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    // Safety check
    if (typeof nlp === "undefined") {
        alert("NLP library not loaded");
        return;
    }

    const doc = nlp(text);

    document.getElementById("nounCount").innerText =
        doc.nouns().out("array").length;

    document.getElementById("verbCount").innerText =
        doc.verbs().out("array").length;

    document.getElementById("pronounCount").innerText =
        doc.pronouns().out("array").length;

    document.getElementById("adjectiveCount").innerText =
        doc.adjectives().out("array").length;
}
