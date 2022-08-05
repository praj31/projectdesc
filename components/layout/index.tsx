import Navbar from './Navbar'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className='container'>
      <Navbar />
      <Sidebar />
      <main className='page'>
        <div className='theme-default-content content__default'>{children}</div>
      </main>
    </div>
  )
}

export default Layout
