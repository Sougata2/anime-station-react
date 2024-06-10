import React from "react";
import { updateUser } from "../services/authApi";

function Upload() {
  return (
    <button
      onClick={() =>
        updateUser({
          displayName: "Sougata",
          photoUrl:
            "https://firebasestorage.googleapis.com/v0/b/anime-station-7b2e4.appspot.com/o/Screenshot%202024-05-03%20013601.png?alt=media&token=60f9cc26-0c0f-4b34-9248-902e30895276",
        })
      }
    >
      Update
    </button>
  );
}

export default Upload;
