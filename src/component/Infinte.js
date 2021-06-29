import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import dummyData from "./dummyData";
import Infinite from "./component/Infinite";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreDate = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1000);
  };

  const dummy = Object.values(dummyData);

  console.log(dummy);

  const dummyNumber = Object.values(dummy[0]);

  console.log(dummyNumber);

  const dummyContents = Object.values(dummyNumber[2]);

  console.log(dummyContents);

  const dummyItem = Object.values(dummyContents[0]);

  console.log(dummyItem);

  return (
    <>
      <Infinite />
      <InfiniteScroll
        dataLength={items}
        next={fetchMoreDate}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            {index}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default App;
