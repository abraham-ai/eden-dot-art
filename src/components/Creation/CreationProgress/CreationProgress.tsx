import React, { useEffect } from 'react'
//  useState, useReducer

// UI
import { Box, styled, Typography } from '@mui/material'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { batch } from 'react-redux'
import {
  // addCreations,
  // setRunningCreationCount,
  // setNewCreationReady,
  // incrementRunningCreationCount,
  setCreationsProgress,
  setIsRunningTrue,
  setIsRunningFalse,
  setIsLoader,
  decrementRunningCreationCount,
} from '@/redux/slices/creationsSlice'

// import { setVisible } from '../../redux/slices/snackbarSlice'

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

const RunningCreationStyles = styled(Box)(
  () =>
    `
  .ant-progress-circle .ant-progress-text {
    font-size: 0.85em;
  }
  .ant-progress-inner.ant-progress-circle-gradient {
    font-size: 12px;
  }
`,
)

// function runningReducer(state, action) {
//   switch (action.type) {
//     case 'start':
//       dispatch(setIsLoader(true))
//     // return { ...state, isRunning: true };
//     case 'stop':
//       dispatch(setIsLoader(false))
//     // return { ...state, isRunning: false };
//     default:
//       throw new Error()
//   }
// }

interface Creation {
  status: string
  status_code: number
  _id: string
  textInput: string
}

export default function CreationProgress({
  status,
  status_code,
  _id,
  textInput,
}: Creation) {
  // const [stateReducer, setReducer] = useReducer(runningReducer, {})
  // console.log({ creation });

  // redux
  const dispatch = useAppDispatch()
  const {
    // creations,
    // newCreationReady,
    // runningCreationCount,
    creationsProgress,
    isRunning,
  } = useAppSelector(state => state.creations)

  // useEffect function checking running queue
  // const runStatusChecker = async (taskId, textInput) => {
  //   const results = await axios.post(serverUrl + 'get_status', {
  //     password: serverPassword,
  //     eden_task_id: taskId,
  //   });
  //   creations[taskId] = results.data;
  //   creations[taskId].textInput = textInput;
  //   dispatch(addCreations({ ...creations }));
  //   if (Object.keys(creations).length > 0) {
  //     // showButtonSB();
  //     console.log('creations > than 0');
  //   }
  //   if (results.data.status == 'complete') {
  //     message.info('Creation "' + textInput + '" succeeded :)');
  //     setTimeout(function () {
  //       console.log('New Ready');
  //       // props.onNewReady(taskId);
  //     }, 2500);
  //   } else if (results.data.status == 'failed') {
  //     message.error('Creation "' + textInput + '" failed: ' + results.data.output);
  //   } else if (results.data.status == 'queued') {
  //     setTimeout(function () {
  //       runStatusChecker(taskId, textInput);
  //     }, 5000);
  //   } else if (results.data.status == 'running') {
  //     setTimeout(function () {
  //       runStatusChecker(taskId, textInput);
  //     }, 2000);
  //   }
  // };

  useEffect(() => {
    // DEBUG
    // console.log('Creation Running useEffect');
    // console.log(isRunning);
    // console.log(runningCreationCount);
    // console.log(`RUNNING-CREATION-COUNT: ${runningCreationCount}`);
    // console.log(`Running creationID: ${creation._id}`);
    // console.log(`isRunning: ${isRunning[creation._id]}`);
    // console.log(`creation status: ${creation.status}`);
    // console.log(`creation progress: ${creation.status_code}`);
    // console.log(`creation isRunning undefined? ${typeof isRunning[creation._id] === 'undefined'}`);

    if (
      status === 'running' &&
      typeof isRunning[_id] === 'undefined' &&
      status_code === null
    ) {
      // console.log('New creation running!')
      batch(() => {
        dispatch(setIsRunningTrue(_id))
        dispatch(setCreationsProgress(0))
        // dispatch(incrementRunningCreationCount());
      })
    } else if (status === 'running' && isRunning[_id] === false) {
      // console.log('Creation is running!')
      // console.log({ status, status_code, _id })
      batch(() => {
        dispatch(setCreationsProgress(status_code))
        dispatch(setIsRunningTrue(_id))
        // dispatch(incrementRunningCreationCount());
      })
    } else if (
      status === 'running' &&
      isRunning[_id] === true &&
      status_code === 100
    ) {
      // console.log('Creation is running and increasing progress!')
      // console.log({ status, status_code, _id })
      batch(() => {
        dispatch(decrementRunningCreationCount())
        dispatch(setIsRunningFalse(_id))
        dispatch(setCreationsProgress(status_code))
      })
    } else if (status === 'running' && isRunning[_id] === true) {
      // console.log('Creation is running and increasing progress!')
      // console.log({ status, status_code, _id })
      batch(() => {
        dispatch(setCreationsProgress(status_code))
      })
    } else if (status === 'queued') {
      // console.log('Creation is queued')
      // console.log({ status, status_code, _id })
      batch(() => {
        // dispatch(incrementRunningCreationCount());
        dispatch(setIsRunningFalse(_id))
      })
    } else if (status === 'complete' && isRunning[_id] === true) {
      // console.log('Creation is complete')
      batch(() => {
        dispatch(decrementRunningCreationCount())
        dispatch(setIsRunningFalse(_id))
        dispatch(setIsLoader(false))
      })
    } else if (status === 'failed') {
      // console.log('Running Creation progress failed!!')
      batch(() => {
        dispatch(setIsRunningFalse(_id))
        dispatch(decrementRunningCreationCount())
        dispatch(setIsLoader(false))
      })
    }
  }, [status, status_code, _id, dispatch, isRunning])

  // console.log(`RUNNING-CREATION-COUNT: ${runningCreationCount}`);
  // console.log(`CREATIONS-PROGRESS: ${creationsProgress}`);

  function RunningCreations() {
    if (status === 'running' && creationsProgress < 100) {
      return (
        <RunningCreationStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
      )
    } else if (status === 'queued') {
      return (
        <RunningCreationStyles id="running-creation">
          {/* {queue_position} */}
          {textInput} <b>(Queue position 1)</b>{' '}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
      )
    } else if (status === 'complete') {
      return null
      //   <RunningCreationStyles id="running-creation">
      //     {creation.textInput}
      //     <Progress
      //       type="circle"
      //       strokeColor={{
      //         '0%': '#108ee9',
      //         '100%': '#87d068',
      //       }}
      //       percent={100}
      //       width={50}
      //       strokeWidth={15}
      //     />
      //   </RunningCreationStyles>
      //
    } else if (status === 'failed') {
      return (
        <RunningCreationStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
      )
    } else if (creationsProgress === 0) {
      return null
    } else if (creationsProgress === 100) {
      return null
    } else {
      return <span>{JSON.stringify(status_code)}</span>
    }
  }
  return RunningCreations()
}
