import Table from "./components/table3";
import Table2 from "./components/table2";
import {Editor} from "./components/table3";

function App() {
    return (
        <div className="flex flex-col items-center m-3">
            <h1 className="text-3xl hover:font-bold text-red-800 m-3"> Main table </h1>
            <Table/>
        </div>
    );
}

export default App;
