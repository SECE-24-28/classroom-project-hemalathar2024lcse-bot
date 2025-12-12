import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Stu_api'

function App() {

  const [SList, setSList] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await api.get('/student');
        setSList(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

  }, []);

  return (
    <>
      {
        SList.map((stu) => (
          <p key={stu.sid}>
            {stu.sid} - {stu.name} - {stu.smark}
          </p>
        ))
      }
    </>
  );
}

export default App;