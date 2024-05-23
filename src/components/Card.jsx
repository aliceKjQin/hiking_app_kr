const Card = ({ children, bg = "bg-teal-100" }) => {
  return (
    // children is whatever that's wrapped inside the Card component
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  );
};

export default Card;
