import styles from './variable-text.module.css'

interface VariableTextProps {
  text: string
}
export const VariableText = ({ text }: VariableTextProps) => {
  return (
      <nav>
          <div data-testid="variable-text" className={styles.variable}>
              {text}
          </div>
      </nav>
  )
}
