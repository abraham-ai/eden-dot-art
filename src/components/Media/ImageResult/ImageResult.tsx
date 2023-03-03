import Image from 'next/image'

const ImageResult = ({
  resultUrl,
  width,
  height,
}: {
  resultUrl: string
  width: number
  height: number
}) => {
  return (
    <Image
      src={resultUrl}
      width={width}
      height={height}
      alt="result"
      fill
      placeholder={'blur'}
      blurDataURL={resultUrl}
    />
  )
}

export default ImageResult
