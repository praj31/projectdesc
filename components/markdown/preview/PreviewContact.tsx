import { useStore } from '../../../store'

const PreviewContact = () => {
  const contact = useStore((state) => state.contact)

  return (
    <>
      {/* Contact */}
      {(contact.twitter ||
        contact.instagram ||
        contact.linkedin ||
        contact.email) && (
        <>
          <h3>Contact</h3>
          <div
            style={{
              display: 'flex',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Email */}
            {contact.email && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`mailto:${contact.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Email
                  </a>
                </p>
              </>
            )}

            {/* Twitter */}
            {contact.twitter && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://twitter.com/${contact.twitter}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Twitter
                  </a>
                </p>
              </>
            )}
            {/* Instagram */}
            {contact.instagram && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://instagram.com/${contact.instagram}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </a>
                </p>
              </>
            )}
            {/* LinkedIn */}
            {contact.linkedin && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://linkedin.com/in/${contact.linkedin}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </p>
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default PreviewContact
