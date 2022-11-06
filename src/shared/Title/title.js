import React from "react";

const Title = ({title1, title2, description}) => {
  return (
    <>
      <h1 className="font-bold  text-4xl">
       {title1}<br/>{title2}
      </h1>
      <p className="text-xl py-4">
        {description}
      </p>
    </>
  );
};

export default Title;
