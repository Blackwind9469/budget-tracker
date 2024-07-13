import getUserBalance from "../actions/getUserBalance";
import { addCommas } from "../lib/utils";
const Balance = async () => {
    const { balance } = await getUserBalance();

    return (
        <div className="mt-4">
            <h2 className="font-bold">Your Balance</h2>
            <h1 className="bt-4">{addCommas (balance ?? 0)} TL</h1>
        </div>
    );
};

export default Balance;
