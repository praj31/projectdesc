import { isDarkThemeSet } from '../../util/theme'

type Props = {
  downloadMarkdown: () => void
}

const MarkdownHeader = (props: Props) => {
  return (
    <>
      <div className='md-header'>
        <h1>Markdown Preview</h1>
        {isDarkThemeSet() ? (
          <div
            className='download-button icon'
            role={'button'}
            onClick={props.downloadMarkdown}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
          </div>
        ) : (
          <div
            className='download-button icon'
            role={'button'}
            onClick={props.downloadMarkdown}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
          </div>
        )}
      </div>
    </>
  )
}

export default MarkdownHeader
