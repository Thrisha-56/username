
document.addEventListener("DOMContentLoaded", () => {
    const commentsContainer = document.querySelector(".comments");
    const newCommentInput = document.createElement("input");
    const addCommentButton = document.createElement("button");
  
    // Input Field
    newCommentInput.type = "text";
    newCommentInput.placeholder = "Write a comment...";
    newCommentInput.style.margin = "10px";
    newCommentInput.style.padding = "5px";
    newCommentInput.style.width = "70%";
    newCommentInput.style.borderRadius = "4px";
    newCommentInput.style.border = "1px solid #ccc";
  
    // Add Comment Button
    addCommentButton.innerText = "Add Comment";
    addCommentButton.style.padding = "5px 10px";
    addCommentButton.style.border = "none";
    addCommentButton.style.borderRadius = "4px";
    addCommentButton.style.backgroundColor = "#007bff";
    addCommentButton.style.color = "white";
    addCommentButton.style.cursor = "pointer";
  
    // Add event listener for adding comments
    addCommentButton.addEventListener("click", () => {
      const commentText = newCommentInput.value.trim();
      if (commentText) {
        const newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.style.color = "purple";
        newComment.innerHTML = `<strong>New Comment:</strong> ${commentText}`;
        commentsContainer.appendChild(newComment);
        newCommentInput.value = ""; // Clear the input field
      } else {
        alert("Please enter a comment!");
      }
    });
  
    // Append input and button to the comments section
    commentsContainer.appendChild(newCommentInput);
    commentsContainer.appendChild(addCommentButton);
  });
  