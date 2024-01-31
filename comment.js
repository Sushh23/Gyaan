document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        if (name && comment) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `
                <strong>${name}</strong>
                <p>${comment}</p>
                <button class="reply-btn">Reply</button>
            `;

            const replyForm = document.createElement("form");
            replyForm.classList.add("reply-form");
            replyForm.innerHTML = `
                <input type="text" placeholder="Your Name" required>
                <textarea placeholder="Add a public reply..." required></textarea>
                <button type="submit">Reply</button>
            `;

            commentDiv.appendChild(replyForm);
            commentsContainer.appendChild(commentDiv);

            // Clear the form fields
            document.getElementById("name").value = "";
            document.getElementById("comment").value = "";

            // Handle replies
            const replyButton = commentDiv.querySelector(".reply-btn");
            replyButton.addEventListener("click", function () {
                replyForm.style.display = "block";
            });

            replyForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const replyName = replyForm.querySelector("input").value;
                const replyComment = replyForm.querySelector("textarea").value;

                if (replyName && replyComment) {
                    const replyDiv = document.createElement("div");
                    replyDiv.classList.add("comment");
                    replyDiv.classList.add("reply");
                    replyDiv.innerHTML = `
                        <strong>${replyName}</strong>
                        <p>${replyComment}</p>
                    `;
                    commentDiv.appendChild(replyDiv);

                    // Clear the reply form fields
                    replyForm.querySelector("input").value = "";
                    replyForm.querySelector("textarea").value = "";

                    // Hide the reply form
                    replyForm.style.display = "none";
                }
            });
        }
    });
});
