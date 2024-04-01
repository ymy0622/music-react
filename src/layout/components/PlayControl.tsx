import { useState } from 'react'
import { Slider } from 'antd'
import IconFont from '@/components/IconFont'
import './PlayControl.less'

type Mode = 'sequence' | 'single' | 'random'
const ModeMap: {
  [key in Mode]: string
} = {
  sequence: '列表播放',
  single: '单曲循环',
  random: '随机播放',
}

function PlayControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playMode, setPlayMode] = useState<Mode>('sequence')

  const [progress, setProgress] = useState(30)

  const handlePlayModeClick = () => {
    const index = Object.keys(ModeMap).indexOf(playMode)
    const nextMode = Object.keys(ModeMap)[(index + 1) % Object.keys(ModeMap).length] as Mode
    setPlayMode(nextMode)
  }

  const handlePlayingClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='play-control-buttons'>
        <IconFont
          title={ModeMap[playMode]}
          type={`icon-${playMode}`}
          className='scale-53 hover:c-#242D41 play-control-button'
          onClick={handlePlayModeClick}
        />
        <IconFont title='上一首' type='icon-last' className='scale-70 hover:c-#242D41 play-control-button' />
        <IconFont
          title={isPlaying ? '暂停' : '播放'}
          type={`icon-${isPlaying ? 'pause' : 'play'}-filled`}
          className='c-primary hover:(c-primary scale-105) play-control-button'
          onClick={handlePlayingClick}
        />
        <IconFont title='下一首' type='icon-next' className='scale-70 hover:c-#242D41 play-control-button' />
        <IconFont title='播放列表' type='icon-music-list' className='scale-53 hover:c-#242D41 play-control-button' />
      </div>
      <div className='progress-item flex-center w-full font-size-3 select-none'>
        <div>01:18</div>
        <Slider
          value={progress}
          onChange={setProgress}
          tooltip={{ open: false }}
          className='custom-progress-control w-full'
        />
        <div>04:21</div>
      </div>
    </div>
  )
}

export default PlayControl
