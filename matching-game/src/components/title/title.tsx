import styles from './title.module.css'

interface TitleProps {
  text: string
}
export const Title = ({ text }: TitleProps) => {
  return (
      <nav>
          <div data-testid="title" className={styles.title}>
              {text}
          </div>
      </nav>
  )
}
