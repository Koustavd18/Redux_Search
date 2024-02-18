import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCarList = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const total = filteredCarList.reduce((acc, cur) => acc + cur.cost, 0);
    return total;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
