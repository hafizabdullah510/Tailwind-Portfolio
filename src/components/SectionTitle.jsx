import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="pb-4 border-b border-slate-300">
      <h2 className="text-4xl tracking-wide capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle;
