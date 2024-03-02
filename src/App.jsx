import Card from "./Components/Card";
import array from "./Components/data";

function App() {
  return (
    <div className="flex justify-around py-8 px-[5%] bg-[#eceae7] flex-wrap gap-y-7 gap-x-7">
      {array.map((x) => {
        return <Card x={x} key={x.imgAlt} />;
      })}
    </div>
  );
}

export default App;
