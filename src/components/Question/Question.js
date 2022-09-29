import React from "react";

const Question = () => {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-6 bg-zinc-400 p-6 mt-5">
      <div>
        <h1 className="font-bold text-2xl mb-3">How Does React Work?</h1>
        <p>
          React first create virtual DOM which represent actual DOM. And when a
          component update some data in it, its run the diff algorithm for
          finding what are different between current component and previous
          component and update only that modified part.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-3">React props and state.</h1>
        <p>
          State are use when we want to update and modified some data. So state
          is mutable. And props use for when we want send some data to child
          component and we can only send the data not modified. So its
          immutable.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-3">
          What are the use of useEffect other then load data?
        </h1>
        <p>
          The use of useEffect other then load data is directly updating the DOM
          and for timers.
        </p>
      </div>
    </div>
  );
};

export default Question;
