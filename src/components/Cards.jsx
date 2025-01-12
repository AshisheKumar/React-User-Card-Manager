import React from "react";
import Card from "./Card";
function Cards({ users, handleRemove }) {
  return (
    <div className="w-full gap-4  max-h-96 overflow-auto flex flex-wrap justify-center  p-4">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            id={index}
            user={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
