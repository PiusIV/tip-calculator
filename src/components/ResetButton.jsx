function ResetButton({
  onSetBill,
  onSetPercent1,
  onSetPercent2,
  bill,
  children,
}) {
  const handleReset = () => {
    onSetBill("");
    onSetPercent1(0);
    onSetPercent2(0);
  };

  return (
    <div className="flex align-middle justify-center w-80 mt-5 md:w-full">
      {bill ? (
        <button
          onClick={handleReset}
          className="uppercase font-bold text-sm p-4 bg-gray-200 text-rose-800 shadow-md mx-auto rounded-md hover:shadow-lg transition-all hover:text-white hover:bg-rose-900 md:text-lg w-80"
        >
          {children}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ResetButton;
