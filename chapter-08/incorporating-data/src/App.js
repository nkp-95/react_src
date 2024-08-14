import React from "react";
import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";

//대량 데이터
const bigList = [...Array(5000)].map(() => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

export default function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].username}
        width={50}
      />
      <p>
        {bigList[index].username} : {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}
