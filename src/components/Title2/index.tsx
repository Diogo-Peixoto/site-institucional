interface ITitle2Props {
  children: React.ReactNode
  className?: string
}

export const Title2 = ({ children, className }: ITitle2Props) => {
  return (
    <h2
      className={`text-4xl font-medium max-md:text-2xl text-center ${className}`}
    >
      {children}
    </h2>
  )
}
