import { useEffect, useState } from "react";
import axios from "axios";
import TablaDatos from "../components/TablaDatos";
import ModalForm from "../components/Modal";

export default function ControlPanel({ entity, API_URL }) {
  const [data, setData] = useState([]);

  const [updateTable, setUpdateTable] = useState(false);
  const fnUpdateTable = () => {
    setUpdateTable(!updateTable);
    console.log("tabla actualizada");
  };

  useEffect(() => {
    axios.get(`${API_URL}${entity}`).then((res) => setData(res.data));
  }, [API_URL, entity, updateTable]);

  console.log(data);
  return (
    <div className="control-panel">
      <h1>REGISTRAR {entity.toUpperCase()}</h1>

      <section className="panel-container">
        <ModalForm
          work="create"
          entity={entity}
          data={data}
          API_URL={API_URL}
          fnUpdateTable={fnUpdateTable}
        />
        <br />
      </section>

      <TablaDatos
        entity={entity}
        API_URL={API_URL}
        data={data}
        fnUpdateTable={fnUpdateTable}
      />
    </div>
  );
}
