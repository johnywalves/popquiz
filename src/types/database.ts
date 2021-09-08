export interface IQuestions {
  image: string
  title: string
  description: string
  answer: number
  alternatives: Array<number>
}

export interface ITheme {
  colors: {
    primary: string
    secondary: string
    mainBg: string
    contrastText: string
    wrong: string
    success: string
  }
  borderRadius: string
}

interface IDatabase {
  bg: string
  title: string
  description: string
  questions: Array<IQuestions>
  external: Array<string>
  theme: ITheme
}

export default IDatabase
