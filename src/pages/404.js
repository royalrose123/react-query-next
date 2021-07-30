import { useRouter } from 'next/router'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

export default function NotFound() {
  const router = useRouter()

  const handleBackToHomeClick = () => router.push('/')

  return (
    <div className={cx('not-found')}>
      <div>not found</div>
      <button onClick={handleBackToHomeClick}>回到首頁</button>
    </div>
  )
}
