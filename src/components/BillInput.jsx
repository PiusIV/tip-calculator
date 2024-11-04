import "../App.css";

function BillInput({ bill, onSetBill }) {
  // console.log(bill);

  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center flex-col gap-2 mb-4 w-auto"
    >
      <label htmlFor="number" className="text-center capitalize">
        How much was the bill?
      </label>
      <input
        type="number"
        name=""
        id="number"
        onChange={(e) => onSetBill(Number(e.target.value))}
        value={bill}
        className="text-black py-1 outline-none shadow-inner shadow-slate-600 text-center rounded-md align-middle mx-auto"
      />
    </form>
  );
}

export default BillInput;
