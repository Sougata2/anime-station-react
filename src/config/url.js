const setting = 0;
const BASE_URL =
  setting === 1
    ? "http://localhost:4000/api/v2/hianime/"
    : "https://aniwatch-api-theta-neon.vercel.app/api/v2/hianime/";

export { BASE_URL };
