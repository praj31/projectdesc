import { useStore } from '../../../store'

const PreviewRoles = () => {
  const roles = useStore((state) => state.roles)

  return (
    <>
      {/* Roles */}
      {roles.people.length > 0 && roles.people[0] && (
        <>
          <h3>Role(s)</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {roles.people.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}
    </>
  )
}

export default PreviewRoles
