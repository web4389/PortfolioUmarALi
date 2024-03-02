import React from "react";

const Card = (props) => {
  const { x } = props;
  return (
    <div className="sm:w-[350px] font-exo2 border border-solid border-[#5c5c5c] rounded px-[18px] py-2 max-sm:w-[300px]">
      <header>
        <h1 className="text-2xl font-[600] ">{x.Title}</h1>
        <p className="pb-2 text-[#444444]">{x.desc}</p>
        <div className="h-[2px] w-[100%] bg-[#bebdbd]"></div>
      </header>
      <main className="pt-2">
        <img
          src={`../src/assets/${x.imgUrl}`}
          alt={`${x.imgAlt}`}
          className="rounded-[9px] w-[100%] h-[210px] object-cover pl-[2px] mt-[5px] mb-[10px]"
        />
        <aside>
          <h1 className="text-xl">{x.secTitle}</h1>
        </aside>
        <p className="pb-6 text-[#444444]">{x.secDesc}</p>
        <div className="h-[1px] w-[100%] bg-[#828180]"></div>
      </main>
      <footer className="py-4 flex flex-wrap gap-x-2 gap-y-[6px] ">
        {x.tags.map((x) => {
          return (
            <h6
              className="text-[#606060] border border-solid border-[#6b6b6b] px-[16px] py-[2px] inline rounded-2xl"
              key={x}
            >
              {x}
            </h6>
          );
        })}
      </footer>
    </div>
  );
};

export default Card;
