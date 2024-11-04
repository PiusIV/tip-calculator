import { useState } from "react";
import Header from "./components/Header";
import BillInput from "./components/BillInput";
import ServiceTip from "./components/ServiceTip";
import ResetButton from "./components/ResetButton";
// import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  // const [ServiceTipValue, setServiceTipValue] = useState("");

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;
  // console.log(bill, tip);

  return (
    <div className="grid place-content-center  gap-6 font-mono font-bold bg-rose-900 text-white h-screen w-full p-4 md:p-2 lg:text-lg">
      <Header />
      <BillInput bill={bill} onSetBill={setBill} tip={tip} />
      <ServiceTip percentage={percentage1} onSelect={setPercentage1} tip={tip}>
        How did you like the service?
      </ServiceTip>
      <ServiceTip percentage={percentage2} onSelect={setPercentage2} tip={tip}>
        How did your friend like the service?
      </ServiceTip>

      <h1 className="text-center mt-3 font-sans text-lg transition-all capitalize">
        {bill
          ? `You will pay $${tip + bill} ($${bill} + $${tip} tip average)`
          : ""}
      </h1>
      <ResetButton
        onSetBill={setBill}
        onSetPercent1={setPercentage1}
        onSetPercent2={setPercentage2}
        bill={bill}
      >
        reset
      </ResetButton>
    </div>
  );
}

export default App;
