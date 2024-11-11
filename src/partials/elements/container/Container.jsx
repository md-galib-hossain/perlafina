const Container = ({ children, style }) => {
  return (
    <div
      style={style}
      className="px-5 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1650px] mx-auto"
    >
      {children}
    </div>
  );
};

export default Container;
