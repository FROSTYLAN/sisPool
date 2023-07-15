import axios from "axios";
import { useEffect, useState } from "react";

export default function Select({ API_URL, keyS }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}${keyS}`).then((res) => setData(res.data));
  }, [API_URL, keyS]);

  return (
    <div>
      <label htmlFor={keyS}>CARGO:</label>
      <select name={keyS} id={keyS}>
        {data.map((opt) => (
          <option key={opt.ID} value={opt.ID}>
            {opt.DESCRIPCION}
          </option>
        ))}
      </select>
    </div>
  );
}
