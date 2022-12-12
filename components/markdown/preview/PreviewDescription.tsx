import { useStore } from '../../../store'

const PreviewDescription = () => {
  const description = useStore((state) => state.description)

  return (
    <>
      {/* Description */}
      {/* Objective */}
      {description.objective && (
        <>
          <h3>Project Objective</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {description.objective}
          </p>
        </>
      )}
      {/* Audience */}
      {description.scope && (
        <>
          <h3>Project Audience</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {description.scope}
          </p>
        </>
      )}
      {/* Challenge */}
      {description.challenge && (
        <>
          <h3>Project Challenge(s)</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {description.challenge}
          </p>
        </>
      )}
      {/* Features */}
      {description.features.length > 0 && description.features[0] && (
        <>
          <h3>Project Features</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {description.features.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}
    </>
  )
}

export default PreviewDescription
