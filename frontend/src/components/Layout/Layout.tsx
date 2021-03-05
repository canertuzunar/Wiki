import React, { Fragment, useRef } from 'react'
import { useStore } from 'src/util/store/store'
import { Header, Head } from '../index'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const LayoutRef = useRef<HTMLDivElement>(null) 
  const { dispatch } = useStore()
  const scrollDetector = () => {
    const element = LayoutRef.current
    element!.scrollTop > 30
      ? dispatch({ type: 'setShadow', value: true })
      : dispatch({ type: 'setShadow', value: false })
  }

  return (
    <Fragment>
      <div
        ref={LayoutRef}
        className={styles.container}
        onScroll={scrollDetector}
      >
        <Head />
        <Header />
        {children}
      </div>
    </Fragment>
  )
}

export default Layout
