// FETCH
import axios from 'axios'

// CONST
const GATEWAY_URL = process.env.GATEWAY_URL
const MINIO_URL = process.env.MINIO_URL
const MINIO_BUCKET = process.env.MINIO_BUCKET

interface PollResponse {
  status: string
  outputUrl: string | null
  error: string | null
}

export const submitPrediction = async (config: object, authToken: string) => {
  const request = {
    token: authToken,
    application: 'heartbeat',
    generator_name: 'stable-diffusion',
    config: config,
    metadata: { 'user-agent': 'examples.eden.art' },
  }
  const responseR = await axios.post(GATEWAY_URL + '/request', request)
  const prediction_id = responseR.data
  return prediction_id
}

export const pollResult = async (
  prediction_id: string,
): Promise<PollResponse> => {
  const response = await axios.post(GATEWAY_URL + '/fetch', {
    taskIds: [prediction_id],
  })
  const { status, output } = response.data[0]
  if (status == 'complete') {
    const outputUrl = `${MINIO_URL}/${MINIO_BUCKET}/${output}`
    return { status, outputUrl, error: null }
  } else if (status == 'failed') {
    return { status, outputUrl: null, error: 'Prediction failed' }
  }
  return { status, outputUrl: null, error: null }
}

export const getGatewayResult = async (
  config: object,
  authToken: string,
  timeout = 2000,
) => {
  const prediction_id = await submitPrediction(config, authToken)
  let response = await pollResult(prediction_id)
  while (
    response.status == 'pending' ||
    response.status == 'starting' ||
    response.status == 'running'
  ) {
    await new Promise(r => setTimeout(r, timeout))
    response = await pollResult(prediction_id)
  }
  return response
}
