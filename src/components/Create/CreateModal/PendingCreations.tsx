import React, { useState, useContext } from 'react'
import { Modal, Button } from 'antd'
import { useTasks } from 'src/hooks/useTasks'
// import axios from 'axios'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// TYPES
import Task from '@/interfaces/Task'

export default function PendingCreations() {
  const context = useContext(AppContext)
  // const { progress, setProgress } = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { tasks } = useTasks()

  const { isWeb3WalletConnected, isWeb3AuthSuccess, isCreateUIModalOpen } =
    context

  // const pollForResult = async (pollingInterval: number = 2000) => {
  //   let response = await axios.post("/api/fetch", {taskId: []});
  //   let task = response.data.task;

  //   while (
  //     task.status == "pending" ||
  //     task.status == "starting" ||
  //     task.status == "running"
  //   ) {
  //     await new Promise((r) => setTimeout(r, pollingInterval));
  //     response = await axios.post("/api/fetch", {taskId: []});
  //     task = response.data.task;
  //     // setProgress(Math.floor(100*task.progress));
  //   }

  //   if (task.status == "failed") {
  //     throw new Error(task.error.message);
  //   } else if (!response.data.creation) {
  //     throw new Error("No creation found");
  //   };

  //   return response.data.creation;
  // };

  const handleComponent = () => {
    if (isWeb3WalletConnected && isWeb3AuthSuccess && isCreateUIModalOpen) {
      return (
        <>
          <Modal
            style={{ backgroundColor: 'white' }}
            open={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            bodyStyle={{ maxWidth: '50%', maxHeight: '50%' }}
            width="50%"
          >
            <div>
              {tasks.map((task: Task) => {
                return (
                  <>
                    {task.status === 'pending' ||
                    task.status === 'starting' ||
                    task.status === 'running' ? (
                      <div key={task._id}>
                        <div>{task.taskId}</div>
                        <div>{task.status}</div>
                        <div>{task.progress}</div>
                      </div>
                    ) : null}
                  </>
                )
              })}
            </div>
          </Modal>

          <Button onClick={() => setIsModalVisible(true)}>
            Pending creations
          </Button>
        </>
      )
    } else {
      return null
    }
  }

  return handleComponent()
}
