import PlayControl from './PlayControl'
import VolumeControl from './VolumeControl'

function PlayBar() {
  return (
    <div className='flex items-center h-full px-8'>
      <div className='flex-1 flex items-center justify-start h-full'>
        <div className='shrink-0 h-62px w-62px b b-12px b-#2B2B2B rounded-full overflow-hidden mr-2'>
          <img src='http://p2.music.126.net/oADk0jUPOtbEZhizL1jGKg==/109951167222094278.jpg?param=34y34' className='w-full h-full' />
        </div>
        <div className='flex flex-col gap-2px max-w-180px overflow-hidden'>
          <div className='w-full whitespace-nowrap overflow-hidden font-size-4 c-#283248'>无需要太多</div>
          <div className='w-full whitespace-nowrap overflow-hidden font-size-13px c-#7C828F'>张国荣</div>
        </div>
      </div>
      <div className='flex-basis-450px flex-center h-full'>
        <PlayControl />
      </div>
      <div className='flex-1 flex items-center justify-end h-full'>
        <VolumeControl />
      </div>
    </div>
  )
}

export default PlayBar
