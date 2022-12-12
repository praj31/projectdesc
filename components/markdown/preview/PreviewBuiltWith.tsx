import { useStore } from '../../../store'

const PreviewBuiltWith = () => {
  const builtwith = useStore((state) => state.builtwith)

  return (
    <>
      {/* Built With */}
      {builtwith.stack.length > 0 && builtwith.stack[0] && (
        <>
          <h3>Built With</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {builtwith.stack.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}
    </>
  )
}

export default PreviewBuiltWith
