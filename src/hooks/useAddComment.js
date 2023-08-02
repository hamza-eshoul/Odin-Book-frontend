import { useState } from "react";

export const useAddComment = () => {
  const [isLoading, setIsLoading] = useState(null);

  const addComment = async (author, content, post_id) => {
    setIsLoading(true);

    const response = await fetch(
      "https://odin-book-api-g5zs.onrender.com/post/create_comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, content, post_id }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
    }

    if (response.ok) {
      setIsLoading(false);
      return json;
    }
  };

  return { addComment, isLoading };
};
