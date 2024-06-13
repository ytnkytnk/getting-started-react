import "./App.css";

function App() {
  // // hello alice block
  // const name = "Alice";
  // const element = <h1>Hello {name}!</h1>;

  // // total purchase block
  // const item = "apple";
  // const price = 2;
  // const count = 10;
  // const element = (
  //   <div>
  //     <h1>Total Purchased:</h1>
  //     <p>
  //       Purchased {count} {item}s for ${price} each. The total is $
  //       {count * price}.;
  //     </p>
  //   </div>
  // );

  // // url block
  // const name = "Alice";
  // const url = "http://www.thinkful.com/";
  // const linkText = "Thinkful";
  // const element = (
  //   <p>
  //     {" "}
  //     Hey, {name}! Please visit <a href={url}>{linkText}</a>.
  //   </p>
  // );

  // // multiple top level elements are not allowed, wrap by <div> or react fragment <>
  // const element = (
  //   <>
  //     <h1>This is H1 element</h1>
  //     <h2>This is H2 element</h2>
  //   </>
  // );

  // closing tag is not necessary for some cases (img, input, link, br, hr)
  const element = (
    <>
      <h2>Heading</h2>
      <img src="./favicon.ico" alt="react icon" width="100px" />
      <br />
    </>
  );

  return element;
}

export default App;
