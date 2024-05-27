function Description({ children }) {
  return (
    <p>
      {children?.slice(0, 150)}
      {children?.length >= 99 ? "..." : ""}
    </p>
  );
}

export default Description;
