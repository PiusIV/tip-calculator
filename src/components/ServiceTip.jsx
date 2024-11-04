function ServiceTip({ children, percentage, onSelect }) {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-3">
      <label htmlFor="percentage">{children}</label>
      <select
        name=""
        id="percentage"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="text-black cursor-pointer py-1 text-center rounded-md"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value={100 / 10}>It was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}

export default ServiceTip;
