import { useStore } from '../../../store'

const PreviewScreenshots = () => {
  const screenshots = useStore((state) => state.screenshots)

  return (
    <>
      {/* Screenshots */}
      {screenshots.images.length > 0 && screenshots.images[0] && (
        <>
          <h3>Screenshots</h3>
          <div
            style={{
              marginTop: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {screenshots.images.map(
              (item, idx) =>
                item && (
                  <img
                    key={idx}
                    src={item}
                    width='100%'
                    height='auto'
                    style={{ marginBottom: '0.5rem' }}
                  />
                )
            )}
          </div>
        </>
      )}
    </>
  )
}

export default PreviewScreenshots
