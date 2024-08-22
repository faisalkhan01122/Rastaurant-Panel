const Processing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        paddingTop: "100px", // Adjust as needed
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Light blur effect
        backdropFilter: "blur(2px)", // Blur effect
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <img
        src="/loading-loader.gif"
        alt="Loading..."
        style={{ width: "100px" }} // Adjust the size as needed
      />
      <h1 className="text-xl font-semibold text-white">Processing ....</h1>
    </div>
  );
};

export default Processing;
