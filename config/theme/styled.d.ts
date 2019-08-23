import 'styled-components'

// extending styled-components with theme interface
declare module 'styled-components' {
  export interface AluxionTheme {
    borderRadius?: string
    colors: {
      primary: string
      secondary?: string
      default?: string
      background?: string
      lightGray?: string
      gray?: string
    }
    fonts?: {
      navbar?:{
        size?: string
        color?: string
      },
      h1?: {
        size?: string
        color?: string
      }
      h2?: {
        size?: string
        color?: string
      }
      h3?: {
        size?: string
        color?: string
      } 
      p?: {
        size?: string
        color?: string
      }   
      span?: {
        size?: string
        color?: string
      }              
    }
  }
}
