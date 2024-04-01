import { useState } from 'react'
import { Slider } from 'antd'
import IconFont from '@/components/IconFont'
import './VolumeControl.less'

function VolumeControl() {
  const [volume, setVolume] = useState(80)

  const handleVolumeBtnClick = () => {
    if (volume <= 0) setVolume(80)
    else setVolume(0)
  }

  return (
    <>
      <IconFont
        type={volume <= 0 ? 'icon-volume-none' : 'icon-volume'}
        className='font-size-5.5 cursor-pointer c-#7C828F hover:c-#4F5666'
        onClick={handleVolumeBtnClick}
      />
      <Slider value={volume} onChange={setVolume} className='custom-volume-control w-80px' />
    </>
  )
}

export default VolumeControl
