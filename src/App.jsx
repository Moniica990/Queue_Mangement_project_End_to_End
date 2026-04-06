import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue,{...customer,id: Date.now(),status:"Waiting"}])
  };
   const updateStatus = (id, status) =>{ 
    setQueue(queue.map(customer=>
      customer.id==id?{...customer,status:status}:customer
    ));
      };
  

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((c) => c.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />

        <QueueDisplay
        queue={queue}
        onUpdateStatus={updateStatus}
        onRemove={removeFromQueue}

        />

      </main>
    </div>
  );
}