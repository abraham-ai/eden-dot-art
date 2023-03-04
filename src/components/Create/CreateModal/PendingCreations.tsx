import React, { useState, useContext, useEffect } from 'react'
import { Spin, Modal, Button, Progress } from 'antd'
import { useTasks } from 'src/hooks/useTasks'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />;
const doneIcon = <CheckOutlined style={{ fontSize: 24, color: "white" }} />;


// TYPES
import Task from '@/interfaces/Task'

export default function PendingCreations() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { tasks, mutate } = useTasks();
  const { isConnected, isSignedIn, isCreateUIModalOpen } = useContext(AppContext);

  useEffect(() => {
    mutate();
  }, [isCreateUIModalOpen, mutate]);

  // find if any of the tasks status is not done
  const tasksRunning = tasks?.some((task: Task) => task.status !== 'completed');

  const handleComponent = () => {
    if (isConnected && isSignedIn) {
      return (
        <>
          <Modal
            title="Creations status"
            open={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            cancelButtonProps={{ style: { display: 'none' } }}
          >
            <div>
              {tasks && tasks.map((task: Task) => {
                return (
                  <div key={task._id}>
                    {task.taskId}
                    <Progress percent={100*task.progress} />
                  </div>
                )
              })}
            </div>
          </Modal>
          {tasks?.length > 0 && (
            <Button 
              shape="round" 
              size="large" 
              type="primary" 
              onClick={() => setIsModalVisible(true)}
            >
              {tasksRunning ? <Spin indicator={loadingIcon}/> : doneIcon}
            </Button>
          )}
        </>
      )
    }
  }
//tip={`Pending creations ${tasks?.length}`} 
  return handleComponent()
}
