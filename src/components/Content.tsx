/** @jsxImportSource theme-ui **/
type ContentProps = {
  children?: any
}

const Content = ({ children }: ContentProps) => {
  return (
    <section
      className="Content"
      sx={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        px: 4,
      }}
    > 
      {children}
    </section>
  )
}
export default Content
