import { useState } from "react";
import { useAuthContext } from "../useContext/useAuthContext";

export const useSendFriendRequest = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isFriendRequest, setIsFriendRequest] = useState(false);
  const { user, dispatch } = useAuthContext();

  const sendFriendRequest = async (friend_id) => {
    setIsPending(true);
    setError(null);

    const response = await fetch(
      `https://odin-book-api-g5zs.onrender.com/users/send_friend_request`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ friend_id }),
      },
    );

    const json = await response.json();

    if (!response.ok) {
      setIsPending(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsPending(false);
      setIsFriendRequest(true);
      dispatch({
        type: "UPDATE_USER",
        payload: { ...json, token: user.token },
      });
    }
  };

  return { sendFriendRequest, isFriendRequest, isPending, error };
};
