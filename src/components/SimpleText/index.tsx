interface ISimpleTextProps {
  children: React.ReactNode
  className?: string
}

export const SimpleText = ({ children, className }: ISimpleTextProps) => {
  return <p className={`text-sm max-md:text-xs ${className}`}>{children}</p>
}
