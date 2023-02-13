function PurpleGradient(props) {
  return (
    <header className="gradient-bg w-full px-10 py-64 text-white font-bold ">
      <h1 className="text-5xl max-w-5xl text-center mx-auto">
        {" "}
        {props.children}
      </h1>
    </header>
  );
}

export default PurpleGradient;
